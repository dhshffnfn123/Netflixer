import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    setError('');
    if (authError) {
      console.log('Error!');
      console.log(authError);
      setError('Failed');
      return;
    }
    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
margin-left: 6.2rem;
  p {
    margin: 0;
    color: ${palette.fontColor};
    font-size: 0.5rem;
    margin-bottom: 0.2rem;aaa
  }
  form {
    display: flex;
    flex-wrap: wrap;
    width 420px;
    margin: auto;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  background: transparent;
  border-bottom: 2px solid ${palette.fontColor};
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  outline: none;
  width: 220px;
  margin-bottom: 0.5rem;
  transition: all 0.5s ease;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 2px solid ${palette.logoFontColor};
  }
`;

const Footer = styled.div`
  margin-top: -0.2rem;
  text-align: left;
  a {
    color: ${palette.fontColor};
    font-size: 0.2rem;
    border-bottom: 1px solid ${palette.fontColor};
    transition: all 0.2s ease;
  }
  a:hover {
    color: rgb(124, 35, 35);
    border-bottom: 1px solid rgb(124, 35, 35);
  }
`;

const AuthForm = () => {
  return (
    <AuthFormBlock>
      <p>Login_</p>
      <form>
        <StyledInput autoComplete="username" name="username" placeholder="ID" />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="PW"
          type="password"
        />
        <Button>LOGIN</Button>
      </form>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;

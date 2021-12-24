import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { visibleAuthFromBlock } from '../../lib/animation/loginPageAnimation';

const AuthFormBlock = styled.div`
  margin-left: 6.2rem;
  opacity: 0;
  animation: ${visibleAuthFromBlock} 1s 3.2s forwards;
  form {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
  }
`;

const StyledParagraph = styled.p`
  color: ${palette.fontColor};
  font-size: 0.5rem;
  ${(props) =>
    props.login &&
    css`
      margin: 0;
      margin-bottom: 0.2rem;
    `}
  ${(props) =>
    props.register &&
    css`
      margin: 0;
      margin-left: 3rem;
      margin-bottom: 0.2rem;
    `}
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
  a {
    color: ${palette.fontColor};
    font-size: 0.2rem;
    border-bottom: 1px solid ${palette.fontColor};
    transition: all 0.2s ease;
    cursor: pointer;
    text-align: left;
    position: relative;
  }
  a:hover {
    color: rgb(124, 35, 35);
    border-bottom: 1px solid rgb(124, 35, 35);
  }
`;

const textMap = {
  login: 'Login_',
  register: 'Register_',
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      {type === 'login' ? (
        <StyledParagraph login>{text}</StyledParagraph>
      ) : (
        <StyledParagraph register>{text}</StyledParagraph>
      )}
      {type === 'login' ? (
        <form style={{ width: '420px' }}>
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder="ID"
          />
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder="PW"
            type="password"
          />
          {type === 'login' ? (
            <Button login grayBorder marginTopLeft>
              LOGIN
            </Button>
          ) : (
            <Button register grayBorder marginTopLeft>
              REGISTER
            </Button>
          )}
        </form>
      ) : (
        <form style={{ width: '300px' }}>
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder="ID"
          />
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder="PW"
            type="password"
          />
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="PW Confirm"
            type="password"
          />
          {type === 'login' ? (
            <Button login grayBorder marginTopLeft>
              LOGIN
            </Button>
          ) : (
            <Button register grayBorder marginTopLeft>
              REGISTER
            </Button>
          )}
        </form>
      )}

      <Footer>
        {type === 'login' ? (
          <Link to="/register" style={{ marginTop: '-0.2rem' }}>
            회원가입
          </Link>
        ) : (
          <Link to="/login" style={{ top: '2.8rem', left: '3rem' }}>
            로그인
          </Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;

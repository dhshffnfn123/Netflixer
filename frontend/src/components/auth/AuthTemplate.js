import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import { visibleLogo } from '../../lib/animation/loginPageAnimation';

/* 화면 전체 채우기 */
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TransparentBox = styled.div`
  .logo-area {
    opacity: 0;
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 5rem;
    color: ${palette.logoFontColor};
    text-shadow: 3px 3px 20px black;
    margin-top: 6rem;
    animation: ${visibleLogo} 2.5s 0.8s forwards;
  }
  padding: 2rem;
  width: 560px;
  height: 400px;
  background: transparent;
  /* 임시 */
  /* border: 1px solid white; */
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <TransparentBox>
        <div className="logo-area">
          <Link to="/">NETFLIXER</Link>
        </div>
        {children}
      </TransparentBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;

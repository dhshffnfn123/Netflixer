import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: #222222;
  box-shadow: 0px 2px 4px ${palette.logoFontColor};
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #222222;
  .logo {
    font-size: 2.125rem;
    font-weight: 600;
    letter-spacing: 2px;
    color: #c92a2a;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 500;
  margin-right: 1rem;
  color: #dee2e6;
`;
const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            NETFLIXER
          </Link>
          {user ? (
            <div className="right">
              {user === 'qudgns97' && <Button>관리자 페이지</Button>}
              <UserInfo>{user.username}</UserInfo>
              <Button onClick={onLogout} header grayborder>
                LOGOUT
              </Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login" header grayborder>
                LOGIN
              </Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;

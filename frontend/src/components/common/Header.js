import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: #222222;
  box-shadow: 0px 2px 4px black;
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
const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className="logo">NETFLIXER</div>
          <div className="right">
            <Button header grayBorder>
              LOGIN
            </Button>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;

import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const StyledButton = styled(Button)`
  position: unset;
  width: 100px;
  height: 100px;
  border-radius: 0;
  font-size: 0.8rem;
  font-weight: 800;
  background: #dddddd;
  &:hover {
    border: 2px solid #640000;
  }

  @media (max-width: 1500px) {
    margin-left: 0;
  }
  @media (max-width: 1024px) {
    margin-top: 200px;
  }
  @media (max-width: 768px) {
    margin-top: 0;
    margin: auto;
    width: 400px;
    height: 50px;
    font-size: 1.3rem;
  }
`;

const WriteActionButtons = ({ onPublish }) => {
  return <StyledButton onClick={onPublish}>리뷰 쓰기</StyledButton>;
};

export default WriteActionButtons;

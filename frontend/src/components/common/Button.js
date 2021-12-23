import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: 2px solid ${palette.fontColor};
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 1rem 1rem;
  margin-left: 1rem;
  margin-top: -2rem;
  position: relative;
  bottom: 3px;
  transition: all 0.3s ease;
  color: ${palette.fontColor};
  outline: none;
  cursor: pointer;

  background: ${palette.backgroundColor};
  &:hover {
    border: 2px solid ${palette.logoFontColor};
    color: ${palette.logoFontColor};
    box-shadow: 0 0 0 5px black;
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;

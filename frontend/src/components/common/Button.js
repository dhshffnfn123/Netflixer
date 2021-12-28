import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  position: relative;
  bottom: 3px;
  transition: all 0.3s ease;
  outline: none;
  cursor: pointer;
  background: gray;
  &:hover {
    background: black;
    color: white;
  }

  ${(props) =>
    props.grayBorder &&
    css`
      border: 2px solid ${palette.fontColor};
      color: ${palette.fontColor};
      background: ${palette.backgroundColor};
      &:hover {
        border: 2px solid ${palette.logoFontColor};
        color: ${palette.logoFontColor};
        box-shadow: 0 0 0 5px black;
      }
    `}

  ${(props) =>
    props.marginTopLeft &&
    css`
      margin-left: 1rem;
      margin-top: -2rem;
    `}
  ${(props) =>
    props.login &&
    css`
      padding: 1rem 1rem;
    `}
  ${(props) =>
    props.register &&
    css`
      padding: 0.5rem 5rem;
      bottom: -38px;
      margin-left: 0px;
    `}
    ${(props) =>
    props.header &&
    css`
      margin-top: 0.5rem;
      padding: 0.5rem 1rem;
      background: transparent;
      border: 2px solid #adb5bd;
      color: #adb5bd;
    `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;

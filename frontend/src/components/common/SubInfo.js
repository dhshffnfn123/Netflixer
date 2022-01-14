import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const SubInfoBlock = styled.div`
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.inputBoxColor};

  span + span:before {
    color: ${palette.inputBoxColor};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const SubInfo = ({ hasMarginTop }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={`/@`} />
        </b>
      </span>
    </SubInfoBlock>
  );
};

export default SubInfo;

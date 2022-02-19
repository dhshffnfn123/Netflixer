import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';

const ManagementListBlock = styled(Responsive)`
  margin: 3rem;
  background: cornflowerblue;
`;

const ManagementList = () => {
  return <ManagementListBlock>Test</ManagementListBlock>;
};

export default ManagementList;

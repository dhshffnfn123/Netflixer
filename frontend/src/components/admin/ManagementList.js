import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';

const ManagementListBlock = styled(Responsive)`
  margin: auto;
  margin-top: 5rem;
  height: 800px;
  background: gray;
  display: grid;
  grid-template-columns: 734px 734px;
`;
const ChartBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ManagementListBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ManageButton = styled(Button)`
  background: ${palette.fontColor};
  margin-top: 1.8rem;
  width: 350px;
  height: 350px;
  @media (max-width: 1024px) {
  }
`;
const Chart = styled.div`
  background: ${palette.fontColor};
  margin-top: 1.8rem;
  width: 700px;
  height: 345px;
  @media (max-width: 1024px) {
  }
`;

const ManagementList = () => {
  return (
    <ManagementListBlock>
      <ChartBox>
        <Chart />
        <Chart />
      </ChartBox>
      <ManagementListBox>
        <ManageButton>A</ManageButton>
        <ManageButton>B</ManageButton>
        <ManageButton>C</ManageButton>
        <ManageButton>D</ManageButton>
      </ManagementListBox>
    </ManagementListBlock>
  );
};

export default ManagementList;

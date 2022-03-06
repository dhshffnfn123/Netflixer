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
  @media (max-width: 1500px) {
    grid-template-columns: 700px 1fr;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 800px;
    grid-template-rows: 400px 200px;
  }
`;
const ChartBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    width: 735px;
  }
`;
const ManagementListBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    width: 735px;
  }
`;
const ManageButton = styled(Button)`
  background: ${palette.fontColor};
  margin-top: 1.8rem;
  width: 350px;
  height: 350px;
  @media (max-width: 1500px) {
    margin-left: 30px;
    width: 250px;
    height: 150px;
  }
  @media (max-width: 1024px) {
    margin-left: 0;
    width: 350px;
  }
`;
const Chart = styled.div`
  background: ${palette.fontColor};
  margin-top: 1.8rem;
  width: 700px;
  height: 345px;
  @media (max-width: 1024px) {
    width: 350px;
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

import React from 'react';
import styled from 'styled-components';
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
        <Chart /> {/* 당일 리뷰 작성 횟수 */}
        <Chart /> {/* 당일 회원가입 회원 수 */}
      </ChartBox>
      <ManagementListBox>
        <ManageButton onClick>컨텐츠 추가</ManageButton> {/* 영상물 작성 */}
        <ManageButton>컨텐츠 수정</ManageButton> {/* 영상물 수정 */}
        <ManageButton>컨텐츠 삭제</ManageButton> {/* 영상물 삭제 */}
        <ManageButton>회원 관리</ManageButton> {/* 회원 관리 */}
      </ManagementListBox>
    </ManagementListBlock>
  );
};

export default ManagementList;

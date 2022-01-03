import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const VideoViewerBlock = styled(Responsive)`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 661px 1fr;
  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 707px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 368px;
    grid-template-rows: 525px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    margin-top: 5rem;
  }
`;
const VideoPoster = styled.div`
  background-image: url('/img/deadfool.png');
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 100px;
  box-shadow: 1px 1px 10px black;
  @media (max-width: 1500px) {
    margin: 0;
  }
  @media (max-width: 768px) {
    background-size: contain;
    width: 400px;
    height: 570px;
    margin: auto;
  }
`;
const VideoInfo = styled.div`
  padding-left: 100px;
  @media (max-width: 768px) {
    width: 400px;
    padding-left: 0;
    margin: auto;
    margin-top: 20px;
  }
`;
const Title = styled.p`
  color: #f8f9fa;
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  text-shadow: 0px 0px 4px #ced4da;
  padding-bottom: 10px;
  border-bottom: 3px solid #ced4da;
`;
const Info = styled.div`
  height: 30px;
  width: 220px;
  padding-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 100px;
  font-size: 1rem;
  color: #ced4da;
  span {
    text-align: center;
    border-right: 1px solid #3a3a3a;
  }
  span:first-child {
    border-left: 1px solid #3a3a3a;
  }
`;
const Summary = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  height: 100px;
  color: #ced4da;
  font-size: 1.2rem;

  @media (max-width: 1500px) {
    font-size: 1rem;
  }
  @media (max-width: 1024px) {
    margin-bottom: 150px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
const Director = styled.p`
  font-size: 1rem;
  color: #ced4da;
  margin: 0;
  margin-bottom: 5px;
`;
const StillCutText = styled.p`
  margin: 0;
  font-size: 2rem;
  margin-top: 190px;
  margin-bottom: 10px;
  color: #ced4da;
  text-shadow: 0 0 5px gray;

  @media (max-width: 1500px) {
    margin-top: 100px;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    position: relative;
    right: 470px;
    margin-top: 70px;
  }
  @media (max-width: 768px) {
    position: unset;
    margin-top: 30px;
  }
`;
const StillCut = styled.div`
  height: 200px;
  background: transparent;
  display: flex;
  justify-content: space-between;

  div {
    width: 100%;
    background: gray;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 10px black;
  }

  @media (max-width: 1500px) {
    div:nth-child(3) {
      display: none;
    }
  }
  @media (max-width: 1024px) {
    position: relative;
    right: 470px;
    width: 760px;
    div:nth-child(3) {
      display: block;
    }
    div {
      width: 400px;
    }
  }
  @media (max-width: 768px) {
    position: unset;
    width: 400px;
    margin-bottom: 100px;
    background-size: contain;
    div {
      height: 250px;
    }
    div:nth-child(3) {
      display: none;
    }
    div:nth-child(1) {
      display: none;
    }
  }
`;

/* --------------------------------- review --------------------------------- */

const ReviewBlock = styled(Responsive)`
  background: white;
`;

const VideoViewer = () => {
  return (
    <VideoViewerBlock>
      <VideoPoster />
      <VideoInfo>
        <Title>데드풀</Title>
        <Info>
          <span>2016</span> <span>청불</span> <span>1시간 48분</span>
        </Info>
        <Summary>
          세상에 이런 히어로쯤 하나 괜찮잖아? 비밀 실험에 참여한 후 특별한
          능력을 갖게 된 주인공. 쌔끈한 빨간 슈트에 찰진 드립 장착한 '데드풀'로
          거듭난다. 파워는 어마무시, 책임감은 개나 줘버려. 어디 한번 놀아보실까?
          뮤직 큐.
        </Summary>
        <Director>감독 : 팀 밀러</Director>
        <Director>
          출연 : 라이언 레이놀즈, 모레나 바카린, 에드 스크레인
        </Director>
        <StillCutText>Still Cut_</StillCutText>
        <StillCut>
          <div style={{ backgroundImage: 'url("/img/still/deadfool1.jpg")' }} />
          <div style={{ backgroundImage: 'url("/img/still/deadfool2.jpg")' }} />
          <div style={{ backgroundImage: 'url("/img/still/deadfool3.jpg")' }} />
        </StillCut>
      </VideoInfo>
    </VideoViewerBlock>
  );
};

export default VideoViewer;

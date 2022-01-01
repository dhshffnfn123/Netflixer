import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const VideoViewerBlock = styled(Responsive)`
  /* background: ${palette.backgroundColor}; */
  margin-top: 5rem;
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 661px 1fr;
  }
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
  }
`;
const VideoPoster = styled.div`
  height: 800px;
  background-image: url('/img/deadfool.png');
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 100px;
  box-shadow: 1px 1px 10px black;
`;
const VideoInfo = styled.div`
  padding-left: 100px;
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
  margin-top: 80px;
  margin-bottom: 10px;
  color: #ced4da;
  text-shadow: 0 0 5px gray;
`;
const StillCut = styled.div`
  height: 200px;
  background: white;
  display: flex;
  justify-content: space-between;
  div {
    width: 230px;
    background: gray;
  }
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
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </StillCut>
      </VideoInfo>
    </VideoViewerBlock>
  );
};

export default VideoViewer;

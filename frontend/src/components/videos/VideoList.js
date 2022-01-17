import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import Tags from '../common/Tags';

const VideoListBlock = styled(Responsive)`
  margin-top: 3rem;
  background: transparent;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 500px;
  }
`;

const VideoItemBlock = styled.div`
  background: #3e3e3e;
  margin-bottom: 100px;
  box-shadow: black 0 0 10px;
  width: 320px;
  height: 550px;

  .box > * {
    padding-left: 10px;
  }

  @media (max-width: 768px) {
    width: 520px;
    height: 300px;
    display: grid;
    grid-template-columns: 210px 1fr;
  }
`;

const PosterBox = styled.div`
  width: 100%;
  height: 455px;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 768px) {
    width: 210px;
    height: 300px;
  }
`;

const Title = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.5rem;
  font-weight: 500;
  color: #b9b9b9;
  padding-top: 5px;

  @media (max-width: 768px) {
  }
`;

const Summary = styled.div`
  color: #b9b9b9;
  padding-top: 25px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const VideoItem = () => {
  return (
    <VideoItemBlock>
      <PosterBox style={{ backgroundImage: `url("/img/deadpool.png")` }} />
      <div className="box">
        <Title>데드풀</Title>
        <Tags tags={['태그1', '태그2', '태그3']} />
        <Summary>
          세상에 이런 히어로쯤 하나 괜찮잖아? 비밀 실험에 참여한 후 특별한
          능력을 갖게 된 주인공. 쌔끈한 빨간 슈트에 찰진 드립 장착한 '데드풀'로
          거듭난다. 파워는 어마무시, 책임감은 개나 줘버려. 어디 한번 놀아보실까?
          뮤직 큐.
        </Summary>
      </div>
    </VideoItemBlock>
  );
};

const VideoList = () => {
  return (
    <VideoListBlock>
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </VideoListBlock>
  );
};

export default VideoList;

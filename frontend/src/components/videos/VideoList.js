import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import Tags from '../common/Tags';

const VideoListBlock = styled(Responsive)`
  margin-top: 3rem;
  background: white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const VideoItemBlock = styled.div`
  background: gray;
  margin-bottom: 100px;
  width: 320px;
  height: 530px;

  p {
  }
`;

const PosterBox = styled.div`
  width: 100%;
  height: 455px;
  background: cornflowerblue;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Title = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.5rem;
  font-weight: 500;
`;

const VideoItem = () => {
  return (
    <VideoItemBlock>
      <PosterBox style={{ backgroundImage: `url("/img/deadpool.png")` }} />
      <Title>데드풀</Title>
      <Tags tags={['태그1', '태그2', '태그3']} />
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

import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const VideoListBlock = styled(Responsive)`
  margin-top: 3rem;
  background: white;
  display: flex;
`;

const VideoItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: gray;
  margin-bottom: 100px;
  width: 300px;

  &:first-child {
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.inputBoxColor};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const VideoItem = () => {
  return (
    <VideoItemBlock>
      <h2>제목</h2>
      <SubInfo />
      <Tags tags={['태그1', '태그2', '태그3']} />
      <p>기타 정보를 넣는 곳</p>
    </VideoItemBlock>
  );
};

const VideoList = () => {
  return (
    <VideoListBlock>
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </VideoListBlock>
  );
};

export default VideoList;

import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const VideoListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WriteVideoButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const VideoItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.logoFontColor};
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
      <div>
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </div>
    </VideoListBlock>
  );
};

export default VideoList;

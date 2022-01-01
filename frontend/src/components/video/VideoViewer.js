import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const VideoViewerBlock = styled(Responsive)`
  /* background: ${palette.backgroundColor}; */
  margin-top: 5rem;
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
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
`;
const VideoInfo = styled.div``;

const VideoViewer = () => {
  return (
    <VideoViewerBlock>
      <VideoPoster />
      <VideoInfo>
        <h1>TITLE</h1>
      </VideoInfo>
    </VideoViewerBlock>
  );
};

export default VideoViewer;

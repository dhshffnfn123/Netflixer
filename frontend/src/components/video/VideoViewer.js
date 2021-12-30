import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const VideoViewerBlock = styled(Responsive)`
  /* background: ${palette.backgroundColor}; */
  background: gray;
  display: grid;
`;

const VideoViewer = () => {
  return <VideoViewerBlock></VideoViewerBlock>;
};

export default VideoViewer;

import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import VideoViewerContainer from '../containers/video/VideoViewerContainer';
import ReviewBoxContainer from '../containers/review/ReviewBoxContainer';

const VideoPage = () => {
  return (
    <>
      <HeaderContainer />
      <VideoViewerContainer />
      <ReviewBoxContainer />
    </>
  );
};

export default VideoPage;

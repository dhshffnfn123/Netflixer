import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import VideoViewerContainer from '../containers/video/VideoViewerContainer';
import ReviewBoxContainer from '../containers/review/ReviewBoxContainer';
import ReviewListContainer from '../containers/reviews/ReviewListContainer';

const VideoPage = () => {
  return (
    <>
      <HeaderContainer />
      <VideoViewerContainer />
      <ReviewBoxContainer />
      <ReviewListContainer />
    </>
  );
};

export default VideoPage;

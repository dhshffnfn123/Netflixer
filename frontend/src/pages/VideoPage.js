import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import VideoViewerContainer from '../containers/video/VideoViewerContainer';
import ReviewBoxContainer from '../containers/review/ReviewBoxContainer';
import ReviewList from '../components/reviews/ReviewList';

const VideoPage = () => {
  return (
    <>
      <HeaderContainer />
      <VideoViewerContainer />
      <ReviewBoxContainer />
      <ReviewList />
    </>
  );
};

export default VideoPage;

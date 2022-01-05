import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import VideoViewer from '../components/video/VideoViewer';
import ReviewBoxContainer from '../containers/review/ReviewBoxContainer';

const VideoPage = () => {
  return (
    <>
      <HeaderContainer />
      <VideoViewer />
      <ReviewBoxContainer />
    </>
  );
};

export default VideoPage;

import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import VideoViewer from '../components/video/VideoViewer';
import ReviewBox from '../components/video/ReviewBox';

const VideoPage = () => {
  return (
    <>
      <HeaderContainer />
      <VideoViewer />
      <ReviewBox />
    </>
  );
};

export default VideoPage;

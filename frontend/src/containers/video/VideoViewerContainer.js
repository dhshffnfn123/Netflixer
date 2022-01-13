import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readVideo, unloadVideo } from '../../modules/video';
import VideoViewer from '../../components/video/VideoViewer';

const VideoViewerContainer = ({ match }) => {
  const { videoId } = match.params;
  const dispatch = useDispatch();
  const { video, error, loading } = useSelector(({ video, loading }) => ({
    video: video.video,
    error: video.error,
    loading: loading['video/READ_VIDEO'],
  }));

  useEffect(() => {
    dispatch(readVideo(videoId));
    return () => {
      dispatch(unloadVideo());
    };
  }, [dispatch, videoId]);

  return <VideoViewer video={video} loading={loading} error={error} />;
};

export default withRouter(VideoViewerContainer);

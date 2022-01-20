import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import VideoList from '../../components/videos/VideoList';
import { listVideos } from '../../modules/videos';
import qs from 'qs';

const VideoListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { videos, error, loading, user } = useSelector(
    ({ videos, loading, user }) => ({
      videos: videos.videos,
      error: videos.error,
      loading: loading['videos/LIST_VIDEOS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const { username } = match.params;
    const { tag } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listVideos({ tag, username }));
  }, [dispatch, location.search]);

  return <VideoList loading={loading} error={error} videos={videos} />;
};

export default withRouter(VideoListContainer);

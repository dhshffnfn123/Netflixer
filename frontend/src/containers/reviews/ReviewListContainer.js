import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReviewList from '../../components/videos/VideoList';
import { listReviews } from '../../modules/videos';

const ReviewListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { reviews, error, loading, user } = useSelector(
    ({ reviews, loading, user }) => ({
      reviews: reviews.reviews,
      error: reviews.error,
      loading: loading['reviews/LIST_REVIEWS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const { videoId } = match.params;
    dispatch(listReviews({ videoId }));
  }, [dispatch]);

  return <ReviewList loading={loading} error={error} reviews={reviews} />;
};

export default withRouter(ReviewListContainer);

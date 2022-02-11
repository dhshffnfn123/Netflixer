import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReviewList from '../../components/reviews/ReviewList';
import { listReviews } from '../../modules/reviews';

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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewBox from '../../components/video/ReviewBox';
import { changeField } from '../../modules/writeReview';

const ReviewBoxContainer = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.write.reviews);

  const onChangeReviews = (nextReviews) => {
    dispatch(
      changeField({
        key: 'reviews',
        value: nextReviews,
      }),
    );
  };
  return <ReviewBox onChangeReviews={onChangeReviews} reviews={reviews} />;
};

export default ReviewBoxContainer;

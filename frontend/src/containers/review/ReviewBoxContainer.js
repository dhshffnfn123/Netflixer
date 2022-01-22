import React from 'react';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewBox from '../../components/video/ReviewBox';
import { changeField, initialize } from '../../modules/writeReview';

const ReviewBoxContainer = () => {
  const dispatch = useDispatch();
  const { text } = useSelector(({ write }) => ({
    text: write.text,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return <ReviewBox onChangeField={onChangeField} text={text} />;
};

export default ReviewBoxContainer;

import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writeReview } from '../../modules/writeReview';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const video = useSelector((state) => state.video);
  const videoId = video.video._id;
  const { text, review, reviewError } = useSelector(({ write }) => ({
    text: write.text,
    review: write.review,
    reviewError: write.reviewError,
  }));

  console.log(video.video._id);

  const onPublish = () => {
    dispatch(
      writeReview({
        text,
        videoId,
      }),
    );
  };

  useEffect(() => {
    if (review) {
    }
    if (reviewError) {
      console.log(reviewError);
    }
  }, [history, review, reviewError]);
  return <WriteActionButtons onPublish={onPublish} />;
};

export default withRouter(WriteActionButtonsContainer);

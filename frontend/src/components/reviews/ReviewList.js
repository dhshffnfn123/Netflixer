import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';

const ReviewItem = ({ review }) => {
  const { publishedDate, user, text } = review;
  return (
    <ReviewItemBlock>
      <span>{user.username}</span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
      <p>{text}</p>
    </ReviewItemBlock>
  );
};

const ReviewList = ({ reviews, loading, error }) => {
  if (error) {
    return (
      <ReviewListBlock styled={{ color: 'red' }}>
        에러가 발생했습니다.
      </ReviewListBlock>
    );
  }
  return (
    <ReviewListBlock>
      {!loading && reviews && (
        <div>
          {reviews.map((review) => (
            <ReviewItem review={review} key={review._id} />
          ))}
        </div>
      )}
    </ReviewListBlock>
  );
};

export default ReviewList;

const ReviewListBlock = styled(Responsive)`
  margin-top: 1rem;
  padding-bottom: 3rem;
`;
const ReviewItemBlock = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 400px;
    margin-right: auto;
    margin-left: auto;
  }
  margin-bottom: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: ${palette.reviewListColor};
  color: white;

  span {
    padding-left: 1rem;
    font-size: 0.9rem;
  }

  p {
    margin-top: 1rem;
    padding-left: 1rem;
    font-size: 1.2rem;
  }

  &:last-child {
    margin-bottom: 2rem;
  }
`;

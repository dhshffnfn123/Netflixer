import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';

const ReviewListBlock = styled(Responsive)`
  margin-top: 1rem;
  padding-bottom: 3rem;
`;
const ReviewItemBlock = styled.div`
  @media (min-width: 1500px) {
    margin-left: 100px;
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

const ReviewItem = () => {
  return (
    <ReviewItemBlock>
      <span>username</span>
      <span>{new Date().toLocaleDateString()}</span>
      <p>리뷰 내용의 일부분</p>
    </ReviewItemBlock>
  );
};

const ReviewList = () => {
  return (
    <ReviewListBlock>
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </ReviewListBlock>
  );
};

export default ReviewList;

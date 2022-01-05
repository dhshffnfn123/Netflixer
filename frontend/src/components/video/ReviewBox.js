import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';

const ReviewBlock = styled(Responsive)`
  margin-top: 100px;
  padding-bottom: 5rem;
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    margin-top: 0;
  }
`;
const ReviewForm = styled.form``;
const ReviewButton = styled(Button)`
  position: unset;
  width: 100px;
  margin-left: 100px;
  height: 100px;
  border-radius: 0;
  font-size: 0.8rem;
  font-weight: 800;
  background: #dddddd;
  &:hover {
    border: 2px solid #640000;
  }

  @media (max-width: 1500px) {
    margin-left: 0;
  }
  @media (max-width: 1024px) {
    margin-top: 200px;
  }
  @media (max-width: 768px) {
    margin-top: 0;
    margin: auto;
    width: 400px;
    height: 50px;
    font-size: 1.3rem;
  }
`;
const ReviewInput = styled.input`
  margin-left: 20px;
  width: 100%;
  background: transparent;
  border: 3px solid #444444;
  outline: none;
  color: #bbbbbb;
  font-size: 1.5rem;
  word-wrap: break-word;
  transition: 0.3s all ease;
  &:focus {
    border: 3px solid #640000;
  }
  @media (max-width: 1024px) {
    margin-top: 200px;
  }
  @media (max-width: 768px) {
    margin: auto;
    margin-top: 10px;
    width: 400px;
    height: 50px;
    font-size: 0.7rem;
  }
`;

const ReviewBox = ({ reviews, onChangeReviews }) => {
  const [input, setInput] = useState('');
  const [localReviews, setLocalReviews] = useState([]);

  const insertReview = useCallback(
    (review) => {
      if (!review) return;
      const nextReviews = [...localReviews, review];
      setLocalReviews(nextReviews);
      onChange(nextReviews);
    },
    [localReviews, onChangeReviews],
  );

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setInput('');
    },
    [input],
  );

  useEffect(() => {
    setLocalReviews(reviews);
  }, [reviews]);

  return (
    <ReviewForm onSubmit={onSubmit}>
      <ReviewBlock>
        <ReviewButton type="submit">리뷰 쓰기</ReviewButton>
        <ReviewInput
          value={input}
          onChange={onChange}
          placeholder="리뷰를 작성하세요"
        />
      </ReviewBlock>
    </ReviewForm>
  );
};
export default ReviewBox;

import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as reviewsAPI from '../lib/api/reviews';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const [WRITE_REVIEW, WRITE_REVIEW_SUCCESS, WRITE_REVIEW_FAILURE] =
  createRequestActionTypes('write/WRITE_REVIEW');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeReview = createAction(WRITE_REVIEW, ({ text }) => ({
  text,
}));

const writeReviewSaga = createRequestSaga(WRITE_REVIEW, writeReviewSaga);

const initialState = {
  text: '',
  review: null,
  reviewError: null,
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_REVIEW]: (state) => ({
      ...state,
      review: null,
      reviewError: null,
    }),
    [WRITE_REVIEW_SUCCESS]: (state, { payload: review }) => ({
      ...state,
      review,
    }),
    [WRITE_REVIEW_FAILURE]: (state, { payload: reviewError }) => ({
      ...state,
      reviewError,
    }),
  },
  initialState,
);

export default write;

import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as videosAPI from '../lib/api/videos';
import { takeLatest } from 'redux-saga/effects';

const [LIST_VIDEOS, LIST_VIDEOS_SUCCESS, LIST_VIDEOS_FAILURE] =
  createRequestActionTypes('videos/LIST_VIDEOS');

export const listVideos = createAction(LIST_VIDEOS, ({ tag, username }) => ({
  tag,
  username,
}));

const listVideosSaga = createRequestSaga(LIST_VIDEOS, videosAPI.listVideo);
export function* videosSaga() {
  yield takeLatest(LIST_VIDEOS, listVideosSaga);
}

const initialState = {
  videos: null,
  error: null,
};

const videos = handleActions(
  {
    [LIST_VIDEOS_SUCCESS]: (state, { payload: videos }) => ({
      ...state,
      videos,
    }),
    [LIST_VIDEOS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default videos;

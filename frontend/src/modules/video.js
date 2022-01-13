import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as videosAPI from '../lib/api/videos';
import { takeLatest } from 'redux-saga/effects';

const [READ_VIDEO, READ_VIDEO_SUCCESS, READ_VIDEO_FAILURE] =
  createRequestActionTypes('video/READ_VIDEO');
const UNLOAD_VIDEO = 'video/UNLOAD_VIDEO';

export const readVideo = createAction(READ_VIDEO, (id) => id);
export const unloadVideo = createAction(UNLOAD_VIDEO);

const readVideoSaga = createRequestSaga(READ_VIDEO, videosAPI.readVideo);
export function* videoSaga() {
  yield takeLatest(READ_VIDEO, readVideoSaga);
}

const initialState = {
  video: null,
  error: null,
};

const video = handleActions(
  {
    [READ_VIDEO_SUCCESS]: (state, { payload: video }) => ({
      ...state,
      video,
    }),
    [READ_VIDEO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_VIDEO]: () => initialState,
  },
  initialState,
);

export default video;

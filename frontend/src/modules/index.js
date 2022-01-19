import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './writeReview';
import video, { videoSaga } from './video';
import videos, { videosSaga } from './videos';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  video,
  videos,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), videoSaga(), videosSaga()]);
}

export default rootReducer;

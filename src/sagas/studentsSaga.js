import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { FETCH_INVITATIONS } from '../actions/actionTypes';
import { fetchInvitationApi } from '../apis/students';
import { updateRawData } from '../actions';

export function* fetchInvitationsWorker() {
  const res = yield call(fetchInvitationApi);

  if (res && res.length)
    updateRawData({ students: res, originalStudents: res });
}

export function* fetchInvitationsWatcher() {
  yield takeLatest(FETCH_INVITATIONS, fetchInvitationsWorker);
}

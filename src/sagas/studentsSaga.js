import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { FETCH_INVITATIONS, REMOVE_INVITATION } from '../actions/actionTypes';
import { fetchInvitationApi, removeInvitationAPI } from '../apis/students';
import { updateRawData } from '../actions';

export function* fetchInvitationsWorker() {
  const res = yield call(fetchInvitationApi);
  if (res && res.length)
    updateRawData({ students: res, originalStudents: res });
}

export function* removeInvitaionWorker({ s_id }) {
  const res = yield call(removeInvitationAPI, s_id);

  if (res && res.length) updateRawData({ students: res });

}


export function* fetchInvitationsWatcher() {
  yield takeLatest(FETCH_INVITATIONS, fetchInvitationsWorker);
}

export function* removeInvitaionWatcher() {
  yield takeLatest(REMOVE_INVITATION, removeInvitaionWorker);
}

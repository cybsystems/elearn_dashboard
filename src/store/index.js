import { createStore, combineReducers, applyMiddleware } from 'redux';
import { updateRawDataReducer } from '../reducers/rawData';
import { fetchInvitationsWatcher } from '../sagas/studentsSaga';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ rawData: updateRawDataReducer });
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(function*() {
  yield all([fetchInvitationsWatcher()]);
});

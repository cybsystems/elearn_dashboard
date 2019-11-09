import { createStore, combineReducers, applyMiddleware } from 'redux';
import { updateRawDataReducer } from '../reducers/rawData';

import { all } from 'redux-saga/effects';
 
 
const rootReducer = combineReducers({ rawData: updateRawDataReducer });
export const store = createStore(rootReducer);
 

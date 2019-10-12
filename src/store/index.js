import { createStore, combineReducers } from 'redux';
import { updateRawDataReducer } from '../reducers/rawData';
const rootReducer = combineReducers({ rawData:updateRawDataReducer });
export const store=createStore(rootReducer);

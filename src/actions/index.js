import { store } from '../store';

export const updateRawData = rawData =>
  store.dispatch({ type: 'UPDATE', ...rawData });

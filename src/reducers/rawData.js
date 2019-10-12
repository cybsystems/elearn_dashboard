const initialState = {};

export const updateRawDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE':
      const newState = { ...state };
      const newRawData = { ...newState, ...action };
      return newRawData;

      break;
    default:
      return initialState;
  }
};

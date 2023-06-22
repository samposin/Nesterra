import {OCR_REPORT} from '../../../actions/actionType/Reports/index';

const initialState = {
  OCRReport: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OCR_REPORT:
      return {
        ...state,
        OCRReport: action.payload.data,
      };

    default:
      return state;
  }
};

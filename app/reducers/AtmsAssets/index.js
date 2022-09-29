import {
  ALL_ATMS,
  FILTER_ALL_ATMS,
  FILTER_BY_ACTIVE,
} from './../../actions/actionType/AtmsAssets/index';
const initialState = {
  data: [],
  data1: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_ATMS:
      const alldata = action.payload.data.filter(
        item => item.ATM_Status == 'Active',
      );
      return {
        ...state,
        data: alldata,
        data1: action.payload.data,
      };
    case FILTER_ALL_ATMS:
      const FDATA = [...state.data1];
      return {
        ...state,
        data: FDATA,
      };
    case FILTER_BY_ACTIVE:
      const aDATA = [...state.data1];
      const FADATA = aDATA.filter(item => item.ATM_Status == 'Active');
      return {
        ...state,
        data: FADATA,
      };

    default:
      return state;
  }
};

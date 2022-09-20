import {ALL_ATMS} from './../../actions/actionType/ATMS/index';
const initialState = {
  allAtms: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_ATMS:
      // console.log(action, 'action');
      return {
        ...state,
        allAtms: action.payload.data,
      };

    default:
      return state;
  }
};

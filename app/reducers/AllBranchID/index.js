import {ALL_BRANCH_ID} from '../../actions/actionType/AllBranchID';
const initialState = {
  allBranchID: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_BRANCH_ID:
      //   console.log(action.payload.data);
      return {
        ...state,
        allBranchID: action.payload.data,
      };

    default:
      return state;
  }
};

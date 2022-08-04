import {ALL_SITE_ID} from '../../actions/actionType/AllSiteID';

const initialState = {
  allSiteID: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_SITE_ID:
      //   console.log(action.payload.data);
      return {
        ...state,
        allSiteID: action.payload.data,
      };

    default:
      return state;
  }
};

import {ATMS_ITEM} from '../../actions/actionType/AtmsItem';

const initialState = {
  atmsItem: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ATMS_ITEM:
      // console.log(action, 'action');
      return {
        ...state,
        allAtms: action.payload.data,
      };

    default:
      return state;
  }
};

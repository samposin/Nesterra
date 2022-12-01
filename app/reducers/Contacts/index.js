import {ALL_CONTACT} from '../../actions/actionType/Contacts';

ALL_CONTACT;
const initialState = {
  item: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_CONTACT:
      return {
        ...state,
        item: action.payload.data,
      };

    default:
      return state;
  }
};

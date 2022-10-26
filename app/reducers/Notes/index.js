import {GET_NOTES} from '../../actions/actionType/Notes';

const initialState = {
  notes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload.data,
      };

    default:
      return state;
  }
};

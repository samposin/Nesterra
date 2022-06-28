import {GET_ORDER} from '../../actions/actionType/action.Order.type';

const initialState = {
  order: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      // console.log(action.payload.data, 'action.payload.data');
      return {
        order: action.payload.data,
      };

    default:
      return state;
  }
};

import {GET_ORDER} from '../../actions/actionType/action.Order.type';

const initialState = {
  order: [],
  orderLoad: false,
  id: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      // console.log(action.payload.data, 'action.payload.data');
      return {
        ...state,
        order: action.payload.data,
        id: action.payload.id,
      };

    default:
      return state;
  }
};

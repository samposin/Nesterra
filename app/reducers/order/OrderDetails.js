import {GET_ORDER_DETAILS} from '../../actions/actionType/action.Order.type';

const initialState = {
  orderDetails: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_DETAILS:
      return {
        orderDetails: action.payload.data,
      };

    default:
      return state;
  }
};

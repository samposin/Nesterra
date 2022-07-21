import {GET_ORDERS_FOR_TAB} from '../../actions/actionType/action.OrdersForTab';

const initialState = {
  ordersForTab: [],
  isLoding: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_FOR_TAB:
      // console.log(action.payload.data, 'action.payload.data');
      return {
        ...state,
        ordersForTab: action.payload.data,
        isLoding: action.payload.data.loder,
      };

    default:
      return state;
  }
};

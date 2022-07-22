import {
  GET_ORDERS_FOR_TAB,
  GET_ORDERS_FOR_TAB_FILTER_TYPE,
  GET_ORDERS_FOR_TAB_FILTER_SMARTSITE,
  GET_ORDERS_FOR_TAB_FILTER_VENDOR,
  GET_ORDERS_FOR_TAB_FILTER_STATUS,
} from '../../actions/actionType/action.OrdersForTab';

const initialState = {
  ordersForTab: [],
  ordersForTab1: [],
  isLoding: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_FOR_TAB:
      // console.log(action.payload.data, 'action.payload.data');
      return {
        ...state,
        ordersForTab: action.payload.data,
        ordersForTab1: action.payload.data,
        isLoding: action.payload.data.loder,
      };
    case GET_ORDERS_FOR_TAB_FILTER_TYPE:
      const datasearch = [...state.ordersForTab1];

      if (action.data) {
        const newData = datasearch.filter(function (item) {
          const itemData = item.Order_Type.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          ordersForTab: newData,
        };
      } else {
        return {
          ...state,
          ordersForTab: state.ordersForTab1,
        };
      }
    case GET_ORDERS_FOR_TAB_FILTER_SMARTSITE:
      const datasearch1 = [...state.ordersForTab1];

      if (action.data) {
        const newData = datasearch1.filter(function (item) {
          const itemData = item.Inventory_ID.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          ordersForTab: newData,
        };
      } else {
        return {
          ...state,
          ordersForTab: state.ordersForTab1,
        };
      }
    case GET_ORDERS_FOR_TAB_FILTER_VENDOR:
      const datasearch3 = [...state.ordersForTab1];

      if (action.data) {
        const newData = datasearch3.filter(function (item) {
          const itemData = item.vendor.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          ordersForTab: newData,
        };
      } else {
        return {
          ...state,
          ordersForTab: state.ordersForTab1,
        };
      }
    case GET_ORDERS_FOR_TAB_FILTER_STATUS:
      const datasearch4 = [...state.ordersForTab1];

      if (action.data) {
        const newData = datasearch4.filter(function (item) {
          const itemData = item.Status.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          ordersForTab: newData,
        };
      } else {
        return {
          ...state,
          ordersForTab: state.ordersForTab1,
        };
      }

    default:
      return state;
  }
};

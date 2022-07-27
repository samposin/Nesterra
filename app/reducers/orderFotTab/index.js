import {
  GET_ORDERS_FOR_TAB,
  GET_ORDERS_FOR_TAB_FILTER_TYPE,
  GET_ORDERS_FOR_TAB_FILTER_SMARTSITE,
  GET_ORDERS_FOR_TAB_FILTER_VENDOR,
  GET_ORDERS_FOR_TAB_FILTER_STATUS,
  SORT_BY_VENDOR_ASC,
  SORT_BY_VENDOR_DES,
  SORT_BY_STATUS_ASC,
  SORT_BY_STATUS_DES,
  SORT_BY_DATE_ASC,
  SORT_BY_DATE_DES,
  SORT_BY_INV_ID_ASC,
  SORT_BY_INV_ID_DES,
  SORT_BY_ORDER_TYPE_ASC,
  SORT_BY_ORDER_TYPE_DES,
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
    //SORT VENDOR ASCENDING
    case SORT_BY_VENDOR_ASC:
      const datasearch5 = [...state.ordersForTab1];

      const ascData = datasearch5.sort((a, b) => {
        let fa = a.vendor.toLowerCase(),
          fb = b.vendor.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        ordersForTab: ascData,
      };
    //SORT VENDOR DESCENDING
    case SORT_BY_VENDOR_DES:
      const datasearch6 = [...state.ordersForTab1];

      const desData = datasearch6.sort((a, b) => {
        let fa = a.vendor.toLowerCase(),
          fb = b.vendor.toLowerCase();

        if (fb < fa) {
          return -1;
        }
        if (fb > fa) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        ordersForTab: desData,
      };
    //SORT STATUS ASCENDING
    case SORT_BY_STATUS_ASC:
      const datasearch7 = [...state.ordersForTab1];

      const statusAsc = datasearch7.sort((a, b) => {
        let fa = a.Status.toLowerCase(),
          fb = b.Status.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        ordersForTab: statusAsc,
      };
    //SORT STATUS DESCENDING
    case SORT_BY_STATUS_DES:
      const datasearch8 = [...state.ordersForTab1];

      const statuDes = datasearch8.sort((a, b) => {
        let fa = a.Status.toLowerCase(),
          fb = b.Status.toLowerCase();

        if (fb < fa) {
          return -1;
        }
        if (fb > fa) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        ordersForTab: statuDes,
      };
    //SORT DATE ASCENDING
    case SORT_BY_DATE_ASC:
      const datasearch9 = [...state.ordersForTab1];

      const dateAsc = datasearch9.sort((a, b) => {
        let fa = new Date(a.Initiation_Date),
          fb = new Date(b.Initiation_Date);
        return fa - fb;
        // if (fa < fb) {
        //   return -1;
        // }
        // if (fa > fb) {
        //   return 1;
        // }
        // return 0;
      });

      return {
        ...state,
        ordersForTab: dateAsc,
      };
    //SORT DATE DESCENDING
    case SORT_BY_DATE_DES:
      const datasearch10 = [...state.ordersForTab1];

      const dateDes = datasearch10.sort((a, b) => {
        let fa = new Date(a.Initiation_Date),
          fb = new Date(b.Initiation_Date);
        return fb - fa;
        // if (fb < fa) {
        //   return -1;
        // }
        // if (fb > fa) {
        //   return 1;
        // }
        // return 0;
      });

      return {
        ...state,
        ordersForTab: dateDes,
      };
    //SORT INV_ID ASCENDING
    case SORT_BY_INV_ID_ASC:
      const datasearch11 = [...state.ordersForTab1];

      const invAsc = datasearch11.sort((a, b) => {
        let fa = a.Inventory_ID.toLowerCase(),
          fb = b.Inventory_ID.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        ordersForTab: invAsc,
      };
    //SORT INV_ID DESCENDING
    case SORT_BY_INV_ID_DES:
      const datasearch12 = [...state.ordersForTab1];

      const invDes = datasearch12.sort((a, b) => {
        let fa = a.Inventory_ID.toLowerCase(),
          fb = b.Inventory_ID.toLowerCase();

        if (fb < fa) {
          return -1;
        }
        if (fb > fa) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        ordersForTab: invDes,
      };
    //SORT ORDER_TYPE ASCENDING
    case SORT_BY_ORDER_TYPE_ASC:
      const datasearch13 = [...state.ordersForTab1];

      const orderAsc = datasearch13.sort((a, b) => {
        let fa = a.Order_Type.toLowerCase(),
          fb = b.Order_Type.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        ordersForTab: orderAsc,
      };
    //SORT ORDER_TYPE DESCENDING
    case SORT_BY_ORDER_TYPE_DES:
      const datasearch14 = [...state.ordersForTab1];

      const orderDes = datasearch14.sort((a, b) => {
        let fa = a.Order_Type.toLowerCase(),
          fb = b.Order_Type.toLowerCase();

        if (fb < fa) {
          return -1;
        }
        if (fb > fa) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        ordersForTab: orderDes,
      };

    default:
      return state;
  }
};

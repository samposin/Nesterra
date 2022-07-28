import {
  ALL_DEVICES,
  ALL_DEVICES_SORT_BY_ID_ASC,
  ALL_DEVICES_SORT_BY_ID_DES,
  ALL_DEVICES_SORT_BY_TYPE_ASC,
  ALL_DEVICES_SORT_BY_TYPE_DES,
  ALL_DEVICES_SORT_BY_STATUS_ASC,
  ALL_DEVICES_SORT_BY_STATUS_DES,
  ALL_DEVICES_SORT_BY_VENDOR_ASC,
  ALL_DEVICES_SORT_BY_VENDOR_DES,
} from '../../actions/actionType/AllDevice';
const initialState = {
  deviceAllData: [],
  deviceAllData1: [],
  isLoding: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_DEVICES:
      return {
        deviceAllData: action.payload.data,
        deviceAllData1: action.payload.data,
        isLoding: action.payload.loder,
      };
    //  SORT ID ASCENDING
    case ALL_DEVICES_SORT_BY_ID_ASC:
      const data = [...state.deviceAllData1];
      const cirIdAsc = data.sort((a, b) => {
        let fa = a.ID.toLowerCase(),
          fb = b.ID.toLowerCase();

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
        deviceAllData: cirIdAsc,
      };
    //SORT ID DESCENDING
    case ALL_DEVICES_SORT_BY_ID_DES:
      const data1 = [...state.deviceAllData1];

      const cirIdDes = data1.sort((a, b) => {
        let fa = a.ID.toLowerCase(),
          fb = b.ID.toLowerCase();

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
        deviceAllData: cirIdDes,
      };
    //  SORT VENDOR ASCENDING
    case ALL_DEVICES_SORT_BY_VENDOR_ASC:
      const data2 = [...state.deviceAllData1];
      const vendorAsc = data2.sort((a, b) => {
        let fa = a.Device_Vendor.toLowerCase(),
          fb = b.Device_Vendor.toLowerCase();

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
        deviceAllData: vendorAsc,
      };
    //SORT VENDOR DESCENDING
    case ALL_DEVICES_SORT_BY_VENDOR_DES:
      const data3 = [...state.deviceAllData1];

      const vendorDes = data3.sort((a, b) => {
        let fa = a.Device_Vendor.toLowerCase(),
          fb = b.Device_Vendor.toLowerCase();

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
        deviceAllData: vendorDes,
      };
    //  SORT STATUS ASCENDING
    case ALL_DEVICES_SORT_BY_STATUS_ASC:
      const data4 = [...state.deviceAllData1];
      const catrAsc = data4.sort((a, b) => {
        let fa = a.Device_Status?.toLowerCase(),
          fb = b.Device_Status?.toLowerCase();

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
        deviceAllData: catrAsc,
      };
    //SORT STATUS DESCENDING
    case ALL_DEVICES_SORT_BY_STATUS_DES:
      const data5 = [...state.deviceAllData1];

      const catDes = data5.sort((a, b) => {
        let fa = a.Device_Status?.toLowerCase(),
          fb = b.Device_Status?.toLowerCase();

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
        deviceAllData: catDes,
      };
    //  SORT TYPE ASCENDING
    case ALL_DEVICES_SORT_BY_TYPE_ASC:
      const data6 = [...state.deviceAllData1];
      const subcat1Asc = data6.sort((a, b) => {
        let fa = a.Device_Type.toLowerCase(),
          fb = b.Device_Type.toLowerCase();

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
        deviceAllData: subcat1Asc,
      };
    //SORT TYPE DESCENDING
    case ALL_DEVICES_SORT_BY_TYPE_DES:
      const data7 = [...state.deviceAllData1];

      const subcat1Des = data7.sort((a, b) => {
        let fa = a.Device_Type.toLowerCase(),
          fb = b.Device_Type.toLowerCase();

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
        deviceAllData: subcat1Des,
      };

    default:
      return state;
  }
};

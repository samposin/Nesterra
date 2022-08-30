import {
  ALL_CIRCUIT,
  ALL_CIRCUIT_DETAILS,
  ALL_CIRCUIT_SORT_BY_LOC_ID_ASC,
  ALL_CIRCUIT_SORT_BY_LOC_ID_DES,
  ALL_CIRCUIT_SORT_BY_CIR_ID_ASC,
  ALL_CIRCUIT_SORT_BY_CIR_ID_DES,
  ALL_CIRCUIT_SORT_BY_BRANCH_ASC,
  ALL_CIRCUIT_SORT_BY_BRANCH_DES,
  ALL_CIRCUIT_SORT_BY_VENDOR_ASC,
  ALL_CIRCUIT_SORT_BY_VENDOR_DES,
  ALL_CIRCUIT_FILTER_BY_LOCATION_ID,
  ALL_CIRCUIT_FILTER_BY_CIRCUITS_ID,
  ALL_CIRCUIT_FILTER_BY_BRANCH_ID,
} from '../../actions/actionType/AllCircuit';

const initialState = {
  allCircuit: [],
  allCircuit1: [],
  isLoding: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_CIRCUIT:
      return {
        ...state,
        allCircuit: action.payload.data,
        allCircuit1: action.payload.data,
        isLoding: action.payload.loder,
      };

    // FILTER BY Location_ID
    case ALL_CIRCUIT_FILTER_BY_LOCATION_ID:
      const fdata = [...state.allCircuit1];
      const filterdata = fdata.filter(item => item.Location_ID == action.data);
      return {
        ...state,
        allCircuit: filterdata,
      };
    // FILTER BY CIRCUIT_ID
    case ALL_CIRCUIT_FILTER_BY_CIRCUITS_ID:
      const fdata1 = [...state.allCircuit1];
      const cirdata = fdata1.filter(item => item.Circuit_ID == action.data);
      return {
        ...state,
        allCircuit: cirdata,
      };
    // FILTER BY Branch Id
    case ALL_CIRCUIT_FILTER_BY_BRANCH_ID:
      const fdata2 = [...state.allCircuit1];
      const cirdata2 = fdata2.filter(item => item.Branch_ID == action.data);
      return {
        ...state,
        allCircuit: cirdata2,
      };
    // SORT Location_ID ASCENDING
    case ALL_CIRCUIT_SORT_BY_LOC_ID_ASC:
      // const aa = action.lo;
      // console.log(aa);
      const data = [...state.allCircuit1];
      const cirIdAsc = data.sort((a, b) => {
        let fa = a.Location_ID.toLowerCase(),
          fb = b.Location_ID.toLowerCase();

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
        allCircuit: cirIdAsc,
      };

    //SORT Location_ID DESCENDING
    case ALL_CIRCUIT_SORT_BY_LOC_ID_DES:
      const data1 = [...state.allCircuit1];
      const cirIdDes = data1.sort((a, b) => {
        let fa = a.Location_ID.toLowerCase(),
          fb = b.Location_ID.toLowerCase();

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
        allCircuit: cirIdDes,
      };

    //  SORT VENDOR ASCENDING
    case ALL_CIRCUIT_SORT_BY_VENDOR_ASC:
      const data2 = [...state.allCircuit1];
      const vendorAsc = data2.sort((a, b) => {
        let fa = a.Vendor.toLowerCase(),
          fb = b.Vendor.toLowerCase();

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
        allCircuit: vendorAsc,
      };
    // //SORT VENDOR DESCENDING
    case ALL_CIRCUIT_SORT_BY_VENDOR_DES:
      const data3 = [...state.allCircuit1];

      const vendorDes = data3.sort((a, b) => {
        let fa = a.Vendor.toLowerCase(),
          fb = b.Vendor.toLowerCase();

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
        allCircuit: vendorDes,
      };
    // //  SORT CIR ID ASCENDING
    case ALL_CIRCUIT_SORT_BY_CIR_ID_ASC:
      const data4 = [...state.allCircuit1];
      const catrAsc = data4.sort((a, b) => {
        let fa = a.Circuit_ID?.toLowerCase(),
          fb = b.Circuit_ID?.toLowerCase();

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
        allCircuit: catrAsc,
      };
    // //SORT STATUS DESCENDING
    case ALL_CIRCUIT_SORT_BY_CIR_ID_DES:
      const data5 = [...state.allCircuit1];

      const catDes = data5.sort((a, b) => {
        let fa = a.Circuit_ID?.toLowerCase(),
          fb = b.Circuit_ID?.toLowerCase();

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
        allCircuit: catDes,
      };
    //  SORT Branch ASCENDING
    case ALL_CIRCUIT_SORT_BY_BRANCH_ASC:
      const data6 = [...state.allCircuit1];
      const subcat1Asc = data6.sort((a, b) => {
        // let fa = a?.Branch_ID.toLowerCase(),
        //   fb = b?.Branch_ID.toLowerCase();

        // if (fa < fb) {
        //   return -1;
        // }
        // if (fa > fb) {
        //   return 1;
        // }
        // return 0;
        if (a.Branch_ID === null) {
          return 1;
        }

        if (b.Branch_ID === null) {
          return -1;
        }

        if (a.Branch_ID === b.Branch_ID) {
          return 0;
        }

        return a.Branch_ID < b.Branch_ID ? -1 : 1;
      });

      return {
        ...state,
        allCircuit: subcat1Asc,
      };
    // //SORT BRANCH DESCENDING
    case ALL_CIRCUIT_SORT_BY_BRANCH_DES:
      const data7 = [...state.allCircuit1];

      const subcat1Des = data7.sort((a, b) => {
        // let fa = a?.Branch_ID.toLowerCase(),
        //   fb = b?.Branch_ID.toLowerCase();

        // if (fb < fa) {
        //   return -1;
        // }
        // if (fb > fa) {
        //   return 1;
        // }
        // return 0;
        if (a.Branch_ID === null) {
          return 1;
        }

        if (b.Branch_ID === null) {
          return -1;
        }

        if (a.Branch_ID === b.Branch_ID) {
          return 0;
        }

        return a.Branch_ID < b.Branch_ID ? 1 : -1;
      });

      return {
        ...state,
        allCircuit: subcat1Des,
      };

    default:
      return state;
  }
};

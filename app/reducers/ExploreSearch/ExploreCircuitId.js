import {dataMar} from '../../utils/MarkerData1';
import {
  CIRCUIT_ID,
  CIRCUIT_ID_SEARCH,
} from '../../actions/actionType/ExploreSearch/';

const initialState = {
  data: [],
  data1: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CIRCUIT_ID:
      let dataone = [];
      dataMar.map((item, i) => {
        console.log('first');
        dataone.push(item.Circuit_ID);
      });
      const dataone1 = dataone.reduce((acc, item) => {
        // const entry = acc.find(i => item === item);

        // if (!entry) {
        //   acc.push({
        //     Branch_ID,
        //   });
        // } else {
        //   entry.Branch_ID = Branch_ID;
        // }
        // return acc;
        console.log(item);
      }, []);
      return {
        data: dataone,
        data1: dataone,
        error: null,
      };
    case CIRCUIT_ID_SEARCH:
      const subtypve = [...state.data1];
      const srcdata = subtypve.filter(function (item) {
        const itemData = item?.Branch_ID.toUpperCase();

        return itemData.startsWith(action.data.toUpperCase());
      });
      return {
        ...state,
        data: srcdata,
      };
    default:
      return state;
  }
};

import {
  FILTER_CARRIER_NUMBERR,
  GET_CARRIER_NUMBERR,
} from '../../actions/actionType/carrier.Number.type';

const initialState = {
  carrierNumber: [],
  carrierNumber1: [],
  isLoding: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARRIER_NUMBERR:
      return {
        ...state,
        carrierNumber: action.payload.data,
        carrierNumber1: action.payload.data,
        isLoding: action.payload.loder,
      };
    case FILTER_CARRIER_NUMBERR:
      // console.log(action.payload.data, 'action.payload.data');
      const datasearch = [...state.carrierNumber1];

      if (action.data) {
        const newData = datasearch.filter(function (item) {
          const itemData = item.id;
          // const textData = text;
          return itemData.startsWith(action.data);
        });
        return {
          ...state,
          carrierNumber: newData,
        };
      } else {
        return {
          ...state,
          carrierNumber: state.carrierNumber1,
        };
      }

    default:
      return state;
  }
};

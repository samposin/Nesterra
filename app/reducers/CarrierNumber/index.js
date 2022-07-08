import {GET_CARRIER_NUMBERR} from '../../actions/actionType/carrier.Number.type';

const initialState = {
  carrierNumber: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARRIER_NUMBERR:
      // console.log(action.payload.data, 'action.payload.data');
      //console.log(action.payload.data);
      return {
        ...state,
        carrierNumber: action.payload.data,
      };

    default:
      return state;
  }
};

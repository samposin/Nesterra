import {GET_ALL_CIRCUIT_INVENTORY} from '../../actions/actionType/circuitInventory.type';

const initialState = {
  cirCuitInventory: [],
  inventoryLoad: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CIRCUIT_INVENTORY:
      // console.log(action.payload.data, 'action.payload.data');
      //console.log(action.payload.data);
      return {
        ...state,
        cirCuitInventory: action.payload.data,
      };

    default:
      return state;
  }
};

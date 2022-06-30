import {GET_ALL_DEVICES_INVENTORY} from '../../actions/actionType/devicesInventory.type';

const initialState = {
  devicesInventory: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DEVICES_INVENTORY:
      // console.log(action.payload.data, 'action.payload.data');
      //console.log(action.payload.data);
      return {
        ...state,
        devicesInventory: action.payload.data,
      };

    default:
      return state;
  }
};

import {ALL_CIRCUIT_ID} from '../../actions/actionType/AllCircuitID';

const initialState = {
  allCircuitID: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_CIRCUIT_ID:
      //   console.log(action.payload.data);
      return {
        ...state,
        allCircuitID: action.payload.data,
      };

    default:
      return state;
  }
};

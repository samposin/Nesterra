import Axios from 'axios';
import {Base_url} from '../../key';
import {ALL_CIRCUIT_ID} from '../actionType/AllCircuitID';

export const getAllCircuitID = setLodding => dispatch => {
  Axios.get(`${Base_url}/api/GetCircuitInventoryCircuitIds`)
    .then(response => {
      if (response.data.length > 0) {
        // console.log(response.data, 'response');
        setLodding(false);
        dispatch({
          type: ALL_CIRCUIT_ID,
          payload: {
            data: response.data,
            loder: false,
          },
        });
      } else {
        dispatch({
          type: ALL_CIRCUIT_ID,
          payload: {
            data: response.data,
            loder: false,
          },
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

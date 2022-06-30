import Axios from 'axios';
import {Base_url} from '../../key';
import {GET_ALL_INVENTORY} from '../actionType/inventory.type';

export const getInventory = id => dispatch => {
  Axios.get(`${Base_url}/api/GetCircuitInventoryByLocationId?Locationid=${id}`)
    .then(response => {
      //   console.log(response.data.length);
      dispatch({
        type: GET_ALL_INVENTORY,
        payload: {
          data: response.data,
        },
      });
    })
    .catch(error => {
      console.log(error);
    });
};

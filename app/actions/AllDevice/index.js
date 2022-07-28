import Axios from 'axios';
import {Base_url} from '../../key';

import {ALL_DEVICES} from '../actionType/AllDevice';

export const getAllDevice = () => dispatch => {
  Axios.get(`${Base_url}/api/GetAllDevicesInventory`)
    .then(response => {
      if (response.data.length > 0) {
        dispatch({
          type: ALL_DEVICES,
          payload: {
            data: response.data,
            loder: false,
          },
        });
      } else {
        dispatch({
          type: ALL_DEVICES,
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

import Axios from 'axios';
import {Base_url} from '../../key';
import {GET_CARRIER_NUMBERR} from '../actionType/carrier.Number.type';

export const GetCarrierNumber = name => dispatch => {
  Axios.get(`${Base_url}/api/${name}`)
    .then(response => {
      if (response.data.length > 0) {
        dispatch({
          type: GET_CARRIER_NUMBERR,
          payload: {
            data: response.data,
            loder: false,
          },
        });
      } else {
        dispatch({
          type: GET_CARRIER_NUMBERR,
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
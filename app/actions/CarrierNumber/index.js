import Axios from 'axios';
import {Base_url} from '../../key';
import {GET_CARRIER_NUMBERR} from '../actionType/carrier.Number.type';

export const GetCarrierNumber = name => dispatch => {
  console.log(name);
  Axios.get(`${Base_url}/api/GetTangoeNumber`)
    .then(response => {
      console.log(response);
      // dispatch({
      //   type: GET_CARRIER_NUMBERR,
      //   payload: {
      //     data: response.data,
      //   },
      // });
    })
    .catch(error => {
      console.log(error);
    });
};

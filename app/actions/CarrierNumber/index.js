import Axios from 'axios';
import {Base_url} from '../../key';
import {GET_CARRIER_NUMBERR} from '../actionType/carrier.Number.type';
const data = [{id: 'Add'}, {id: 'Change'}, {id: 'Disco'}, {id: 'Move'}];
export const GetCarrierNumber = name => dispatch => {
  // console.log(name);
  if (name === 'GetOrderTypeNumber') {
    dispatch({
      type: GET_CARRIER_NUMBERR,
      payload: {
        data: data,
        loder: false,
      },
    });
  } else {
    Axios.get(`${Base_url}/api/${name}`)
      .then(response => {
        if (response.data.length > 0) {
          // console.log(response.data);
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
  }
};

import Axios from 'axios';
import {Base_url, headers} from '../../key';
import {ALL_ATMS} from '../actionType/ATMS';

export const getAllAtms = (id, setAtmLoding) => dispatch => {
  Axios.get(`${Base_url}/api/GetAllCustomATM?Locationid=${id}`, headers)
    .then(response => {
      if (response.data) {
        dispatch({
          type: ALL_ATMS,
          payload: {
            data: response.data,
          },
        });
        setAtmLoding(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

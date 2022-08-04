import Axios from 'axios';
import {Base_url} from '../../key';
import {ALL_SITE_ID} from '../actionType/AllSiteID';

export const getAllSiteID = setLodding => dispatch => {
  Axios.get(`${Base_url}/api/GetCircuitInventorySiteIds`)
    .then(response => {
      if (response.data.length > 0) {
        setLodding(false);
        dispatch({
          type: ALL_SITE_ID,
          payload: {
            data: response.data,
            loder: false,
          },
        });
      } else {
        dispatch({
          type: ALL_SITE_ID,
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

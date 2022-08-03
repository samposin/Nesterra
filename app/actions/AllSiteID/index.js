import Axios from 'axios';
import {Base_url} from '../../key';

import {ALL_SITE_ID} from '../../actions/AllSiteID';

export const getAllDevice = () => dispatch => {
  Axios.get(`${Base_url}/api/GetCircuitInventorySiteIds`)
    .then(response => {
      if (response.data.length > 0) {
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

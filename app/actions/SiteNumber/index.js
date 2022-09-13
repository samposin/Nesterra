import Axios from 'axios';
import {Base_url} from '../../key';

import {ALL_SITE_NUMBER} from '../actionType/SiteNumber';

export const getAllSiteNumber = setLodding1 => dispatch => {
  setLodding1(true);
  Axios.get(`${Base_url}/api/GetSmartSiteNumber`)
    .then(response => {
      if (response.data.length > 0) {
        // console.log(response.data, 'tang');

        dispatch({
          type: ALL_SITE_NUMBER,
          payload: {
            data: response.data,
          },
        });
        setLodding1(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

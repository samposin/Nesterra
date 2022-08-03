import Axios from 'axios';
import {Base_url} from '../../key';

import {ALL_BRANCH_ID} from '../actionType/AllBranchID';

export const getAllBrachrID = setLodding => dispatch => {
  Axios.get(`${Base_url}/api/GetCircuitInventoryBranchIds`)
    .then(response => {
      if (response.data.length > 0) {
        // console.log(response.data, 'response');
        setLodding(false);
        dispatch({
          type: ALL_BRANCH_ID,
          payload: {
            data: response.data,
            loder: false,
          },
        });
      } else {
        dispatch({
          type: ALL_BRANCH_ID,
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

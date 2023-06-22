import Axios from 'axios';

import {Base_url, headers} from '../../key';

import {REPORT_ALL_HOME} from './../actionType/Reports/index';

export const getReport = id => dispatch => {
  Axios.get(
    `${Base_url}/api/GetStatBreakDownData?state=0&city=0&status=active&geneology=0&sitetype=0`,
    headers,
  )
    .then(response => {
      if (response.data) {
        // console.log(response.data.circuitsDataModels, 'circuitsDataModels');
        dispatch({
          type: REPORT_ALL_HOME,
          payload: {
            data: response.data,
          },
        });
        // setAtmLoding(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

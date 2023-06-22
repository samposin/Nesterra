import Axios from 'axios';
import {OCR_REPORT} from '../../actionType/Reports';
import {Base_url, headers} from '../../../key';

//https://citizenmobileapi-dev.azurewebsites.net/api/GetStatBreakDownData?
//state=0&city=0&status=active&geneology=0&sitetype=0
export const getOcrReport = setLoding => dispatch => {
  Axios.get(`${Base_url}/api/GetOCRReportConsolidated`, headers)
    .then(response => {
      // console.log(response.data[2], 'response');
      if (response.data) {
        dispatch({
          type: OCR_REPORT,
          payload: {
            data: response.data,
          },
        });
        setLoding(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

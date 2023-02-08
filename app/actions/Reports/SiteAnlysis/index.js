import Axios from 'axios';
import {REPORT_ALL_HOME} from '../../actionType/Reports';
import {Base_url} from '../../key';

//https://citizenmobileapi-dev.azurewebsites.net/api/GetStatBreakDownData?state=0&city=0&status=active&geneology=0&sitetype=0
export const getReportSiteAnalysis = (id, setLoding) => dispatch => {
  Axios.get(
    `${Base_url}/api/GetStatBreakDownData?state=0&city=0&status=active&geneology=0&sitetype=0`,
  )
    .then(response => {
      if (response.data) {
        dispatch({
          type: REPORT_ALL_HOME,
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

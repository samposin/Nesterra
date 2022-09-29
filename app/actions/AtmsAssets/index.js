import Axios from 'axios';
import {Base_url} from '../../key';
import {ALL_ATMS} from './../actionType/AtmsAssets/index';

export const GetAllAtmNumber = setLoder => dispatch => {
  // console.log(name);
  setLoder(true);
  Axios.get(
    `${Base_url}/api/GetAllCustomATM?atmid=0&model=0&vendor=0&siteid&type=0&branchid=0`,
  )
    .then(response => {
      if (response.data.length > 0) {
        // console.log(response.data.length, '[dfds');
        setLoder(false);
        dispatch({
          type: ALL_ATMS,
          payload: {
            data: response.data,
          },
        });
      } else {
        setLoder(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const GetAllAtmVendor = setLoder => dispatch => {
  // console.log(name);
  setLoder(true);
  Axios.get(`${Base_url}/api/GetAtmVendorsList`)
    .then(response => {
      if (response.data.length > 0) {
        console.log(response.data.length, '[dfds');
        setLoder(false);
        dispatch({
          type: ALL_ATMS,
          payload: {
            data: response.data,
          },
        });
      } else {
        setLoder(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};
//https://citizenmobileapi-dev.azurewebsites.net/api/getatmtypelist
//https://citizenmobileapi-dev.azurewebsites.net/api/GetAtmIds
//https://citizenmobileapi-dev.azurewebsites.net/api/GetAtmVendorsList
//https://citizenmobileapi-dev.azurewebsites.net/api/GetAtmModelsList

import {GET_COORDINATES, MARKER_IS_SELECTED} from '../action.type';
import {SITE_STATUS_COORDINATES} from '../action.coordinate.type';

import Axios from 'axios';
import {Base_url} from '../../key';
export const get_coordinates = () => async dispatch => {
  // Axios.get(`${Base_url}/citizenapi/api/GetLocationDataByCoordinates?limit=100`)
  Axios.get(`${Base_url}/api/GetLocationData?limit=100`)

    .then(response => {
      dispatch({
        type: GET_COORDINATES,
        payload: {
          data: response.data,
          lat: response.data[5].Latitude,
          lng: response.data[5].Longitude,
        },
      });
    })
    .catch(error => {
      console.log(error, 'ooo');
    });
};
//active&inactive
export const sity_status_coordinates = () => async dispatch => {
  Axios.get(
    `${Base_url}/api/GetLocationDataBySiteStatus?LocationStatusDesc=active`,
  )
    .then(response => {
      dispatch({
        type: SITE_STATUS_COORDINATES,
        payload: {
          data: response.data,
          lat: response.data[5].Latitude,
          lng: response.data[5].Longitude,
        },
      });
    })
    .catch(error => {
      console.log(error);
    });
};
export const marker_seleted = id => dispatch => {
  dispatch({
    type: MARKER_IS_SELECTED,
    payload: {
      id: id,
    },
  });
};

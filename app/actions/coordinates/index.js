import {GET_COORDINATES, MARKER_IS_SELECTED} from '../action.type';
import {SITE_STATUS_COORDINATES} from '../action.coordinate.type';

// import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {Base_url} from '../../key';
import {FILTER_MARKER} from '../actionType/action.Coordinatefilter.type';
export const get_coordinates = () => async dispatch => {
  // Axios.get(`${Base_url}/citizenapi/api/GetLocationDataByCoordinates?limit=100`)
  // const value = await AsyncStorage.getItem('@coordinate');
  // const data = value != null ? JSON.parse(value) : null;
  // console.log(JSON.stringify(data), 'value r');
  // if (data !== null) {
  //   dispatch({
  //     type: GET_COORDINATES,
  //     payload: {
  //       data: data,
  //       lat: data[5].Latitude,
  //       lng: data[5].Longitude,
  //     },
  //   });
  // } else {
  // // console.log(typeof response.data, 'response');
  // await AsyncStorage.setItem(
  //   '@coordinate',
  //   JSON.stringify(response.data),
  // );
  // const value = await AsyncStorage.getItem('@coordinate');
  // console.log(value, 'response');

  // }
  Axios.get(`${Base_url}/api/GetLocationData?limit=6000`)

    .then(async response => {
      dispatch({
        type: GET_COORDINATES,
        payload: {
          data: response.data,
          lat: response.data[600].Latitude,
          lng: response.data[600].Longitude,
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
      // console.log(response.data.length);
      dispatch({
        type: SITE_STATUS_COORDINATES,
        payload: {
          data: response.data,
          lat: response.data[600].Latitude,
          lng: response.data[660].Longitude,
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
export const third_party_filter = HierarchyLocationType => dispatch => {
  dispatch({
    type: FILTER_MARKER,
    payload: {
      HierarchyLocationType: HierarchyLocationType,
    },
  });
};

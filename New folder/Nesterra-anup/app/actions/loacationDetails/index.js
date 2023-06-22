import {LOCATION_DETAILS} from '../action.type';

import Axios from 'axios';
import {Base_url, headers} from '../../key';
export const get_location_details =
  ({id, setIsLoading, bottomSheetRef}) =>
  async dispatch => {
    // setIsLoading(true);

    Axios.get(
      `${Base_url}/api/GetLocationDataByLocationID?Locationid=${id}`,
      headers,
    )
      .then(response => {
        if (response.data) {
          dispatch({
            type: LOCATION_DETAILS,
            payload: {
              data: response.data,
            },
          });
          setIsLoading(false);
          bottomSheetRef.current.snapToIndex(1);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

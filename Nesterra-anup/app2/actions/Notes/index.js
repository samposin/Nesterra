import Axios from 'axios';
import {Base_url, headers} from '../../key';

import {GET_NOTES} from '../actionType/Notes';

export const getNotes = setNotesLoding => dispatch => {
  const id = 'santosh.carpenter@nesterra.net';
  Axios.get(`${Base_url}/api/GetSiteNotesByEmail?email=${id}`, headers)
    .then(response => {
      // console.log(response.data);
      if (response.data) {
        dispatch({
          type: GET_NOTES,
          payload: {
            data: response.data,
          },
        });
        setNotesLoding(false);
      } else {
        setNotesLoding(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

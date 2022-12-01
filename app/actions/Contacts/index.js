import Axios from 'axios';
import {Base_url} from '../../key';
import {ALL_CONTACT} from '../actionType/Contacts';

export const getContacts = () => dispatch => {
  Axios.get(`${Base_url}/api/GetTechnicalContacts`)
    .then(response => {
      console.log(response.data[0]);
      if (response.data) {
        dispatch({
          type: ALL_CONTACT,
          payload: {
            data: response.data,
          },
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

import {GET_ORDERS_FOR_TAB} from '../actionType/action.OrdersForTab';
import Axios from 'axios';
import {Base_url} from '../../key';

export const get_orders_for_tab = () => dispatch => {
  Axios.get(
    `${Base_url}/api/GetAllOrdersCustomDetails?OrderType=Disco&SmartSite=0&Tangoe=0&Carrier=0`,
  )
    .then(response => {
      //   console.log(response);
      if (response.data.length > 0) {
        dispatch({
          type: GET_ORDERS_FOR_TAB,
          payload: {
            data: response.data,
            loder: false,
          },
        });
      } else {
        dispatch({
          type: GET_ORDERS_FOR_TAB,
          payload: {
            data: response.data,
            loder: true,
          },
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

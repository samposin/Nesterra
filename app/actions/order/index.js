import {GET_ORDER, GET_ORDER_DETAILS} from '../actionType/action.Order.type';
import Axios from 'axios';
import {Base_url} from '../../key';

export const get_order = id => dispatch => {
  Axios.get(
    `${Base_url}/api/GetOrdersCustomdetailsByLocationID?Locationid=${id}`,
  )
    .then(response => {
      dispatch({
        type: GET_ORDER,
        payload: {
          data: response.data,
          id: id,
        },
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const get_order_details = (inv_Id, setLodding) => dispatch => {
  // const loca_Id = 'MST0007215';
  // const inv_Id = 'CZB18062';
  Axios.get(
    `${Base_url}/api/GetOrdersAlldetailsByInventoryID?InventoryID=${inv_Id}`,
  )
    .then(response => {
      if (response.data) {
        setLodding(false);

        dispatch({
          type: GET_ORDER_DETAILS,
          payload: {
            data: response.data[0],
          },
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

import {ALL_ORDERS_TYPE} from '../../actions/actionType/OrdersType';
import {REPORT_ALL_HOME} from './../../actions/actionType/Reports/index';

const initialState = {
  Reports: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REPORT_ALL_HOME:
      const siteCirtificaion = action.payload.data;
      const SiteCirtificaionOne = siteCirtificaion.slice(0, 4);
      const SiteCirtificaionTwo = siteCirtificaion.slice(5, 9);
      const SiteCirtificaionThree = siteCirtificaion.slice(10, 14);
      return {
        ...state,
        Reports: action.payload.data,
        SiteCirtificaionOne: SiteCirtificaionOne,
        SiteCirtificaionTwo: SiteCirtificaionTwo,
        SiteCirtificaionThree: SiteCirtificaionThree,
      };

    default:
      return state;
  }
};

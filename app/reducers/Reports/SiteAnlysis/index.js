import {ALL_ORDERS_TYPE} from '../../actions/actionType/OrdersType';
import {REPORT_ALL_HOME} from '../../../actions/actionType/Reports/index';

const initialState = {
  SiteAnlysis: [],
  SiteCirtificaionOne: [],
  SiteCirtificaionTwo: [],
  SiteCirtificaionThree: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REPORT_ALL_HOME:
      // console.log(
      //   action.payload.data.circuitsDataModels,
      //   'action.payload.data.circuitsDataModels',
      // );
      const siteCirtificaion = action.payload.data.circuitsDataModels;
      const siteCirtificaion1 = action.payload.data.monthlyspendDataModels;
      const SiteCirtificaionOne = siteCirtificaion.slice(0, 5);
      const SiteCirtificaionTwo = siteCirtificaion.slice(6, 10);
      const SiteCirtificaionThree = siteCirtificaion.slice(11, 15);

      return {
        ...state,
        SiteAnlysis: action.payload.data,
        SiteCirtificaionOne: siteCirtificaion.slice(0, 5).reverse(),
        SiteCirtificaionTwo: siteCirtificaion1.slice(0, 5),
        SiteCirtificaionThree: SiteCirtificaionThree,
      };

    default:
      return state;
  }
};

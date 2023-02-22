import {REPORT_ALL_HOME} from '../../../actions/actionType/Reports/index';

const initialState = {
  SiteAnlysis: [],
  SiteCirtificaionOne: [],
  SiteCirtificaionTwo: [],
  SiteCirtificaionThree: [],
  SiteCirtificaionFour: [],
  circuitCountPie: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REPORT_ALL_HOME:
      // console.log(
      //   action.payload.data.circuitsDataModels,
      //   'action.payload.data.circuitsDataModels',
      // );
      const dd = [
        action.payload.data.monthlyspendDataModels[8],
        action.payload.data.monthlyspendDataModels[2],
        action.payload.data.monthlyspendDataModels[0],
        action.payload.data.monthlyspendDataModels[1],
        action.payload.data.monthlyspendDataModels[6],
      ];
      const dd1 = [
        action.payload.data.circuitsDataModels[0],
        action.payload.data.circuitsDataModels[1],
        action.payload.data.circuitsDataModels[2],
        action.payload.data.circuitsDataModels[1],
        action.payload.data.circuitsDataModels[6],
      ];

      const siteCirtificaion = action.payload.data.circuitsDataModels;
      const siteCirtificaion1 = action.payload.data.monthlyspendDataModels;
      const SiteCirtificaionOne = siteCirtificaion.slice(0, 5);
      const SiteCirtificaionTwo = siteCirtificaion.slice(6, 10);
      const SiteCirtificaionThree = dd1;

      return {
        ...state,
        SiteAnlysis: action.payload.data,
        SiteCirtificaionOne: siteCirtificaion.slice(0, 5).reverse(),
        SiteCirtificaionTwo: dd,
        SiteCirtificaionThree: SiteCirtificaionThree,
        SiteCirtificaionFour: action.payload.data.monthlyspendDataModels,
        circuitCountPie: action.payload.data.inv_site_count,
      };

    default:
      return state;
  }
};

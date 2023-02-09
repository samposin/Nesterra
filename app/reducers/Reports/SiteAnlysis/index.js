import {REPORT_ALL_HOME} from '../../../actions/actionType/Reports';

const initialState = {
  SiteAnlysis: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REPORT_ALL_HOME:
      return {
        ...state,
        SiteAnlysis: action.data,
      };

    default:
      return state;
  }
};

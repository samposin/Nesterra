import {REPORT_COMPONENT} from '../../actions/actionType/ReportComponent';

const initialState = {
  ReportComponent: 'overview',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REPORT_COMPONENT:
      return {
        ...state,
        ReportComponent: action.data,
      };

    default:
      return state;
  }
};

import {
  APPEARANCE_TYPE,
  APPEARANCE_TYPE_SYSTEM,
} from '../../actions/actionType/Appearance';

APPEARANCE_TYPE;
const initialState = {
  appearanceType: 'light',
  syste: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APPEARANCE_TYPE:
      // console.log('first');
      return {
        ...state,
        appearanceType: action.data,
        system: null,
      };
    case APPEARANCE_TYPE_SYSTEM:
      console.log('first', action);
      return {
        ...state,
        appearanceType: action.payload.data,
        system: action.payload.system,
      };

    default:
      return state;
  }
};

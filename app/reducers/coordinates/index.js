import {SITE_STATUS_COORDINATES} from '../../actions/action.coordinate.type';
import {GET_COORDINATES, MARKER_IS_SELECTED} from '../../actions/action.type';
import {FILTER_MARKER} from '../../actions/actionType/action.Coordinatefilter.type';

const initialState = {
  coordinates: [],
  coordinates1: [],
  error: null,
  latt: 0,
  lngg: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COORDINATES:
      let data1 = action.payload.data.map(item => {
        return {...item, isChecked: false};
      });
      // console.log(data1, 'data1');
      return {
        ...state,
        coordinates: data1,
        coordinates1: data1,
        latt: action.payload.lat,
        lngg: action.payload.lng,
        error: null,
      };
    case SITE_STATUS_COORDINATES:
      let data = action.payload.data.map(item => {
        return {...item, isChecked: false};
      });
      // console.log(data1, 'data1');
      return {
        ...state,
        coordinates: data,
        latt: action.payload.lat,
        lngg: action.payload.lng,
        error: null,
      };
    case MARKER_IS_SELECTED:
      let marker = state.coordinates.map(item => {
        let itm = {...item, isChecked: false};
        return itm;
      });
      marker[action.payload.id].isChecked = true;

      return {
        ...state,
        coordinates: marker,
        latt: 0,
        lngg: 0,
        error: null,
      };
    case FILTER_MARKER:
      // let marker = state.coordinates.map(item => {
      //   let itm = {...item, isChecked: false};
      //   return itm;
      // });
      // marker[action.payload.id].isChecked = true;
      let coord = [...state.coordinates1];

      const fdata = coord.filter(function (item) {
        return (
          item.SubLocationType.toLowerCase() ===
          action.payload.SubLocationType.toLowerCase()
        );
      });

      return {
        ...state,
        coordinates: fdata,
        latt: 0,
        lngg: 0,
        error: null,
      };

    default:
      return state;
  }
};

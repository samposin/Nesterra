import {
  SITE_STATUS_COORDINATES,
  SEARCH_BY_SITE_ID,
  SEARCH_BY_BRANCH_ID,
} from '../../actions/action.coordinate.type';
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
      // let data1 = action.payload.data.map(item => {
      //   return {...item, isChecked: false};
      // });
      // console.log(data1, 'data1');
      return {
        ...state,
        coordinates: action.payload.data,
        coordinates1: action.payload.data,
        latt: action.payload.lat,
        lngg: action.payload.lng,
        error: null,
      };
    //==============SEARCH
    case SEARCH_BY_SITE_ID:
      // console.log(action.data, 'action.data');
      const searchData = [...state.coordinates1];
      if (action.data) {
        const newData1 = searchData.filter(function (item) {
          const itemData = item?.Location_ID.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          coordinates: newData1,
        };
      } else {
        return {
          ...state,
          coordinates: state.coordinates1,
        };
      }
    case SEARCH_BY_BRANCH_ID:
      // console.log(action.data, 'action.data');
      const searchData1 = [...state.coordinates1];
      if (action.data) {
        const newData1 = searchData1.filter(function (item) {
          const itemData = item?.Branch_ID.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          coordinates: newData1,
        };
      } else {
        return {
          ...state,
          coordinates: state.coordinates1,
        };
      }
    //==============SEARCH
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
          item.HierarchyLocationType.toLowerCase() ===
          action.payload.HierarchyLocationType.toLowerCase()
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

import {combineReducers} from 'redux';
import selectList from './selectList';
import setLatLang from './setLatLang';
import coordinates from './coordinates';
import location_details from './loacationDetails';
// import location_details from './loacationDetails'
import photo_url from './photpUrlFromMap';

const rootReducer = combineReducers({
  setLatLang,
  selectList,
  coordinates,
  location_details,
  photo_url,
});
export default rootReducer;

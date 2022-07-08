import {combineReducers} from 'redux';
import selectList from './selectList';
import setLatLang from './setLatLang';
import coordinates from './coordinates';
import location_details from './loacationDetails';
import order from './order';

// import location_details from './loacationDetails'
import photo_url from './photpUrlFromMap';
import OrderDetails from './order/OrderDetails';
import circuitInventory from './CircuitInventory';
import devicesInventory from './devicesInventory';
import carrierNumber from './CarrierNumber';

const rootReducer = combineReducers({
  setLatLang,
  selectList,
  coordinates,
  location_details,
  photo_url,
  order,
  OrderDetails,
  circuitInventory,
  devicesInventory,
  carrierNumber,
});
export default rootReducer;

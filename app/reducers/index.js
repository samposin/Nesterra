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
import ordersForTab from './orderFotTab';
import deviceAllData from './AllDevice';
import allDeviceDetails from './AllDevice/allDeviceDetails';
import allCircuit from './AllCircuit';
import allCircuitDetails from './AllCircuit/allCircuitDetails';
import allBranchID from './AllBranchID';
import allCircuitID from './AllCircuitID';
import allSiteID from './AllSiteID';
import allAssets from './Assets';

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
  ordersForTab,
  deviceAllData,
  allDeviceDetails,
  allCircuit,
  allCircuitDetails,
  allBranchID,
  allCircuitID,
  allSiteID,
  allAssets,
});
export default rootReducer;

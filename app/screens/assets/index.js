import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {get_orders_for_tab} from '../../actions/orderFotTab';
import {connect, useDispatch, useSelector} from 'react-redux';

import moment from 'moment';
import OrderLoder from '../../components/lodder/OrderLoder';
import {
  SORT_BY_VENDOR_ASC,
  SORT_BY_VENDOR_DES,
  SORT_BY_STATUS_ASC,
  SORT_BY_STATUS_DES,
  SORT_BY_DATE_ASC,
  SORT_BY_DATE_DES,
  SORT_BY_INV_ID_ASC,
  SORT_BY_INV_ID_DES,
  SORT_BY_ORDER_TYPE_ASC,
  SORT_BY_ORDER_TYPE_DES,
} from '../../actions/actionType/action.OrdersForTab';
import BottomSheetView1 from './components/BottomSheetView1';
import {getAllBrachrID} from '../../actions/AllBranchID';
import {getAllCircuitID} from '../../actions/AllCircuitID';

const Assets = ({
  get_orders_for_tab,
  getAllCircuitID,
  getAllBrachrID,
  navigation,
}) => {
  const bottomSheetRef = useRef(null);
  const {ordersForTab} = useSelector(state => state.ordersForTab);
  // console.log(ordersForTab[0]);
  const dispatch = useDispatch();
  // console.log(ordersForTab);
  // console.log(ordersForTab.length);
  const {isLoding} = useSelector(state => state.ordersForTab);

  // const [isLoding, setIsLoding] = useState(false);
  const [vendor, setVendor] = useState(true);
  const [status, setStatus] = useState(true);
  const [dateType, setDateType] = useState(true);
  const [invType, setInvType] = useState(true);
  const [orderType, setOrderType] = useState(true);
  const [name, setName] = useState('');
  const [bottomSheetDisplay, setBottomSheetDisplay] = useState('');
  const [lodding, setLodding] = useState(false);

  useEffect(() => {
    get_orders_for_tab();
  }, []);

  const randerItem = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('OrderDetails', {
            inv_Id: item.Inventory_ID,
          })
        }
        style={{
          ...styles.tableRow1,
          backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
          marginVertical: 1,
        }}>
        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <Text style={styles.boxText1}> {item?.Order_Type}</Text>
        </View>
        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <Text style={styles.boxText1}>{item?.vendor}</Text>
        </View>
        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <Text style={styles.boxText1}>{item?.Status}</Text>
        </View>

        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <Text style={styles.boxText1}>
            {item?.Initiation_Date
              ? moment(item.Initiation_Date).format('DD-MM-YYYY')
              : '--'}
            {/* {moment(item.Initiation_Date).format('DD-MM-YYYY')} */}
          </Text>
        </View>
        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <Text style={styles.boxText1}>
            {item?.Inventory_ID.substr(1, 10)}..
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
        }}>
        {/* ==============container============== */}

        {/* ==============Search View=========== */}
        <View
          style={{
            ...styles.searchView,

            alignItems: 'center',
          }}>
          <View style={styles.searchViewLeft}>
            <View style={styles.searchViewLeftLeft}>
              <View style={styles.inputView}>
                <TextInput
                  style={{fontSize: 20, paddingLeft: 10}}
                  value={name}
                  onChangeText={text => setName(text)}
                  placeholder="Search Site ID Here"
                />
              </View>
              <View style={styles.searchIconView}>
                <TouchableOpacity>
                  <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.searchViewRight}>
            <Text style={{fontWeight: 'bold'}}>{ordersForTab.length}</Text>
            <Text style={{fontWeight: 'bold'}}>Records</Text>
          </View>
        </View>
        {/* ==============Search View=========== */}
        {/* ==============Services Category============== */}
        <View style={{...styles.idView}}>
          <View style={styles.idViewLeft}>
            <TouchableOpacity
              onPress={() => {
                setLodding(true);
                setBottomSheetDisplay('SiteID');
                bottomSheetRef.current.snapToIndex(1);
              }}
              style={styles.idButton}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                Site ID
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setLodding(true);
                setBottomSheetDisplay('CircuitID');
                getAllCircuitID(setLodding);

                bottomSheetRef.current.snapToIndex(1);
              }}
              style={styles.idButton}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                Circuit ID
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setLodding(true);
                getAllBrachrID(setLodding);
                setBottomSheetDisplay('BranchID');
                bottomSheetRef.current.snapToIndex(1);
              }}
              style={styles.idButton}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                Branch ID
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.idViewRight}></View>
        </View>
        {/* ======================Table  Header======================= */}
        <View style={{...styles.tableRow}}>
          <TouchableOpacity
            onPress={() => {
              if (orderType) {
                setOrderType(!orderType);
                dispatch({
                  type: SORT_BY_ORDER_TYPE_ASC,
                });
              } else {
                setOrderType(!orderType);
                dispatch({
                  type: SORT_BY_ORDER_TYPE_DES,
                });
              }
            }}
            style={{
              ...styles.tableRowColum,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{...styles.boxText, color: 'white'}}>Type</Text>
            <Text style={{marginTop: 1, marginRight: 3}}>
              <AntDesign
                name={orderType ? 'caretup' : 'caretdown'}
                size={16}
                color="white"
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (vendor) {
                setVendor(!vendor);
                dispatch({
                  type: SORT_BY_VENDOR_ASC,
                });
              } else {
                setVendor(!vendor);
                dispatch({
                  type: SORT_BY_VENDOR_DES,
                });
              }
            }}
            style={{
              ...styles.tableRowColum,
              flexDirection: 'row',
              borderLeftColor: 'white',
              borderLeftWidth: 2,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={{...styles.boxText, color: 'white'}}>Vendor</Text>
            <Text style={{marginTop: 1, marginRight: 3}}>
              <AntDesign
                name={vendor ? 'caretup' : 'caretdown'}
                size={16}
                color="white"
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (status) {
                setStatus(!status);
                dispatch({
                  type: SORT_BY_STATUS_ASC,
                });
              } else {
                setStatus(!status);
                dispatch({
                  type: SORT_BY_STATUS_DES,
                });
              }
            }}
            style={{
              ...styles.tableRowColum,
              borderLeftColor: 'white',
              borderLeftWidth: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{...styles.boxText, color: 'white'}}>Status</Text>
            <Text style={{marginTop: 1, marginRight: 3}}>
              <AntDesign
                name={status ? 'caretup' : 'caretdown'}
                size={16}
                color="white"
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (dateType) {
                setDateType(!dateType);
                dispatch({
                  type: SORT_BY_DATE_ASC,
                });
              } else {
                setDateType(!dateType);
                dispatch({
                  type: SORT_BY_DATE_DES,
                });
              }
            }}
            style={{
              ...styles.tableRowColum,
              borderLeftColor: 'white',
              borderLeftWidth: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{...styles.boxText, color: 'white'}}>Date</Text>
            <Text style={{marginTop: 1, marginRight: 3}}>
              <AntDesign
                name={dateType ? 'caretup' : 'caretdown'}
                size={16}
                color="white"
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (invType) {
                setInvType(!invType);
                dispatch({
                  type: SORT_BY_INV_ID_ASC,
                });
              } else {
                setInvType(!invType);
                dispatch({
                  type: SORT_BY_INV_ID_DES,
                });
              }
            }}
            style={{
              ...styles.tableRowColum,
              borderLeftColor: 'white',
              borderLeftWidth: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text style={{...styles.boxText, color: 'white'}}>Inv ID</Text>
            <Text style={{marginTop: 1, marginRight: 3}}>
              <AntDesign
                name={invType ? 'caretup' : 'caretdown'}
                size={16}
                color="white"
              />
            </Text>
          </TouchableOpacity>
        </View>

        {/* ======================Table  Header======================= */}
        {/* ==============Services Category============== */}
        {isLoding ? (
          <View style={styles.loderView}>
            <OrderLoder />
          </View>
        ) : (
          <>
            {ordersForTab.length == 0 ? (
              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 300,
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  No Data Found
                </Text>
              </View>
            ) : (
              <>
                <View style={styles.table}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={ordersForTab}
                    keyExtractor={(item, i) => i.toString()}
                    renderItem={(item, i) => randerItem(item)}
                  />
                </View>
              </>
            )}
          </>
        )}
        {/* ==============Summary View=========== */}
        <BottomSheetView1
          lodding={lodding}
          bottomSheetRef={bottomSheetRef}
          bottomSheetDisplay={bottomSheetDisplay}
        />
      </SafeAreaView>
      {/* {selectedComponent()} */}
    </>
  );
};

export default connect(null, {
  get_orders_for_tab,
  getAllCircuitID,
  getAllBrachrID,
})(Assets);

const styles = StyleSheet.create({
  loderView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  //searchView
  searchViewLeft: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchViewLeftLeft: {
    width: '100%',
    height: '80%',
    borderWidth: 1.5,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputView: {
    width: '80%',
    height: '100%',

    justifyContent: 'center',
  },
  searchViewRight: {
    width: '20%',
    height: '100%',
    paddingLeft: 10,
    justifyContent: 'center',
  },

  searchView: {
    width: '100%',
    height: 80,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  searchIconView: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //searchView
  ///========id Button
  idButton: {
    width: '30%',
    height: 42,
    borderWidth: 1,
    borderRadius: 10,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ///========id View
  idView: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  idViewLeft: {
    width: '80%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  idViewRight: {width: '20%', height: '100%'},
  ///========id View

  ///=========Table
  table: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 15,
  },
  tableRow: {
    width: '100%',
    height: 50,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRow1: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum: {
    width: '20%',
    height: '100%',
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowColumLast: {
    width: '20%',
    marginHorizontal: 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontWeight: '700',
    fontSize: 16,
    color: 'white',
  },
  ///=========Table
  ///=========data row
  tableRow1: {
    width: '100%',
    height: 40,

    flexDirection: 'row',
    justifyContent: 'space-between',

    alignSelf: 'center',
  },
  tableRowColum1: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
  },

  boxText1: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 7,
  },
  ///=========data row
  ///========Second table
  secondTable: {
    width: '95%',
    marginTop: 20,
    alignSelf: 'center',
  },
  secondTableRow: {
    width: '100%',
    height: 30,

    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  secondTableColum: {
    width: '50%',
    height: '100%',
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  ///========Second table
});

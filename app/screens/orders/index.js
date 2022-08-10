import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {GetCarrierNumber} from '../../actions/CarrierNumber';
import {get_orders_for_tab} from '../../actions/orderFotTab';
import {connect, useDispatch, useSelector} from 'react-redux';
import BottomSheetView from './components/BottomSheetView';
import BottomSheetViewDetails from './components/BottomSheetViewDetails';

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
import {tostalert, copyText} from '../../components/helper';
import {useToast} from 'native-base';
import {get_order_details} from '../../actions/order';
const Category = [
  {
    id: 0,
    name: 'Order Type',
    value: 'GetCarrierNumber',
    disValue: 'OrderType',
    search: 'Order Type',
    active: false,
  },
  {
    id: 1,
    name: 'Status',
    value: 'GetSmartSiteNumber',
    disValue: 'Status',
    search: 'Status#',
    active: false,
  },
  {
    id: 2,
    name: 'SmartSite#',
    value: 'GetSmartSiteNumber',
    disValue: 'SmartSite',
    search: 'SmartSite#',
    active: false,
  },

  {
    id: 3,
    name: 'Tangoe',
    value: 'GetTangoeNumber',
    disValue: 'Tangoe',
    search: 'Vendor',
    active: false,
  },
  {
    id: 4,
    name: 'Carrier',
    value: 'GetTangoeNumber',
    disValue: 'Carrier',
    search: 'Status',
    active: false,
  },
];

const Orders = ({
  GetCarrierNumber,
  get_order_details,
  get_orders_for_tab,
  navigation,
}) => {
  const {ordersForTab} = useSelector(state => state.ordersForTab);
  const dispatch = useDispatch();

  const {isLoding} = useSelector(state => state.ordersForTab);
  const [diplayName, setDisplayName] = useState('');
  const bottomSheetRef = useRef(null);
  const bottomSheetRefdetails = useRef(null);

  const [vendor, setVendor] = useState(true);
  const [status, setStatus] = useState(true);
  const [dateType, setDateType] = useState(true);
  const [invType, setInvType] = useState(true);
  const [orderType, setOrderType] = useState(true);

  const [data, setData] = useState(Category);

  const [bottomSheetDisplay, setBottomSheetDisplay] = useState('');
  const [lodding, setLodding] = useState(false);

  useEffect(() => {
    get_orders_for_tab();
  }, []);
  const toast = useToast();
  //barckground color change
  const selectedComponent = item => {
    switch (true) {
      case item === 'In Progress':
        return '#ffffbf';

      case item === 'Initiated':
        return '#ffc8ce';

      case item === 'Cancelled':
        return '#ffc8ce';

      case item === 'Completed':
        return '#c6efcd';
    }
  };
  //barckground color change
  //bottom color change

  const changeBottomColor = id => {
    let listData = data.map(item => {
      let itm = {...item, active: false};
      return itm;
    });

    listData[id].active = true;
    setData(listData);
  };
  //bottom color change
  const randerItem = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={
          () => {
            // setLodding(true);
            bottomSheetRef.current.close();
            // if (!lodding) {
            //   bottomSheetRefdetails.current.snapToIndex(2);
            // }
            get_order_details(
              item.Inventory_ID,
              setLodding,
              bottomSheetRefdetails,
            );
          }
          // navigation.navigate('OrderDetails', {
          //   inv_Id: item.Inventory_ID,
          // })
        }
        style={{
          ...styles.tableRow1,
          height: 60,
          backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
          marginVertical: 1,
        }}>
        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
            backgroundColor: selectedComponent(item?.Status),
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Order_Type);

              tostalert(item.Order_Type);
            }}>
            <Text style={styles.boxText1}> {item?.Order_Type}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
            backgroundColor: selectedComponent(item?.Status),
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.vendor);
              tostalert(item.vendor);
            }}>
            <Text style={styles.boxText1}>{item?.vendor}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
            backgroundColor: selectedComponent(item?.Status),
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Status);
              tostalert(item.Status);
            }}>
            <Text style={styles.boxText1}>{item?.Status}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Inventory_ID);
              tostalert(item.Inventory_ID);
            }}>
            <Text style={styles.boxText1}>{item?.Inventory_ID}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(moment(item.Initiation_Date).format('DD-MM-YYYY'));
              tostalert(moment(item.Initiation_Date).format('DD-MM-YYYY'));
            }}>
            <Text style={styles.boxText1}>
              {item?.Initiation_Date
                ? moment(item.Initiation_Date).format('DD-MM-YYYY')
                : '--'}
              {/* {moment(item.Initiation_Date).format('DD-MM-YYYY')} */}
            </Text>
          </TouchableOpacity>
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

        {/* ==============Summary View=========== */}
        <View
          style={{
            ...styles.summaryView,

            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Circuits');
            }}
            style={styles.summaryButton}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Circuit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AllDevice')}
            style={styles.summaryButton}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Device
            </Text>
          </TouchableOpacity>
        </View>

        {/* ==============Services Category============== */}
        <View style={{...styles.dropDownView}}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{width: '100%', height: '100%'}}>
            {data.map((item, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    GetCarrierNumber(item.value);
                    setDisplayName(item.disValue);
                    bottomSheetRef.current.snapToIndex(1);
                    setBottomSheetDisplay(item.search);
                    changeBottomColor(item.id);
                  }}
                  style={{
                    ...styles.categoryBottom,
                    backgroundColor: item.active ? '#007aff' : null,

                    borderWidth: item.active ? 0 : 1,
                  }}>
                  <Text style={{color: item.active ? 'white' : 'black'}}>
                    {item.name}
                  </Text>
                  <AntDesign
                    name="caretdown"
                    size={20}
                    style={{marginLeft: 2}}
                    color={item.active ? 'white' : 'black'}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
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
      </SafeAreaView>
      {/* {selectedComponent()} */}
      <BottomSheetView
        bottomSheetDisplay={bottomSheetDisplay}
        diplayName={diplayName}
        bottomSheetRef={bottomSheetRef}
      />
      <BottomSheetViewDetails
        lodding={lodding}
        bottomSheetRefdetails={bottomSheetRefdetails}
      />
    </>
  );
};

export default connect(null, {
  GetCarrierNumber,
  get_order_details,
  get_orders_for_tab,
})(Orders);

const styles = StyleSheet.create({
  //category Bottom
  categoryBottom: {
    width: 100,
    height: 40,
    borderRadius: 9,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 3,
    marginHorizontal: 5,
  },
  //category Bottom
  loderView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  summaryView: {
    width: '100%',
    height: 70,

    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ///========Summary Button
  summaryButton: {
    width: 100,
    height: 40,
    backgroundColor: '#007aff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ///========dropdown
  dropDownView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDownViewLeft: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  dropDownViewRight: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    marginHorizontal: 3,
  },
  pickerItem: {width: 200, height: 40, borderWidth: 0.5},
  ///========dropdown
  ///========dropdown
  pickerBoxInner: {
    borderWidth: 0.6,
    borderColor: 'black',
    borderRadius: 2,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  pickerBoxIcon: {
    position: 'absolute',
    right: 0,
    fontSize: 23,
    color: 'red',
  },
  pickerStyle: {
    width: '120%',
    paddingBottom: 0,
    paddingLeft: 0,
    transform: [{scaleX: 0.85}, {scaleY: 0.85}],
    left: -10,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  topView: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  topItem: {
    width: '33.33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topItem1: {
    width: '33.33%',
    height: '100%',
    justifyContent: 'center',
  },

  ///=========Table
  table: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 15,
  },
  tableRow: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRow1: {
    width: '100%',

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
  secondTableColum: {
    width: '50',
    height: '100',
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingLeft: 'center',
  },

  ///========Second table
});

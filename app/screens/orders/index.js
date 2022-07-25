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

import moment from 'moment';
import OrderLoder from '../../components/lodder/OrderLoder';
import {SORT_BY_VENDOR} from '../../actions/actionType/action.OrdersForTab';

const Orders = ({GetCarrierNumber, get_orders_for_tab, navigation, route}) => {
  const {ordersForTab} = useSelector(state => state.ordersForTab);
  const dispatch = useDispatch();
  console.log(ordersForTab);
  console.log(ordersForTab.length);
  const {isLoding} = useSelector(state => state.ordersForTab);
  const [diplayName, setDisplayName] = useState('');
  const bottomSheetRef = useRef(null);
  // const [isLoding, setIsLoding] = useState(false);
  const [sort, setsort] = useState(true);
  const [bottomSheetDisplay, setBottomSheetDisplay] = useState('');
  const Category = [
    {
      id: 0,
      name: 'Order Type',
      value: 'GetCarrierNumber',
      disValue: 'OrderType',
      search: 'Order Type',
    },
    {
      id: 1,
      name: 'SmartSite#',
      value: 'GetSmartSiteNumber',
      disValue: 'SmartSite',
      search: 'SmartSite#',
    },
    {
      id: 1,
      name: 'Tangoe',
      value: 'GetTangoeNumber',
      disValue: 'Tangoe',
      search: 'Vendor',
    },
    {
      id: 1,
      name: 'Carrier',
      value: 'GetTangoeNumber',
      disValue: 'Carrier',
      search: 'Status',
    },
  ];
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

        {/* ==============Summary View=========== */}
        <View style={styles.summaryView}>
          <TouchableOpacity style={styles.summaryButton}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Sammary
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
            {Category.map((item, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    GetCarrierNumber(item.value);
                    setDisplayName(item.disValue);
                    bottomSheetRef.current.snapToIndex(1);
                    setBottomSheetDisplay(item.search);
                  }}
                  style={{
                    width: 100,
                    height: 40,
                    borderRadius: 5,
                    borderColor: 'black',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 3,
                    marginHorizontal: 5,

                    borderWidth: 1,
                  }}>
                  <Text>{item.name}</Text>
                  <AntDesign
                    name="caretdown"
                    size={20}
                    style={{marginLeft: 2}}
                    color="black"
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
              if (sort) {
                setsort(!sort);
                alert('ddd');
              } else {
                setsort(!sort);
                alert('pppp');
              }
            }}
            style={{...styles.tableRowColum}}>
            <Text style={{...styles.boxText, color: 'white'}}>Type</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert('ddadfas')}
            style={{
              ...styles.tableRowColum,
              borderLeftColor: 'white',
              borderLeftWidth: 2,
            }}>
            <Text style={styles.boxText}>Vendor</Text>
          </TouchableOpacity>
          <View
            style={{
              ...styles.tableRowColum,
              borderLeftColor: 'white',
              borderLeftWidth: 2,
            }}>
            <Text style={styles.boxText}>Status</Text>
          </View>
          <View
            style={{
              ...styles.tableRowColum,
              borderLeftColor: 'white',
              borderLeftWidth: 2,
            }}>
            <Text style={styles.boxText}>Date</Text>
          </View>
          <View
            style={{
              ...styles.tableRowColum,
              borderLeftColor: 'white',
              borderLeftWidth: 2,
            }}>
            <Text style={styles.boxText}>Inv ID</Text>
          </View>
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
    </>
  );
};

export default connect(null, {GetCarrierNumber, get_orders_for_tab})(Orders);

const styles = StyleSheet.create({
  loderView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  summaryView: {
    width: '100%',
    height: 100,

    justifyContent: 'center',
    paddingLeft: 20,
  },
  ///========Summary Button
  summaryButton: {
    width: 100,
    height: 50,
    backgroundColor: '#007aff',
    borderRadius: 8,
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

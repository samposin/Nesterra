import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {connect, useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  SORT_BY_ORDER_ID_ASC,
  SORT_BY_ORDER_ID_DES,
  SORT_BY_ORDER_STATUS_ASC,
  SORT_BY_ORDER_STATUS_DES,
  SORT_BY_ORDER_TYPE_ASC,
  SORT_BY_ORDER_TYPE_DES,
  SORT_BY_ORDER_VENDOR_ASC,
  SORT_BY_ORDER_VENDOR_DES,
  FILTER_BY_STATUS_ACTIVE,
  ALL_DATA,
} from '../../../actions/actionType/action.Order.type';
import {copyText, tostalert} from '../../helper';

import {getOrderDetailsExpolore} from '../../../actions/OrderDetailsExplore';
import ToggleView from './../ToggleView';
const Orders = ({orderRefExplore, getOrderDetailsExpolore}) => {
  const {order} = useSelector(state => state.order);
  const {id} = useSelector(state => state.order);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // console.log(id);
  // console.log(order);
  const [idType, setIdType] = useState(true);
  const [vendorType, setVendorType] = useState(true);
  const [statusType, setStatusType] = useState(true);
  const [orderType, setOrderType] = useState(true);
  const [lodding, setLodding] = useState(true);
  const activeFilter = () => {
    dispatch({
      type: FILTER_BY_STATUS_ACTIVE,
    });
  };
  const alldata = () => {
    dispatch({
      type: ALL_DATA,
    });
  };
  return (
    <>
      {/* ==============container============== */}
      <View style={{flex: 1}}>
        {/* ==============Table Header============== */}
        {order.length == 0 ? (
          <View
            style={{
              width: '100%',
              height: 300,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              No Data Found
            </Text>
          </View>
        ) : (
          <>
            <View
              style={{
                width: '100%',
                height: 50,

                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (idType) {
                    setIdType(!idType);
                    dispatch({
                      type: SORT_BY_ORDER_ID_ASC,
                    });
                  } else {
                    setIdType(!idType);
                    dispatch({
                      type: SORT_BY_ORDER_ID_DES,
                    });
                  }
                }}
                style={{
                  ...styles.tableRowColum,
                  borderLeftColor: 'white',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  justifyContent: 'space-around',
                }}>
                <Text style={styles.boxText}>Inv ID</Text>
                <Text style={{marginTop: 1, marginRight: 3}}>
                  <AntDesign
                    name={idType ? 'caretup' : 'caretdown'}
                    size={16}
                    color="white"
                  />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (vendorType) {
                    setVendorType(!vendorType);
                    dispatch({
                      type: SORT_BY_ORDER_VENDOR_ASC,
                    });
                  } else {
                    setVendorType(!vendorType);
                    dispatch({
                      type: SORT_BY_ORDER_VENDOR_DES,
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
                <Text style={styles.boxText}>Vendor</Text>
                <Text style={{marginTop: 1, marginRight: 3}}>
                  <AntDesign
                    name={vendorType ? 'caretup' : 'caretdown'}
                    size={16}
                    color="white"
                  />
                </Text>
              </TouchableOpacity>
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
                  borderLeftColor: 'white',
                  borderLeftWidth: 2,
                  flexDirection: 'row',
                  paddingHorizontal: 15,
                  justifyContent: 'space-around',
                }}>
                <Text style={styles.boxText}>Order Type</Text>
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
                  if (statusType) {
                    setStatusType(!statusType);
                    dispatch({
                      type: SORT_BY_ORDER_STATUS_ASC,
                    });
                  } else {
                    setStatusType(!statusType);
                    dispatch({
                      type: SORT_BY_ORDER_STATUS_DES,
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
                <Text style={styles.boxText}>Status</Text>
                <Text style={{marginTop: 1, marginRight: 3}}>
                  <AntDesign
                    name={statusType ? 'caretup' : 'caretdown'}
                    size={16}
                    color="white"
                  />
                </Text>
              </TouchableOpacity>
            </View>
            {/* ==============Table Header============== */}
            {/* ==============Table Body============== */}
            <BottomSheetScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}>
              {order.map((item, i) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      // console.log(item.Inventory_ID);
                      const loca_Id = id;
                      const inv_Id = item.Inventory_ID;
                      //   inv_Id: item.Inventory_ID,
                      getOrderDetailsExpolore(
                        id,
                        item.Inventory_ID,

                        setLodding,
                        orderRefExplore,
                      );

                      // navigation.navigate('OrderDetails', {
                      //   loca_Id: id,
                      //   inv_Id: item.Inventory_ID,
                      // });
                    }}
                    key={i}
                    style={{
                      width: '100%',
                      height: 50,
                      backgroundColor: i % 2 == 0 ? '#d1d0d0' : '#ffffff',
                      flexDirection: 'row',
                      marginVertical: 1,
                    }}>
                    <View
                      style={{
                        ...styles.tableRowColum1,
                        borderLeftColor: 'white',
                      }}>
                      <TouchableOpacity
                        onLongPress={() => {
                          copyText(item.Inventory_ID);

                          tostalert(item.Inventory_ID);
                        }}>
                        <Text style={styles.boxText1}>{item.Inventory_ID}</Text>
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
                          copyText(item.vendor);

                          tostalert(item.vendor);
                        }}>
                        <Text style={styles.boxText1}>{item.vendor}</Text>
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
                          copyText(item.Order_Type);

                          tostalert(item.Order_Type);
                        }}>
                        <Text style={styles.boxText1}>{item.Order_Type}</Text>
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
                          copyText(item.Status);

                          tostalert(item.Status);
                        }}>
                        <Text style={styles.boxText1}>{item.Status}</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </BottomSheetScrollView>
            {/* ==============Table Body============== */}
          </>
        )}
        {order.length > 0 ? (
          <ToggleView
            length={order.length}
            alldata={alldata}
            activeFilter={activeFilter}
          />
        ) : null}
      </View>
      {/* ==============container============== */}
    </>
  );
};

export default connect(null, {getOrderDetailsExpolore})(Orders);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
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
    width: '25%',
    height: '100%',
    backgroundColor: '#007aff',

    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowColum1: {
    width: '25%',
    height: '100%',

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
    width: '25%',
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

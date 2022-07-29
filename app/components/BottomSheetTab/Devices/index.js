import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {connect, useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  SORT_BY_DEVICE_ID_ASC,
  SORT_BY_DEVICE_ID_DES,
  SORT_BY_DEVICE_NAME_ASC,
  SORT_BY_DEVICE_NAME_DES,
  SORT_BY_DEVICE_STATUS_ASC,
  SORT_BY_DEVICE_STATUS_DES,
  SORT_BY_DEVICE_VENDOR_ASC,
  SORT_BY_DEVICE_VENDOR_DES,
} from '../../../actions/actionType/devicesInventory.type';

const Devices = ({}) => {
  const {devicesInventory} = useSelector(state => state.devicesInventory);
  // console.log(devicesInventory);
  // console.log(devicesInventory.length);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [idType, setIdType] = useState(true);
  const [vendorType, setVendorType] = useState(true);
  const [statusType, setStatusType] = useState(true);
  const [nameType, setNameType] = useState(true);
  return (
    <>
      {/* ==============container============== */}
      <View style={{flex: 1}}>
        {/* ==============Table Header============== */}
        {devicesInventory.length == 0 ? (
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
                height: 60,

                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (idType) {
                    setIdType(!idType);
                    dispatch({
                      type: SORT_BY_DEVICE_ID_ASC,
                    });
                  } else {
                    setIdType(!idType);
                    dispatch({
                      type: SORT_BY_DEVICE_ID_DES,
                    });
                  }
                }}
                style={{
                  ...styles.tableRowColum,
                  borderLeftColor: 'white',
                  flexDirection: 'row',

                  justifyContent: 'space-around',
                }}>
                <Text style={styles.boxText}>Devices ID</Text>
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
                  if (nameType) {
                    setNameType(!nameType);
                    dispatch({
                      type: SORT_BY_DEVICE_NAME_ASC,
                    });
                  } else {
                    setNameType(!nameType);
                    dispatch({
                      type: SORT_BY_DEVICE_NAME_DES,
                    });
                  }
                }}
                style={{
                  ...styles.tableRowColum,
                  borderLeftColor: 'white',
                  borderLeftWidth: 2,
                  flexDirection: 'row',
                  paddingHorizontal: 5,
                  justifyContent: 'space-around',
                }}>
                <Text style={styles.boxText}>Device Name </Text>
                <Text style={{marginTop: 1, marginRight: 3}}>
                  <AntDesign
                    name={nameType ? 'caretup' : 'caretdown'}
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
                      type: SORT_BY_DEVICE_STATUS_ASC,
                    });
                  } else {
                    setStatusType(!statusType);
                    dispatch({
                      type: SORT_BY_DEVICE_STATUS_DES,
                    });
                  }
                }}
                style={{
                  ...styles.tableRowColum,
                  borderLeftColor: 'white',
                  borderLeftWidth: 2,
                  flexDirection: 'row',
                  paddingHorizontal: 2,
                  justifyContent: 'space-around',
                }}>
                <Text style={styles.boxText}>Device Status</Text>
                <Text style={{marginTop: 1, marginRight: 3}}>
                  <AntDesign
                    name={statusType ? 'caretup' : 'caretdown'}
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
                      type: SORT_BY_DEVICE_VENDOR_ASC,
                    });
                  } else {
                    setVendorType(!vendorType);
                    dispatch({
                      type: SORT_BY_DEVICE_VENDOR_DES,
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
                <Text style={styles.boxText}>Device Vendor</Text>
                <Text style={{marginTop: 1, marginRight: 3}}>
                  <AntDesign
                    name={vendorType ? 'caretup' : 'caretdown'}
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
              {devicesInventory.map((item, i) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('DevicesDetails', {item})
                    }
                    key={i}
                    style={{
                      width: '100%',
                      height: 40,
                      backgroundColor: i % 2 == 0 ? '#d1d0d0' : '#ffffff',
                      flexDirection: 'row',
                      marginVertical: 1,
                    }}>
                    <View
                      style={{
                        ...styles.tableRowColum1,
                        borderLeftColor: 'white',
                      }}>
                      <Text style={styles.boxText1}>{item.ID}</Text>
                    </View>
                    <View
                      style={{
                        ...styles.tableRowColum1,
                        borderLeftColor: 'white',
                        borderLeftWidth: 2,
                      }}>
                      <Text style={styles.boxText1}>
                        {item.Device_Name.substr(1, 10)}..
                      </Text>
                    </View>
                    <View
                      style={{
                        ...styles.tableRowColum1,
                        borderLeftColor: 'white',
                        borderLeftWidth: 2,
                      }}>
                      <Text style={styles.boxText1}>{item.Device_Status}</Text>
                    </View>
                    <View
                      style={{
                        ...styles.tableRowColum1,
                        borderLeftColor: 'white',
                        borderLeftWidth: 2,
                      }}>
                      <Text style={styles.boxText1}>{item.Device_Vendor}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </BottomSheetScrollView>
            {/* ==============Table Body============== */}
          </>
        )}
      </View>
      {/* ==============container============== */}
    </>
  );
};

export default connect(null, {})(Devices);

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

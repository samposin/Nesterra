import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {connect, useDispatch, useSelector} from 'react-redux';

import {getAllDevice} from '../../../actions/AllDevice';
import {
  ALL_DEVICES_SORT_BY_ID_ASC,
  ALL_DEVICES_SORT_BY_ID_DES,
  ALL_DEVICES_SORT_BY_STATUS_ASC,
  ALL_DEVICES_SORT_BY_STATUS_DES,
  ALL_DEVICES_SORT_BY_VENDOR_ASC,
  ALL_DEVICES_SORT_BY_VENDOR_DES,
  ALL_DEVICES_SORT_BY_TYPE_ASC,
  ALL_DEVICES_SORT_BY_TYPE_DES,
} from '../../../actions/actionType/AllDevice';

import {getAllDeviceDetails} from '../../../actions/AllDevice/allDeviceDetails';

import {tostalert, copyText} from '../../../components/helper';
import OrderLoder from '../../../components/lodder/OrderLoder';
import BottomSheetViewDevices from './DevicesDetails';
import DevicesBottomSheet from './Devices/index';

const Devices = ({
  getAllDevice,
  getAllDeviceDetails,
  //  deviceRefDetails,
}) => {
  const {deviceAllData} = useSelector(state => state.deviceAllData);
  // const {isLoding} = useSelector(state => state.deviceAllData);
  const dispatch = useDispatch();
  // console.log(deviceAllData.length, 'dd');
  const [diplayName, setDiplayName] = useState('');

  // const {isLoding} = useSelector(state => state.ordersForTab);

  const [vendor, setVendor] = useState(true);
  const [status, setStatus] = useState(true);

  const [invType, setInvType] = useState(true);
  const [type, setType] = useState(true);
  const [lodding, setLodding] = useState(false);
  const [lodding1, setLodding1] = useState(true);
  const deviceRefDetails = useRef(null);
  const deviceRef = useRef(null);

  useEffect(() => {
    setLodding1(true);
    getAllDevice(setLodding1);
  }, []);

  const randerItem = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setLodding(true);
          // navigation.navigate('AllDevicesDetails', {
          //   inv_Id: item.ID,
          // })
          // console.log('snap');
          const id = item.ID;
          getAllDeviceDetails(id, setLodding, deviceRefDetails);

          // setTimeout(() => {
          //   deviceRef.current.snapToIndex(1);
          // }, 1200);
        }}
        style={{
          ...styles.tableRow1,
          height: 50,
          backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
          marginVertical: 1,
        }}>
        <View
          style={{
            ...styles.tableRowColum1,
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Device_Name);
              tostalert(item.Device_Name);
            }}>
            <Text style={styles.boxText1}>{item?.Device_Name}</Text>
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
              copyText(item.Device_Status);
              tostalert(item.Device_Status);
            }}>
            <Text style={styles.boxText1}>{item?.Device_Status}</Text>
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
              copyText(item.Device_Type);

              tostalert(item.Device_Type);
            }}>
            <Text style={styles.boxText1}> {item?.Device_Type}</Text>
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
              copyText(item.Device_Vendor);
              tostalert(item.Device_Vendor);
            }}>
            <Text style={styles.boxText1}>{item?.Device_Vendor}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      {/* ==============container============== */}

      {/* ========ID VIEW============= */}
      <View style={{...styles.idView}}>
        <View style={styles.idViewLeft}>
          <TouchableOpacity
            onPress={() => {
              setDiplayName('Name');
              deviceRef.current.snapToIndex(1);
            }}
            style={{
              ...styles.idButton,
              flexDirection: 'row',
              borderColor: diplayName == 'Name' ? '#007aff' : 'black',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: diplayName == 'Name' ? '#007aff' : 'black',
              }}>
              Name
            </Text>
            <AntDesign
              name="caretdown"
              size={20}
              style={{marginLeft: 5}}
              color={diplayName == 'Name' ? '#007aff' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDiplayName('Type');
              deviceRef.current.snapToIndex(1);
            }}
            style={{
              ...styles.idButton,
              flexDirection: 'row',
              borderColor: diplayName == 'Type' ? '#007aff' : 'black',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: diplayName == 'Type' ? '#007aff' : 'black',
              }}>
              Type
            </Text>
            <AntDesign
              name="caretdown"
              size={20}
              style={{marginLeft: 5}}
              color={diplayName == 'Type' ? '#007aff' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDiplayName('Vendor');
              deviceRef.current.snapToIndex(1);
            }}
            style={{
              ...styles.idButton,
              flexDirection: 'row',
              borderColor: diplayName == 'Vendor' ? '#007aff' : 'black',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: diplayName == 'Vendor' ? '#007aff' : 'black',
              }}>
              Vendor
            </Text>
            <AntDesign
              name="caretdown"
              size={20}
              style={{marginLeft: 5}}
              color={diplayName == 'Vendor' ? '#007aff' : 'black'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.idViewRight}></View>
      </View>
      {/* ========ID VIEW============= */}

      {/* ======================Table  Header======================= */}
      <View style={{...styles.tableRow}}>
        <TouchableOpacity
          onPress={() => {
            if (invType) {
              setInvType(!invType);
              dispatch({
                type: ALL_DEVICES_SORT_BY_ID_ASC,
              });
            } else {
              setInvType(!invType);
              dispatch({
                type: ALL_DEVICES_SORT_BY_ID_DES,
              });
            }
          }}
          style={{
            ...styles.tableRowColum,

            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={styles.boxText}>Name</Text>
          <Text style={{marginTop: 1}}>
            <AntDesign
              name={invType ? 'caretup' : 'caretdown'}
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
                type: ALL_DEVICES_SORT_BY_STATUS_ASC,
              });
            } else {
              setStatus(!status);
              dispatch({
                type: ALL_DEVICES_SORT_BY_STATUS_DES,
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
          <Text style={{marginTop: 1}}>
            <AntDesign
              name={status ? 'caretup' : 'caretdown'}
              size={16}
              color="white"
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (type) {
              setType(!type);
              dispatch({
                type: ALL_DEVICES_SORT_BY_TYPE_ASC,
              });
            } else {
              setType(!type);
              dispatch({
                type: ALL_DEVICES_SORT_BY_TYPE_DES,
              });
            }
          }}
          style={{
            ...styles.tableRowColum,
            flexDirection: 'row',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
            justifyContent: 'space-around',
          }}>
          <Text style={{...styles.boxText, color: 'white'}}>Type</Text>
          <Text style={{marginTop: 1, marginRight: 3}}>
            <AntDesign
              name={type ? 'caretup' : 'caretdown'}
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
                type: ALL_DEVICES_SORT_BY_VENDOR_ASC,
              });
            } else {
              setVendor(!vendor);
              dispatch({
                type: ALL_DEVICES_SORT_BY_VENDOR_DES,
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
          <Text style={{...styles.boxText}}>Vendor</Text>
          <Text style={{marginTop: 1}}>
            <AntDesign
              name={vendor ? 'caretup' : 'caretdown'}
              size={16}
              color="white"
            />
          </Text>
        </TouchableOpacity>
      </View>

      {/* ======================Table  Header======================= */}
      {/* ==============Services Category============== */}
      {lodding1 ? (
        <View style={styles.loderView}>
          <OrderLoder />
        </View>
      ) : (
        <>
          {deviceAllData.length == 0 ? (
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
                  data={deviceAllData}
                  keyExtractor={(item, i) => i.toString()}
                  renderItem={(item, i) => randerItem(item)}
                />
              </View>
            </>
          )}
        </>
      )}
      {/* ==============Summary View=========== */}
      <BottomSheetViewDevices
        lodding={lodding}
        deviceRefDetails={deviceRefDetails}
      />
      <DevicesBottomSheet
        lodding1={lodding1}
        diplayName={diplayName}
        deviceRef={deviceRef}
      />
      {/* <BottomSheetView deviceRef={deviceRef} lodding={lodding} />
        {lodding && <Lodder lodding={lodding} />} */}
    </>
  );
};

export default connect(null, {getAllDevice, getAllDeviceDetails})(Devices);

const styles = StyleSheet.create({
  ///========id Button
  idButton: {
    width: '30%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ///========id View
  idView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
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
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum: {
    width: '25%',
    height: '100%',
    backgroundColor: '#007aff',

    alignItems: 'center',
  },
  tableRowColumLast: {
    width: '25%',
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
    width: '25%',
    height: '100%',
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  ///========Second table
});

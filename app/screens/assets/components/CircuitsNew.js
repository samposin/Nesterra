import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Text,
  View,
  Image,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {getAllCircuit} from '../../../actions/AllCircuit';
import OrderLoder from '../../../components/lodder/OrderLoder';
import {tostalert, copyText} from '../../../components/helper';
// import CircuitBottomSheet from './Circuits';
import CircuitBottomSheet from './Circuits/CircuitBottomSheet';
import {getAllCircuitID} from '../../../actions/AllCircuitID';
import {getAllSiteID} from '../../../actions/AllSiteID';
import {getAllBrachrID} from '../../../actions/AllBranchID';
import BottomSheetViewCircuits from './CircuitDetails';
import {getAllCircuitDetails} from '../../../actions/AllCircuit/allCorcuitDetails';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ThirdRow from './ThirdRow/index';

import ToggleSwitch from 'toggle-switch-react-native';
const {width} = Dimensions.get('screen');
import {
  ALL_CIRCUIT_SORT_BY_LOC_ID_ASC,
  ALL_CIRCUIT_SORT_BY_LOC_ID_DES,
  ALL_CIRCUIT_SORT_BY_VENDOR_ASC,
  ALL_CIRCUIT_SORT_BY_VENDOR_DES,
  ALL_CIRCUIT_SORT_BY_CIR_ID_ASC,
  ALL_CIRCUIT_SORT_BY_CIR_ID_DES,
  ALL_CIRCUIT_SORT_BY_BRANCH_ASC,
  ALL_CIRCUIT_SORT_BY_BRANCH_DES,
  ALL_CIRCUIT_SORT_BY_STATUS,
} from '../../../actions/actionType/AllCircuit';
import {
  ALL_CIRCUIT_FILTER_BY_CIRCUITS_ID,
  ALL_CIRCUIT_FILTER_BY_STATUS,
} from '../../../actions/actionType/AllCircuit';
import SecondRow from './SecondRow';
const CircuitsNew = ({
  getAllCircuit,
  getAllSiteID,
  getAllBrachrID,
  getAllCircuitID,
  getAllCircuitDetails,
}) => {
  const cirCuitRef = useRef(null);

  const circuitRefDetails = useRef(null);
  const [loding1, setLodding1] = useState(false);
  const [loding, setLodding] = useState(false);
  const [loding3, setLodding3] = useState(false);
  const [diplayName, setDiplayName] = useState('');
  const {allCircuit} = useSelector(state => state.allCircuit);

  const [isOn, setIsSwitchOn] = React.useState(false);
  const [switchView, setSwitchView] = useState(true);
  const [acdata, setAcData] = useState(allCircuit);

  // const {loder} = useSelector(state => state.allCircuit);
  console.log(allCircuit, 'aa');
  // console.log(
  //   allBranchID.filter(item => item.S == '10').length,
  //   'allbraCircuit',
  // )
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  const [locType, setLocType] = useState(true);
  const [vendor, setVendor] = useState(true);
  const [cirType, setCirType] = useState(true);

  const [branchType, setBranchType] = useState(true);

  useEffect(() => {
    setLodding3(true);
    getAllCircuit(setLodding3);
  }, []);
  const randerItem = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // console.log('snap');
          const id = item.Circuit_ID;
          getAllCircuitDetails(id, setLodding, circuitRefDetails);
          setSwitchView(false);
          cirCuitRef.current.close();
          // setTimeout(() => {
          //   deviceRef.current.snapToIndex(1);
          // }, 1200);
        }}
        style={{
          ...styles.tableRow1,
          height: 55,
          backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
          marginVertical: 1,
        }}>
        <View
          style={{
            ...styles.tableRowColum2,
            width: '25%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Location_ID);

              tostalert(item.Location_ID);
            }}>
            <Text style={styles.boxText1}> {item?.Location_ID}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.tableRowColum2,
            width: '25%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Circuit_ID);

              tostalert(item.Circuit_ID);
            }}>
            <Text style={styles.boxText1}>{item?.Circuit_ID}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.tableRowColum2,
            width: '25%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Branch_ID);

              tostalert(item.Branch_ID);
            }}>
            <Text style={styles.boxText1}>
              {item?.Branch_ID ? item.Branch_ID : '--'}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.tableRowColum2,
            width: '25%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Vendor);

              tostalert(item.Vendor);
            }}>
            <Text style={styles.boxText1}>{item?.Vendor}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const searchFilterDatataByStatus = () => {
    setDiplayName('Status');
    dispatch({
      type: ALL_CIRCUIT_SORT_BY_STATUS,
    });
    cirCuitRef.current.snapToIndex(1);
  };
  const fiterCircuitsActive = () => {
    dispatch({
      type: ALL_CIRCUIT_FILTER_BY_STATUS,
      data: 'Active',
    });
  };
  const fiterCircuitsInActive = () => {
    dispatch({
      type: ALL_CIRCUIT_FILTER_BY_STATUS,
      data: 'Inactive',
    });
  };
  const activefilter = () => {
    const data = allCircuit.filter(item => item.Circuit_Status == 'Active');
    setAcData(data);
  };
  const inactivefilter = () => {
    const data = allCircuit.filter(item => item.Circuit_Status == 'Inactive');
    setAcData(data);
  };
  return (
    <>
      {loding3 ? (
        <View style={styles.loderView}>
          <OrderLoder />
        </View>
      ) : (
        <>
          {/* ========Second Row============= */}
          <SecondRow
            diplayName={diplayName}
            setDiplayName={setDiplayName}
            cirCuitRef={cirCuitRef}
            setSwitchView={setSwitchView}
          />

          {/* <View style={{...styles.idView}}>
            <View style={styles.idViewLeft}>
              <TouchableOpacity
                onPress={() => {
                  setSwitchView(false);
                  setDiplayName('Site ID');
                  getAllSiteID(setLodding1);
                  cirCuitRef.current.snapToIndex(1);
                }}
                style={{
                  ...styles.idButton,
                  flexDirection: 'row',
                  marginRight: 10,
                  borderColor: diplayName == 'Site ID' ? '#007aff' : 'black',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: diplayName == 'Site ID' ? '#007aff' : 'black',
                  }}>
                  Site ID
                </Text>
                <FontAwesome5
                  name="eject"
                  size={15}
                  style={{
                    transform: [{rotate: '180deg'}],
                    marginLeft: 6,
                    marginTop: 3,
                  }}
                  color={diplayName == 'Site ID' ? '#007aff' : 'black'}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setSwitchView(false);
                  setDiplayName('Branch ID');
                  cirCuitRef.current.snapToIndex(1);
                  getAllBrachrID(setLodding1);
                }}
                style={{
                  ...styles.idButton,
                  flexDirection: 'row',
                  marginRight: 10,
                  borderColor: diplayName == 'Branch ID' ? '#007aff' : 'black',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: diplayName == 'Branch ID' ? '#007aff' : 'black',
                  }}>
                  Branch ID
                </Text>
                <FontAwesome5
                  name="eject"
                  size={15}
                  style={{
                    transform: [{rotate: '180deg'}],
                    marginLeft: 5,
                    marginTop: 3,
                  }}
                  color={diplayName == 'Branch ID' ? '#007aff' : 'black'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSwitchView(false);
                  searchFilterDatataByStatus();
                }}
                style={{
                  ...styles.idButton,
                  marginRight: 10,
                  flexDirection: 'row',
                  borderColor: diplayName == 'Status' ? '#007aff' : 'black',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: diplayName == 'Status' ? '#007aff' : 'black',
                  }}>
                  Status
                </Text>
                <FontAwesome5
                  name="eject"
                  size={15}
                  style={{
                    transform: [{rotate: '180deg'}],
                    marginLeft: 5,
                    marginTop: 3,
                  }}
                  color={diplayName == 'Status' ? '#007aff' : 'black'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.idViewRight}></View>
          </View> */}
          {/* ========ThirdRow Component============= */}
          <ThirdRow
            diplayName={diplayName}
            setDiplayName={setDiplayName}
            cirCuitRef={cirCuitRef}
            setSwitchView={setSwitchView}
          />
          {/* ========ID VIEW============= */}
          {/* ========TABLE HEADER============= */}
          <View style={styles.tableHeader}>
            <TouchableOpacity
              onPress={() => {
                if (locType) {
                  setLocType(!locType);
                  dispatch({
                    type: ALL_CIRCUIT_SORT_BY_LOC_ID_ASC,
                  });
                } else {
                  setLocType(!locType);
                  dispatch({
                    type: ALL_CIRCUIT_SORT_BY_LOC_ID_DES,
                  });
                }
              }}
              style={{
                ...styles.tableRowColum1,
              }}>
              <Text style={{...styles.boxText, color: 'white'}}>Site ID</Text>
              <Text style={{marginTop: 1, marginRight: 3}}>
                <AntDesign
                  name={locType ? 'caretup' : 'caretdown'}
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
                    type: ALL_CIRCUIT_SORT_BY_VENDOR_ASC,
                  });
                } else {
                  setVendor(!vendor);
                  dispatch({
                    type: ALL_CIRCUIT_SORT_BY_VENDOR_DES,
                  });
                }
              }}
              style={{
                ...styles.tableRowColum1,
                borderLeftColor: 'white',
                borderLeftWidth: 2,
              }}>
              <Text style={{...styles.boxText, color: 'white'}}>
                Circuit ID
              </Text>
              <Text style={{marginTop: 1}}>
                <AntDesign
                  name={cirType ? 'caretup' : 'caretdown'}
                  size={16}
                  color="white"
                />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (branchType) {
                  setBranchType(!branchType);
                  dispatch({
                    type: ALL_CIRCUIT_SORT_BY_BRANCH_ASC,
                  });
                } else {
                  setBranchType(!branchType);
                  dispatch({
                    type: ALL_CIRCUIT_SORT_BY_BRANCH_DES,
                  });
                }
              }}
              style={{
                ...styles.tableRowColum1,
                borderLeftColor: 'white',
                borderLeftWidth: 2,
              }}>
              <Text style={{...styles.boxText, color: 'white'}}>Branch ID</Text>
              <Text style={{marginTop: 1}}>
                <AntDesign
                  name={branchType ? 'caretup' : 'caretdown'}
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
                    type: ALL_CIRCUIT_SORT_BY_VENDOR_ASC,
                  });
                } else {
                  setVendor(!vendor);
                  dispatch({
                    type: ALL_CIRCUIT_SORT_BY_VENDOR_DES,
                  });
                }
              }}
              style={{
                ...styles.tableRowColum1,
                borderLeftColor: 'white',
                borderLeftWidth: 2,
              }}>
              <Text style={{...styles.boxText, color: 'white'}}>Vendor</Text>
              <Text style={{marginTop: 1}}>
                <AntDesign
                  name={vendor ? 'caretup' : 'caretdown'}
                  size={16}
                  color="white"
                />
              </Text>
            </TouchableOpacity>
          </View>

          {loding3 ? (
            <View style={styles.loderView}>
              <OrderLoder />
            </View>
          ) : (
            <>
              {/* {acdata.length == 0 ? (
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
              ) : ( */}
              <>
                <View style={styles.table}>
                  <FlatList
                    contentContainerStyle={{paddingBottom: 230}}
                    showsVerticalScrollIndicator={false}
                    data={allCircuit}
                    keyExtractor={(item, i) => i.toString()}
                    renderItem={(item, i) => randerItem(item)}
                    refreshing={refresh}
                    onRefresh={() => {
                      setDiplayName('');

                      getAllCircuit(setLodding3);
                    }}
                    ListEmptyComponent={() => {
                      return (
                        <View
                          style={{
                            width: '100%',
                            height: 500,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              width: '100%',
                              height: 200,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Image
                              style={{
                                width: '100%',
                                height: 100,
                                resizeMode: 'contain',
                              }}
                              source={require('../../../images/empty.png')}
                            />
                            <Text style={{fontSize: 25}}>No Data Found</Text>
                          </View>
                        </View>
                      );
                    }}
                  />
                </View>
              </>
              {/* // )} */}
            </>
          )}

          {/* ========TABLE HEADER============= */}
          <CircuitBottomSheet
            diplayName={diplayName}
            loding1={loding1}
            cirCuitRef={cirCuitRef}
            setSwitchView={setSwitchView}
          />
          <BottomSheetViewCircuits
            loding={loding}
            setSwitchView={setSwitchView}
            circuitRefDetails={circuitRefDetails}
          />
          {/* ============TOOGLE=========== */}
          {switchView ? (
            <View
              style={{
                width: (width / 3) * 2.2,
                height: 55,
                position: 'absolute',
                bottom: 60,
                right: 0,
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 10,
                zIndex: 1,
              }}>
              <View
                style={{
                  width: '48%',
                  height: '100%',
                  backgroundColor: '#007aff',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {allCircuit.length} Circuit
                </Text>
              </View>
              <View
                style={{
                  width: '48%',
                  height: '100%',
                  backgroundColor: '#007aff',
                  borderRadius: 10,
                  flexDirection: 'row',
                  paddingHorizontal: 5,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {isOn ? 'Active' : 'InActive'}
                </Text>
                <ToggleSwitch
                  isOn={isOn}
                  onColor="#34c759"
                  offColor="#b3b8b4"
                  labelStyle={{color: 'black', fontWeight: '500'}}
                  size="large"
                  onToggle={isOn => {
                    setIsSwitchOn(isOn);
                    if (isOn) {
                      fiterCircuitsActive();
                      // activefilter();
                    } else {
                      fiterCircuitsInActive();
                      // inactivefilter();
                    }
                  }}
                />
              </View>
            </View>
          ) : null}
          {/* ============TOOGLE=========== */}
        </>
      )}
    </>
  );
};

export default connect(null, {
  getAllCircuit,
  getAllSiteID,
  getAllBrachrID,
  getAllCircuitID,
  getAllCircuitDetails,
})(CircuitsNew);

const styles = StyleSheet.create({
  ///========Lodder

  loderView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  ///========Lodder
  ///========id Button
  idButton: {
    width: 90,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,

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
  },
  idViewRight: {width: '20%', height: '100%'},
  ///========id View
  ///========TABELE HEADER
  tableHeader: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum1: {
    height: '100%',
    backgroundColor: '#007aff',
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  ///========TABELE HEADER
  ///========TABELE
  table: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
  },
  tableRow1: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: 'green',
  },
  //   tableRowColum1: {
  //     height: '100%',
  //     backgroundColor: '#007aff',
  //   },
  tableRowColum2: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import {StyleSheet, TouchableOpacity, FlatList, Text, View} from 'react-native';
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

import {
  ALL_CIRCUIT_SORT_BY_LOC_ID_ASC,
  ALL_CIRCUIT_SORT_BY_LOC_ID_DES,
  ALL_CIRCUIT_SORT_BY_VENDOR_ASC,
  ALL_CIRCUIT_SORT_BY_VENDOR_DES,
  ALL_CIRCUIT_SORT_BY_CIR_ID_ASC,
  ALL_CIRCUIT_SORT_BY_CIR_ID_DES,
  ALL_CIRCUIT_SORT_BY_BRANCH_ASC,
  ALL_CIRCUIT_SORT_BY_BRANCH_DES,
} from '../../../actions/actionType/AllCircuit';
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
  const dispatch = useDispatch();

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
  return (
    <>
      {/* ========ID VIEW============= */}
      <View style={{...styles.idView}}>
        <View style={styles.idViewLeft}>
          <TouchableOpacity
            onPress={() => {
              setDiplayName('Site ID');

              getAllSiteID(setLodding1);
              cirCuitRef.current.snapToIndex(1);
            }}
            style={{
              ...styles.idButton,
              borderColor: diplayName == 'Site ID' ? '#007aff' : 'black',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: diplayName == 'Site ID' ? '#007aff' : 'black',
              }}>
              Site ID
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDiplayName('Circuit ID');
              getAllCircuitID(setLodding1);
              cirCuitRef.current.snapToIndex(1);
            }}
            style={{
              ...styles.idButton,
              borderColor: diplayName == 'Circuit ID' ? '#007aff' : 'black',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: diplayName == 'Circuit ID' ? '#007aff' : 'black',
              }}>
              Circuit ID
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDiplayName('Branch ID');
              cirCuitRef.current.snapToIndex(1);
              getAllBrachrID(setLodding1);
            }}
            style={{
              ...styles.idButton,
              borderColor: diplayName == 'Branch ID' ? '#007aff' : 'black',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: diplayName == 'Branch ID' ? '#007aff' : 'black',
              }}>
              Branch ID
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.idViewRight}></View>
      </View>
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
          <Text style={{...styles.boxText, color: 'white'}}>Circuit ID</Text>
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
          <Text style={{...styles.boxText, color: 'white'}}>Ven</Text>
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
          {allCircuit.length == 0 ? (
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
                  contentContainerStyle={{paddingBottom: 230}}
                  showsVerticalScrollIndicator={false}
                  data={allCircuit}
                  keyExtractor={(item, i) => i.toString()}
                  renderItem={(item, i) => randerItem(item)}
                />
              </View>
            </>
          )}
        </>
      )}
      {/* ========TABLE HEADER============= */}
      <CircuitBottomSheet
        diplayName={diplayName}
        loding1={loding1}
        cirCuitRef={cirCuitRef}
      />
      <BottomSheetViewCircuits
        loding={loding}
        circuitRefDetails={circuitRefDetails}
      />
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

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {connect, useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  SORT_BY_CATEGORY_ASC,
  SORT_BY_CATEGORY_DES,
  SORT_BY_CIRCUIT_ID_ASC,
  SORT_BY_CIRCUIT_ID_DES,
  SORT_BY_SUBCAT_1_ASC,
  SORT_BY_SUBCAT_1_DES,
  SORT_BY_VENDOR_ASC,
  SORT_BY_VENDOR_DES,
} from '../../../actions/actionType/circuitInventory.type';

const Circuits = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [circuitType, setCircuitType] = useState(true);
  const [vendorType, setVendorType] = useState(true);
  const [categoryType, setCategoryType] = useState(true);
  const [subCat1Type, setsubCat1Type] = useState(true);
  const {cirCuitInventory} = useSelector(state => state.circuitInventory);
  // console.log(cirCuitInventory);
  // console.log(cirCuitInventory.length);
  return (
    <>
      {/* ==============container============== */}
      <View style={{flex: 1}}>
        {/* ==============Table Header============== */}
        {cirCuitInventory.length == 0 ? (
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
                  if (circuitType) {
                    setCircuitType(!circuitType);
                    dispatch({
                      type: SORT_BY_CIRCUIT_ID_ASC,
                    });
                  } else {
                    setCircuitType(!circuitType);
                    dispatch({
                      type: SORT_BY_CIRCUIT_ID_DES,
                    });
                  }
                }}
                style={{
                  ...styles.tableRowColum,
                  borderLeftColor: 'white',
                }}>
                <Text style={styles.boxText}>Circuit ID</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (vendorType) {
                    setVendorType(!vendorType);
                    dispatch({
                      type: SORT_BY_VENDOR_ASC,
                    });
                  } else {
                    setVendorType(!vendorType);
                    dispatch({
                      type: SORT_BY_VENDOR_DES,
                    });
                  }
                }}
                style={{
                  ...styles.tableRowColum,
                  borderLeftColor: 'white',
                  borderLeftWidth: 2,
                }}>
                <Text style={styles.boxText}>Vendor</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (categoryType) {
                    setCategoryType(!categoryType);
                    dispatch({
                      type: SORT_BY_CATEGORY_ASC,
                    });
                  } else {
                    setCategoryType(!categoryType);
                    dispatch({
                      type: SORT_BY_CATEGORY_DES,
                    });
                  }
                }}
                style={{
                  ...styles.tableRowColum,
                  borderLeftColor: 'white',
                  borderLeftWidth: 2,
                }}>
                <Text style={styles.boxText}>Category</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (subCat1Type) {
                    setsubCat1Type(!subCat1Type);
                    dispatch({
                      type: SORT_BY_SUBCAT_1_ASC,
                    });
                  } else {
                    setsubCat1Type(!subCat1Type);
                    dispatch({
                      type: SORT_BY_SUBCAT_1_DES,
                    });
                  }
                }}
                style={{
                  ...styles.tableRowColum,
                  borderLeftColor: 'white',
                  borderLeftWidth: 2,
                }}>
                <Text style={styles.boxText}>Sub Cat 1</Text>
              </TouchableOpacity>
            </View>
            {/* ==============Table Header============== */}
            {/* ==============Table Body============== */}
            <BottomSheetScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}>
              {cirCuitInventory.map((item, i) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('CircuitsDetails', {item})
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
                      <Text style={styles.boxText1}>{item.Circuit_ID}</Text>
                    </View>
                    <View
                      style={{
                        ...styles.tableRowColum1,
                        borderLeftColor: 'white',
                        borderLeftWidth: 2,
                      }}>
                      <Text style={styles.boxText1}>{item.Vendor}</Text>
                    </View>
                    <View
                      style={{
                        ...styles.tableRowColum1,
                        borderLeftColor: 'white',
                        borderLeftWidth: 2,
                      }}>
                      <Text style={styles.boxText1}>{item.Category}</Text>
                    </View>
                    <View
                      style={{
                        ...styles.tableRowColum1,
                        borderLeftColor: 'white',
                        borderLeftWidth: 2,
                      }}>
                      <Text style={styles.boxText1}>{item.SubCat_1}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <View style={{height: 80}}></View>
            </BottomSheetScrollView>
            {/* ==============Table Body============== */}
          </>
        )}
      </View>
      {/* ==============container============== */}
    </>
  );
};

export default connect(null, {})(Circuits);

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

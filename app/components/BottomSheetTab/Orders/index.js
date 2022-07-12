import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {connect, useSelector} from 'react-redux';

const Orders = ({navigation}) => {
  const {order} = useSelector(state => state.order);
  const {id} = useSelector(state => state.order);

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
                height: 60,
                backgroundColor: 'red',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  ...styles.tableRowColum,
                  borderLeftColor: 'white',
                }}>
                <Text style={styles.boxText}>Inventory ID</Text>
              </View>
              <View
                style={{
                  ...styles.tableRowColum,
                  borderLeftColor: 'white',
                  borderLeftWidth: 2,
                }}>
                <Text style={styles.boxText}>Vendor</Text>
              </View>
              <View
                style={{
                  ...styles.tableRowColum,
                  borderLeftColor: 'white',
                  borderLeftWidth: 2,
                }}>
                <Text style={styles.boxText}>Order Type</Text>
              </View>
              <View
                style={{
                  ...styles.tableRowColum,
                  borderLeftColor: 'white',
                  borderLeftWidth: 2,
                }}>
                <Text style={styles.boxText}>Status</Text>
              </View>
            </View>
            {/* ==============Table Header============== */}
            {/* ==============Table Body============== */}
            <BottomSheetScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}>
              {order.map((item, i) => {
                return (
                  <View
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
                      <Text style={styles.boxText1}>{item.Inventory_ID}</Text>
                    </View>
                    <View
                      style={{
                        ...styles.tableRowColum1,
                        borderLeftColor: 'white',
                        borderLeftWidth: 2,
                      }}>
                      <Text style={styles.boxText1}>{item.vendor}</Text>
                    </View>
                    <View
                      style={{
                        ...styles.tableRowColum1,
                        borderLeftColor: 'white',
                        borderLeftWidth: 2,
                      }}>
                      <Text style={styles.boxText1}>{item.Order_Type}</Text>
                    </View>
                    <View
                      style={{
                        ...styles.tableRowColum1,
                        borderLeftColor: 'white',
                        borderLeftWidth: 2,
                      }}>
                      <Text style={styles.boxText1}>{item.Status}</Text>
                    </View>
                  </View>
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

export default connect(null, {})(Orders);

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

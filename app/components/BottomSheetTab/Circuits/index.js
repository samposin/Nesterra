import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

import {connect, useSelector} from 'react-redux';

const Circuits = ({navigation}) => {
  const {cirCuitInventory} = useSelector(state => state.circuitInventory);

  return (
    <>
      {/* ==============container============== */}

      <View style={styles.container}>
        {/* ==============top============== */}

        {/* ==============top============== */}

        {/* ==============Table============== */}
        {cirCuitInventory.length == 0 ? (
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
          <View style={styles.table}>
            {/* ===================table Tow============== */}
            <View style={{...styles.tableRow}}>
              <View style={{...styles.tableRowColum}}>
                <Text style={{...styles.boxText, color: 'white'}}>
                  Circuits Id
                </Text>
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
                <Text style={styles.boxText}>Category</Text>
              </View>
              <View
                style={{
                  ...styles.tableRowColum,
                  borderLeftColor: 'white',
                  borderLeftWidth: 2,
                }}>
                <Text style={styles.boxText}>Sub Cat 1</Text>
              </View>
            </View>
            {/* ===================table Tow============== */}
            {/* ===================table Tow============== */}
            <ScrollView
              style={{width: '100%', height: 480}}
              showsVerticalScrollIndicator={false}>
              {cirCuitInventory.map((item, i) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('OrderDetails')}
                    key={i}
                    style={{
                      ...styles.tableRow1,
                      backgroundColor: i % 2 == 0 ? '#d1d0d0' : '#ffffff',
                      marginVertical: 1,
                    }}>
                    <View
                      style={{
                        ...styles.tableRowColum1,
                        borderLeftColor: 'white',
                        borderLeftWidth: 2,
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
                      <Text style={styles.boxText1}>{item.Category}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* ===================table Tow============== */}
          </View>
        )}
        {/* ==============Table============== */}

        {/* ==============Container============== */}
      </View>
    </>
  );
};

export default connect(null, {})(Circuits);

const styles = StyleSheet.create({
  container: {
    width: '100%',

    marginBottom: 50,
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
    width: '50%',
    height: '100%',
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  ///========Second table
});

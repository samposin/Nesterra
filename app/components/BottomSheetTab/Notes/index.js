import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const TableHeaderFirstColum = ({title, color}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum,
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{...styles.boxText1, color: color}}>{title}</Text>
    </View>
  );
};
const TableHeaderOtherColum = ({title, color}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum,
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: 'white',
        borderLeftWidth: 2,
      }}>
      <Text style={{...styles.boxText1, color: color}}>{title}</Text>
    </View>
  );
};

const Notes = ({index, item}) => {
  return (
    <>
      <View style={{flex: 1}}>
        <View style={styles.tableRow}>
          <TableHeaderFirstColum color="white" title="Notes" />
          <TableHeaderOtherColum color="white" title="Site ID" />
          <TableHeaderOtherColum color="white" title="Created" />
          <TableHeaderOtherColum color="white" title="UserName" />
        </View>
        <View
          style={{
            width: 60,
            height: 30,
            borderRadius: 10,
            position: 'absolute',
            right: 20,
            bottom: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#007aff',
          }}>
          <AntDesign name="plus" size={24} color="white" />
        </View>
      </View>
    </>
  );
};

export default Notes;

const styles = StyleSheet.create({
  tableRow: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum: {
    height: '100%',

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

  boxText1: {
    fontSize: 16,
    color: 'white',
  },
  tableRow1: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomColor: 'black',
    // borderBottomWidth: 0.7,
    // backgroundColor: 'green',
  },
});

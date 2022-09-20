import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import NoDataViewFlatList from './../../NoDataViewFlatList/index';
import {useSelector} from 'react-redux';
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

const Atms = ({index, item}) => {
  const data = [
    {id: 0, name: 'dsfsdaf'},
    {id: 0, name: 'dsfsdaf'},
    {id: 0, name: 'dsfsdaf'},
    {id: 0, name: 'dsfsdaf'},
    {id: 0, name: 'dsfsdaf'},
    {id: 0, name: 'dsfsdaf'},
  ];

  const {allAtms} = useSelector(state => state.allAtms);
  // console.log(allAtms);
  const randerItem = ({index, item}) => {
    return (
      <View
        style={{
          ...styles.tableRow1,
          height: 55,
          backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
          marginVertical: 1,
        }}>
        <TableHeaderFirstColum color="black" title={item.ATM_ID} />
        <TableHeaderOtherColum color="black" title={item.ATM_Status} />
        <TableHeaderOtherColum color="black" title={item.Model} />
        <TableHeaderOtherColum color="black" title={item.Vendor} />
      </View>
    );
  };
  return (
    <>
      <View style={styles.tableRow}>
        <TableHeaderFirstColum color="white" title="ATM ID" />
        <TableHeaderOtherColum color="white" title="Status" />
        <TableHeaderOtherColum color="white" title="Model" />
        <TableHeaderOtherColum color="white" title="Vendor" />
      </View>
      <BottomSheetFlatList
        showsVerticalScrollIndicator={false}
        data={allAtms}
        keyExtractor={(item, i) => i.toString()}
        renderItem={(item, i) => randerItem(item)}
        ListEmptyComponent={() => {
          return (
            <>
              <NoDataViewFlatList />
            </>
          );
        }}
      />
    </>
  );
};

export default Atms;

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

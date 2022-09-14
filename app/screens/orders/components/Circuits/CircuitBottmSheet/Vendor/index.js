import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  ORDER_SEARCH_OLLY_VENDOR,
  ORDER_FILTER_ONLY_VENDOR,
} from '../../../../../../actions/actionType/action.OrdersForTab';

const Vendor = ({cirCuitRef, setSwitchView}) => {
  const dispatch = useDispatch();
  const {onlyVendor} = useSelector(state => state.ordersForTab);

  const [search, setSearch] = useState('');
  const searchFilterFunction = text => {
    setSearch(text);
    dispatch({
      type: ORDER_SEARCH_OLLY_VENDOR,
      data: text,
    });
  };
  const filterData = text => {
    dispatch({
      type: ORDER_FILTER_ONLY_VENDOR,
      data: text,
    });
  };

  return (
    <>
      <View style={styles.searchView}>
        <View style={styles.searchViewLeft}>
          <TextInput
            // value={search}
            placeholder="Search Here"
            style={{
              paddingLeft: 10,
            }}
            onChangeText={text => searchFilterFunction(text)}
          />
        </View>
        <View style={styles.searchViewRight}>
          <EvilIcons name="search" size={24} color="black" />
        </View>
      </View>
      <BottomSheetFlatList
        keyboardShouldPersistTaps="handled"
        data={onlyVendor}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                filterData(item.vendor);
                Keyboard.dismiss();
                setSwitchView(true);
                cirCuitRef.current.close();
              }}
              style={{
                width: '100%',
                height: 30,
                marginVertical: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold'}}>{item.vendor}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.vendor}
      />
      <View style={{height: 60}}></View>
    </>
  );
};

export default Vendor;

const styles = StyleSheet.create({
  searchView: {
    width: '90%',
    height: 50,

    alignSelf: 'center',
    borderColor: 'black',
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
  },
  searchViewLeft: {
    width: '90%',
    height: '100%',
  },
  searchViewRight: {
    width: '10%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

    paddingRight: 5,
  },
});

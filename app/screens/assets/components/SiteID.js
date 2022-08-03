import {StyleSheet, View, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useDispatch} from 'react-redux';
import {GET_ORDERS_FOR_TAB_FILTER_STATUS} from '../../../actions/actionType/action.OrdersForTab';

const SiteID = ({}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const searchFilterFunction = text => {
    setSearch(text);
    dispatch({
      type: GET_ORDERS_FOR_TAB_FILTER_STATUS,
      data: text,
    });
  };
  useEffect(() => {}, []);

  return (
    <View style={styles.searchView}>
      <View style={styles.searchViewLeft}>
        <TextInput
          value={search}
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
  );
};

export default SiteID;

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

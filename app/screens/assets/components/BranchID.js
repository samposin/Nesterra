import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useDispatch, useSelector} from 'react-redux';
import {GET_ORDERS_FOR_TAB_FILTER_STATUS} from '../../../actions/actionType/action.OrdersForTab';

const BranchID = ({lodding}) => {
  const {allBranchID} = useSelector(stata => stata.allBranchID);
  // console.log(allBranchID.length, 'allBranchID');
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
    <>
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
      {lodding ? (
        <ActivityIndicator color="#007aff" size="large" />
      ) : (
        <BottomSheetFlatList
          data={allBranchID}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: '100%',
                  height: 30,
                  marginVertical: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold'}}>{item.id}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      )}
    </>
  );
};

export default BranchID;

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

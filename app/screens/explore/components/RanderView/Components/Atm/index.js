import {
  StyleSheet,
  Text,
  FlatList,
  Keyboard,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {dataMar} from '../../../../../../utils/MarkerData1';
import NoDataViewFlatList from './../../../../../../components/NoDataViewFlatList/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

const Atm = ({getAtmId, setRander, setFocusOn1}) => {
  // console.log(dataMar)
  // const {data} = useSelector(state => state.ExploreCircuitId);
  const {data} = useSelector(state => state.ExploreAtmId);
  // console.log(data, 'data');
  const randerItem = ({item}) => {
    return (
      <>
        {item.ATM_ID ? (
          <TouchableOpacity
            onPress={() => {
              getAtmId(item.ATM_ID);
              setRander(false);
              setFocusOn1(true);
              Keyboard.dismiss();
            }}
            style={{
              width: '100%',
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
            }}>
            <FontAwesome name="map-marker" size={24} color="black" />
            <Text style={{marginLeft: 15}}>{item.ATM_ID}</Text>
          </TouchableOpacity>
        ) : null}
      </>
    );
  };
  return (
    <View style={{flex: 1, paddingHorizontal: 30}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={data}
        keyExtractor={(item, i) => i.toString()}
        renderItem={(item, i) => randerItem(item)}
        ListEmptyComponent={() => {
          return <NoDataViewFlatList />;
        }}
      />
    </View>
  );
};

export default Atm;

const styles = StyleSheet.create({});
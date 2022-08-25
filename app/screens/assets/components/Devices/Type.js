import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  ALL_DEVICES_SEARCH_BY_DEVICE_TYPE,
  ALL_DEVICES_FILTER_BY_DEVICE_TYPE,
} from './../../../../actions/actionType/AllDevice/index';
const Type = ({loding1, deviceRef}) => {
  const {devieceType} = useSelector(state => state.deviceAllData);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  //0375021122
  //console.log(allCircuitID.filter(item => item.id == '006169232').length, 'll');
  const searchFilterFunction = text => {
    setSearch(text);
    dispatch({
      type: ALL_DEVICES_SEARCH_BY_DEVICE_TYPE,
      data: text,
    });
  };
  const fiterCircuitsData = text => {
    dispatch({
      type: ALL_DEVICES_FILTER_BY_DEVICE_TYPE,
      data: text,
    });
  };

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
      {/* {loding1 ? (
          <View
            style={{
              width: '100%',
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator color="#007aff" size="large" />
          </View>
        ) : ( */}
      <>
        <BottomSheetFlatList
          keyboardShouldPersistTaps="handled"
          data={devieceType}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  fiterCircuitsData(item.Device_Type);
                  Keyboard.dismiss();
                  deviceRef.current.close();
                }}
                style={{
                  width: '100%',
                  height: 30,
                  marginVertical: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold'}}>{item.Device_Type}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => `${item.key}${index}`}
        />
      </>
      {/* )} */}
    </>
  );
};

export default Type;

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
    margin: 3,
  },
});

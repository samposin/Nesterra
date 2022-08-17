import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {connect, useDispatch, useSelector} from 'react-redux';
import {GET_ORDERS_FOR_TAB_FILTER_TYPE} from '../../../actions/actionType/action.OrdersForTab';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {ORDER_FILTER_BY_ORDER_TYPE} from '../../../actions/actionType/action.OrdersForTab';
import {GetAllCarrierNumber} from '../../../actions/CarrierNumber';

const {height} = Dimensions.get('screen');

const SerachOrderType = ({bottomSheetRef, GetAllCarrierNumber}) => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [loding, setLoding] = useState('');

  const data = [{id: 'Add'}, {id: 'Change'}, {id: 'Disco'}, {id: 'Move'}];
  useEffect(() => {
    //getOrdersType();
    GetAllCarrierNumber(setLoding);
  }, []);
  const filderData = name => {
    dispatch({
      type: ORDER_FILTER_BY_ORDER_TYPE,
      data: name,
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
            // onChangeText={text => searchFilterFunction(text)}
          />
        </View>
        <View style={styles.searchViewRight}>
          <EvilIcons name="search" size={24} color="black" />
        </View>
        {/* {isLoding ? (
        <ActivityIndicator color="#007aff" size="large" />
      ) : ( */}

        {/* )} */}
      </View>
      <View style={{height: height - 180}}>
        <BottomSheetFlatList
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  filderData(item.id);
                  bottomSheetRef.current.close();
                }}
                style={{
                  width: '100%',
                  height: 30,

                  marginVertical: 1,

                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold'}}>{item.id} </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default connect(null, {GetAllCarrierNumber})(SerachOrderType);

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

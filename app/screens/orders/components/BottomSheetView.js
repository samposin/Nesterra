import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useMemo, useEffect, useState, useRef} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useDispatch} from 'react-redux';
import {FILTER_CARRIER_NUMBERR} from '../../../actions/actionType/carrier.Number.type';

const BottomSheetView = ({bottomSheetRef, diplayName}) => {
  const snapPoints = useMemo(() => ['20%', '50%', '95%'], []);
  const {carrierNumber} = useSelector(state => state.carrierNumber);
  const {isLoding} = useSelector(state => state.carrierNumber);

  const [search, setSearch] = useState('');
  const myRef = useRef(null);
  const dispatch = useDispatch();
  const searchFilterFunction = text => {
    setSearch(text);
    dispatch({
      type: FILTER_CARRIER_NUMBERR,
      data: text,
    });
  };
  useEffect(() => {}, []);

  return (
    <>
      <BottomSheet
        handleIndicatorStyle={{
          backgroundColor: '#757575',
          height: 2.5,
          opacity: 0.5,
        }}
        enabledInnerScrolling={true}
        enabledContentGestureInteraction={false}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount
        animatedPosition={true}>
        <View style={styles.top}>
          <View style={styles.textView}>
            <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
                Cancel
              </Text>
            </TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{diplayName}</Text>
            <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
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
        </View>
        {isLoding ? (
          <ActivityIndicator color="#007aff" size="large" />
        ) : (
          <BottomSheetFlatList
            data={carrierNumber}
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
      </BottomSheet>
    </>
  );
};

export default BottomSheetView;

const styles = StyleSheet.create({
  top: {width: '100%', height: 130},
  textView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
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

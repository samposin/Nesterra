import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React, {useMemo} from 'react';

import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import Profile from '../profile';
import {useSelector} from 'react-redux';
import BottomSheetTab from '../../components/BottomSheetTab';
import {useState} from 'react';

const BottomSheetView = ({bottomSheetRef, catShow}) => {
  const snapPoints = useMemo(() => ['20%', '50%', '95%'], []);
  const location_data = useSelector(state => state.location_details.data);

  const data = [
    {id: 0, name: 'INFO', isActive: true},
    {id: 1, name: 'PICS', isActive: false},
    {id: 2, name: 'HOURS', isActive: false},
    {id: 3, name: 'CIRCUITS', isActive: false},
    {id: 4, name: 'DEVICES', isActive: false},
    {id: 5, name: 'ORDERS', isActive: false},
  ];
  const [data1, setData1] = useState(data);
  const changeColor = id => {
    let listData = data1.map(item => {
      let itm = {...item, isActive: false};
      return itm;
    });

    listData[id].isActive = true;
    setData1(listData);
  };
  const renderItem = ({item, i}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          changeColor(item.id);
        }}
        style={{
          width: 100,
          height: 30,
          margin: 2,
          backgroundColor: item.isActive ? 'green' : 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: item.isActive ? 'white' : 'black'}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
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
        // onChange={handleSheetChanges}
        animatedPosition={true}
        // snapToPosition={dfs => {
        //   console.log(dfs, 'dfs');
        // }}
        // onAnimate={(fromIndex, toIndex) => {
        //   console.log(fromIndex, toIndex);
        // }}
      >
        <View style={{flex: 1, zIndex: 10}}>
          {/* {location_data && {}} */}

          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: 'black',
              marginLeft: 10,
            }}>
            {location_data?.Address}
            {location_data?.Location_ID}
          </Text>

          <Text style={{fontSize: 16, color: 'black', marginLeft: 10}}>
            Sity Type:{' '}
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                marginLeft: 10,
                marginBottom: 10,
              }}>
              {location_data?.SubLocationType}
            </Text>
          </Text>
          <View
            style={{
              width: '100%',
              height: 30,

              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16, marginLeft: 10, color: 'black'}}>
              Sity Status:{' '}
            </Text>

            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: location_data?.LocationStatusDesc
                  ? '#56ff00'
                  : 'red',
                borderRadius: 10,
              }}></View>
          </View>

          {/* <BottomSheetScrollView
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={
              styles.contentContainer
            }></BottomSheetScrollView> */}
          <BottomSheetTab />
          {/* <BottomSheetFlatList
            horizontal
            data={data1}
            keyExtractor={i => i}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
          /> */}
        </View>
      </BottomSheet>
    </>
  );
};

export default BottomSheetView;

const styles = StyleSheet.create({
  textStyles: {
    // marginLeft: 5,
  },
  contentContainer: {
    paddingTop: 10,
  },
  leftLower: {
    width: '50%',
    height: '100%',
  },
  item: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  leftItem: {width: '30%', height: '100%', justifyContent: 'center'},
  rightItem: {
    width: '70%',
    height: '100%',
    borderLeftColor: '#77ccc5',
    borderLeftWidth: 1,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
});

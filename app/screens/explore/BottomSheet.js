import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useMemo, useRef, useEffect} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';

import {useState} from 'react';
import Pics from '../../components/BottomSheetTab/Pics';
import Hours from '../../components/BottomSheetTab/Hours';
import Info from '../../components/BottomSheetTab/Info';
import Circuits from '../../components/BottomSheetTab/Circuits';
import Devices from '../../components/BottomSheetTab/Devices';
import Orders from '../../components/BottomSheetTab/Orders';

const BottomSheetView = ({bottomSheetRef, catShow}) => {
  const snapPoints = useMemo(() => ['20%', '50%', '95%'], []);
  const location_data = useSelector(state => state.location_details.data);
  const myRef = useRef(null);

  const data = [
    {id: 0, name: 'INFO', isActive: true},
    {id: 1, name: 'PICS', isActive: false},
    {id: 2, name: 'HOURS', isActive: false},
    {id: 3, name: 'CIRCUITS', isActive: false},
    {id: 4, name: 'DEVICES', isActive: false},
    {id: 5, name: 'ORDERS', isActive: false},
  ];
  const [item, setItem] = useState(0);
  const [data1, setData1] = useState(data);
  const changeColor = id => {
    let listData = data1.map(item => {
      let itm = {...item, isActive: false};
      return itm;
    });

    listData[id].isActive = true;
    setData1(listData);
  };

  const centerTab = i => {
    myRef.current.scrollToIndex({animated: true, index: i, viewPosition: 0.5});
  };
  const ranDerView = () => {
    switch (true) {
      case item == 0:
        return <Info />;
        break;
      case item == 1:
        return <Pics />;
        break;
      case item == 2:
        return <Hours />;
        break;
      case item == 3:
        return <Circuits />;
        break;
      case item == 4:
        return <Devices />;
        break;
      case item == 5:
        return <Orders />;
        break;
    }
  };
  useEffect(() => {
    // ranDerView(0);
  }, []);

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
        <View
          style={{
            height: 170,
            width: '100%',
            zIndex: 10,
          }}>
          <View
            style={{
              width: '100%',
              height: 40,

              alignItems: 'flex-end',
              paddingRight: 30,
            }}>
            <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#007aff',
                }}>
                <Text>
                  <Entypo name="cross" size={20} color="white" />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: 'black',
              marginLeft: 10,
            }}>
            {location_data?.Address}
            <Text>{'  '} </Text>
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

          <BottomSheetFlatList
            horizontal
            ref={myRef}
            data={data1}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, i}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    changeColor(item.id);
                    setItem(item.id);
                    centerTab(item.id);
                  }}
                  style={{
                    width: 100,
                    backgroundColor: 'red',
                    height: 40,
                    margin: 2,
                    borderRadius: 12,
                    borderWidth: item.isActive ? 0 : 1,
                    backgroundColor: item.isActive ? '#007aff' : '#f2f2f7',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: item.isActive ? 'white' : 'black'}}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
        {ranDerView()}
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
    backgroundColor: 'yellow',
    // paddingTop: 10,
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

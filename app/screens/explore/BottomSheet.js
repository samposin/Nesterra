import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';

import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import Profile from '../profile';
import {useSelector} from 'react-redux';
import BottomSheetTab from '../../components/BottomSheetTab';

const BottomSheetView = ({bottomSheetRef, catShow}) => {
  const snapPoints = useMemo(() => ['20%', '50%', '95%'], []);
  const location_data = useSelector(state => state.location_details.data);

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
        <View style={{flex: 1, paddingHorizontal: 5, zIndex: 10}}>
          {/* {location_data && {}} */}

          <Text style={{fontSize: 18, fontWeight: '700', marginLeft: 10}}>
            {location_data?.Address}
            {location_data?.Location_ID}
          </Text>
          <Text style={{fontSize: 13, marginLeft: 10}}>
            {location_data?.SubLocationType}:
          </Text>
          <Text style={{fontSize: 16, marginLeft: 10}}>
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
          <View style={{width: '100%', height: 10}}></View>

          {/* <BottomSheetScrollView
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={
              styles.contentContainer
            }></BottomSheetScrollView> */}
          <BottomSheetTab />
        </View>
      </BottomSheet>
    </>
  );
};

export default BottomSheetView;

const styles = StyleSheet.create({
  textStyles: {
    marginLeft: 5,
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
});

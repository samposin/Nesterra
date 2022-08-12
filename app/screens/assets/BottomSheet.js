import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';

import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import Profile from '../profile';
import {useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
const BottomSheetView = ({bottomSheetRefDetails}) => {
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
        ref={bottomSheetRefDetails}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount
        animatedPosition={true}>
        <View style={{flex: 1, paddingHorizontal: 15}}>
          <BottomSheetScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}>
            {/* =====================Branch Id ====================== */}

            {/* =====================  MileStone========= */}
            <View style={{height: 100}}></View>
          </BottomSheetScrollView>
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

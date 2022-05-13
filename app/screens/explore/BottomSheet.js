import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';

import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import Profile from '../profile';
import {useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
const BottomSheetView = ({bottomSheetRef}) => {
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
        <View style={{flex: 1, paddingHorizontal: 15}}>
          {/* {location_data && {}} */}

          <Text style={{fontSize: 18, fontWeight: '700'}}>
            {location_data?.Address}
            {location_data?.Location_ID}
          </Text>
          <Text style={{fontSize: 13}}>{location_data?.SubLocationType}:</Text>
          <Text style={{fontSize: 16}}>
            Sity Type:{' '}
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              {location_data?.SubLocationType}
            </Text>
          </Text>

          <BottomSheetScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}>
            {/* =====================Branch Id ====================== */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Branch Id</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================Branch Id ====================== */}
            {/* =====================Facility Type ====================== */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Facility Type</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================Facility Type ====================== */}
            {/* =====================Open Date ====================== */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Open Date</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================Open Date  ====================== */}
            {/* =====================Annual Rent ====================== */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Annual Rent</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================Annual Rent ====================== */}
            {/* =====================Headcount ====================== */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Headcount</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================Headcount ====================== */}
            {/* =====================Square Feet ====================== */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Square Feet</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================Square Feet ====================== */}
            {/* =====================ATM ID ====================== */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>ATM ID</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================ATM ID ====================== */}
            {/* =====================Phone ====================== */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Phone #</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================Phone ====================== */}
            {/* =====================Backdoor Ph====================== */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Backdoor Ph#</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================Backdoor Ph====================== */}
            {/* =====================Emergency====================== */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Emergency Phone Number</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================Emergency====================== */}
            {/* =====================Branch Mgr========= */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Branch Mgr</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================Branch Mgr========= */}

            {/* =====================Branch Mgr Ph#========= */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Branch Mgr Ph#</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================Branch Mgr Ph#========= */}
            {/* =====================Region Mgr========= */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Region Mgr</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================Region Mgr========= */}
            {/* =====================Region Mgr Ph#========= */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Region Mgr Ph#</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================Region Mgr Ph#========= */}

            {/* =====================Senior Facility Manager========= */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Senior Facility Manager</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================Senior Facility Manager========= */}
            {/* ===================== Facility Manager========= */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Facility Manager</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* ===================== Facility Manager========= */}
            {/* ===================== Facility Manager========= */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Facility Manager</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* ===================== Facility Manager========= */}
            {/* ===================== Facility Manager========= */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Facility Manager Phone</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* ===================== Facility Manager Ph#========= */}
            {/* =====================  Location Code========= */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>Location Code</Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================  Location Code========= */}
            {/* =====================  Mile ========= */}
            <View style={styles.item}>
              <View style={styles.leftItem}>
                <Text>MileStone </Text>
              </View>
              <View style={styles.rightItem}>
                <Text></Text>
              </View>
            </View>
            {/* =====================  MileStone========= */}
            <View style={{height: 100}}></View>
          </BottomSheetScrollView>
        </View>
        {/* <Profile /> */}
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

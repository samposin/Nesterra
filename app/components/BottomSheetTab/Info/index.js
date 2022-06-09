import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

const Info = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
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
        <View style={{height: 60}}></View>
      </BottomSheetScrollView>
    </View>
  );
};

export default Info;

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

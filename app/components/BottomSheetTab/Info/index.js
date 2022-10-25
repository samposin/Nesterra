import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';

const Info = () => {
  const {locationInfo} = useSelector(state => state.LocationInfo);
  // console.log(locationInfo, 'locationInfo');
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        {/* =====================Branch Id ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Location ID</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{locationInfo[0]?.Location_ID}</Text>
          </View>
        </View>
        {locationInfo &&
          locationInfo.map((item, i) => {
            if (i <= 28) {
              return (
                <View key={i} style={styles.item}>
                  <View style={styles.leftItem}>
                    <Text>{item.Property}</Text>
                  </View>
                  <View style={styles.rightItem}>
                    <Text>{item.Val}</Text>
                  </View>
                </View>
              );
            }
          })}

        {/* =====================Branch Id ====================== */}

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
    justifyContent: 'center',
    paddingLeft: 10,
  },
});

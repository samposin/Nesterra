import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useEffect} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import Profile from '../profile';
import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomSheetView = ({bottomSheetRef}) => {
  const snapPoints = useMemo(() => ['20%', '95%'], []);
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
        // onChange={handleSheetChanges}
      >
        <View style={{width: '100%', height: 110}}>
          {location_data ? (
            <>
              <View style={{...styles.bottomUpperTop}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 35,
                  }}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="#1b5a90"
                    style={{marginTop: 5}}
                  />
                  <Text style={{color: '#1b5a90'}}>
                    {location_data?.FullAddress}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="black"
                  />
                  <Text style={{color: '#1b5a90'}}>
                    {location_data.Address}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  ...styles.bottomUpperLower,
                  marginTop: 3,
                  paddingHorizontal: 5,
                }}>
                <View style={styles.buttonUpperLowerTop}>
                  {/* <Text style={styles.textStyles}>
                Site Status:
                <Text style={{color: '#8cff84', fontWeight: 'bold'}}>
                  {' '}
                  Active{' '}
                </Text>{' '}
              </Text> */}
                  <Text style={{...styles.textStyles, margin: 3}}>
                    Site Type:
                    <Text> {location_data.Concat_LocationTypes} </Text>{' '}
                  </Text>
                  {/* <Text style={styles.textStyles}>
                Asset Cost(Y):<Text> :$26808 </Text>{' '}
              </Text> */}
                </View>
                {/* <View style={{width: '50%', height: '100%', paddingLeft: 20}}>
              <Text style={styles.textStyles}>Property Cost (Y):$0:00</Text>
              <Text style={styles.textStyles}>Circuits:9 </Text>
              <Text style={styles.textStyles}>Devices:5 </Text>
            </View> */}
              </View>
            </>
          ) : null}
        </View>
        <Profile />
      </BottomSheet>
    </>
  );
};

export default BottomSheetView;

const styles = StyleSheet.create({});

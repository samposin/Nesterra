import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import Name from './Name';
import Vendor from './Vendor';
import Type from './Type';

const DevicesBottomSheet = ({
  deviceRef,
  setDeviveView,
  diplayName,
  loding1,
}) => {
  const snapPoints = useMemo(() => ['20%', '50%'], []);
  // console.log(diplayName);
  const selectedComponent = () => {
    switch (true) {
      case diplayName === 'Name':
        return (
          <Name
            setDeviveView={setDeviveView}
            deviceRef={deviceRef}
            loding1={loding1}
          />
        );

      case diplayName === 'Vendor':
        return (
          <Vendor
            deviceRef={deviceRef}
            setDeviveView={setDeviveView}
            loding1={loding1}
          />
        );

      case diplayName === 'Type':
        return (
          <Type
            setDeviveView={setDeviveView}
            deviceRef={deviceRef}
            loding1={loding1}
          />
        );
    }
  };
  return (
    <BottomSheet
      handleIndicatorStyle={{
        backgroundColor: '#757575',
        height: 2.5,
        opacity: 0.5,
      }}
      ref={deviceRef}
      enabledInnerScrolling={true}
      enabledContentGestureInteraction={false}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      animateOnMount
      animatedPosition={true}>
      <View style={styles.top}>
        <View style={styles.textView}>
          <TouchableOpacity
            onPress={() => {
              setDeviveView(true);
              deviceRef.current.close();
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
              Cancel
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>{diplayName}</Text>
          <TouchableOpacity
            onPress={() => {
              setDeviveView(true);

              deviceRef.current.close();
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {selectedComponent()}
    </BottomSheet>
  );
};

export default DevicesBottomSheet;

const styles = StyleSheet.create({
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
    backgroundColor: 'yellow',
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

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
// import Status from '../Status';

//================

const BottoSheetView = ({atmRef, diplayName}) => {
  const snapPoints = useMemo(() => ['20%', '50%'], []);
  // console.log(diplayName);
  //   const selectedComponent = () => {
  //     switch (true) {
  //       case diplayName === 'Order Type':
  //         return (
  //           <OrderType
  //             setSwitchView={setSwitchView}
  //             cirCuitRef={cirCuitRef}
  //             loding1={loding1}
  //             bootSheetLodder={bootSheetLodder}
  //           />
  //         );
  //       case diplayName === 'SmartSite#':
  //         return (
  //           <SmartSite
  //             setSwitchView={setSwitchView}
  //             cirCuitRef={cirCuitRef}
  //             loding1={loding1}
  //             bootSheetLodder={bootSheetLodder}
  //           />
  //         );
  //       case diplayName === 'Tangoe#':
  //         return (
  //           <Tangoe
  //             setSwitchView={setSwitchView}
  //             cirCuitRef={cirCuitRef}
  //             loding1={loding1}
  //             bootSheetLodder={bootSheetLodder}
  //           />
  //         );
  //       case diplayName === 'Carrier#':
  //         return (
  //           <Carrier
  //             setSwitchView={setSwitchView}
  //             cirCuitRef={cirCuitRef}
  //             loding1={loding1}
  //             bootSheetLodder={bootSheetLodder}
  //           />
  //         );
  //       case diplayName === 'Item#':
  //         return (
  //           <Item
  //             setSwitchView={setSwitchView}
  //             cirCuitRef={cirCuitRef}
  //             loding1={loding1}
  //           />
  //         );
  //       case diplayName === 'Site ID':
  //         return (
  //           <SiteID
  //             setSwitchView={setSwitchView}
  //             cirCuitRef={cirCuitRef}
  //             loding1={loding1}
  //           />
  //         );

  //       case diplayName === 'Status':
  //         return (
  //           <Status
  //             setSwitchView={setSwitchView}
  //             cirCuitRef={cirCuitRef}
  //             loding1={loding1}
  //           />
  //         );

  //       case diplayName === 'Branch ID':
  //         return (
  //           <BranchID
  //             setSwitchView={setSwitchView}
  //             cirCuitRef={cirCuitRef}
  //             loding1={loding1}
  //           />
  //         );
  //       case diplayName === 'Project':
  //         return <Project cirCuitRef={cirCuitRef} loding1={loding1} />;
  //       case diplayName === 'Sub Type':
  //         return (
  //           <SubType
  //             setSwitchView={setSwitchView}
  //             cirCuitRef={cirCuitRef}
  //             loding1={loding1}
  //           />
  //         );
  //       case diplayName === 'Vendor':
  //         return (
  //           <Vendor
  //             setSwitchView={setSwitchView}
  //             cirCuitRef={cirCuitRef}
  //             loding1={loding1}
  //           />
  //         );
  //       case diplayName === 'Circuit ID':
  //         return (
  //           <CircuitId
  //             setSwitchView={setSwitchView}
  //             cirCuitRef={cirCuitRef}
  //             loding1={loding1}
  //           />
  //         );
  //     }
  //   };
  return (
    <BottomSheet
      handleIndicatorStyle={{
        backgroundColor: '#757575',
        height: 2.5,
        opacity: 0.5,
      }}
      ref={atmRef}
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
              //   setSwitchView(true);
              atmRef.current.close();
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
              Cancel
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>{diplayName}</Text>
          <TouchableOpacity
            onPress={() => {
              atmRef.current.close();
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007aff'}}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* {selectedComponent()} */}
    </BottomSheet>
  );
};

export default BottoSheetView;

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

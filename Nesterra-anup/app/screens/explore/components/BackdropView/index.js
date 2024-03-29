import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

const BackdropView = ({bottomSheetRef}) => {
  // ref

  // variables
  const snapPoints = useMemo(() => ['1%', '20%', '30%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={2}
      />
    ),
    [],
  );
  return (
    <BottomSheet
      style={{backgroundColor: 'green'}}
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      onChange={handleSheetChanges}>
      <View style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
});

export default BackdropView;

// import React, {useCallback, useMemo, useRef} from 'react';
// import {View, Text, StyleSheet, Button} from 'react-native';
// import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

// const BackdropView = ({bottomSheetRef}) => {
//   // ref
//   const bottomSheetModalRef = useRef < BottomSheetModal > null;

//   // variables
//   const snapPoints = useMemo(() => ['25%', '90%'], []);

//   // callbacks
//   const handlePresentModalPress = useCallback(() => {
//     bottomRef.current?.snapToIndex(1);
//   }, []);
//   const handleSheetChanges = useCallback(index => {
//     console.log('handleSheetChanges', index);
//   }, []);

//   // renders
//   return (
//     <BottomSheetModalProvider>
//       <View style={styles.container}>
//         <Button
//           onPress={handlePresentModalPress}
//           title="Present Modal"
//           color="black"
//         />
//         <BottomSheetModal
//           ref={bottomSheetRef}
//           index={-1}
//           snapPoints={snapPoints}
//           onChange={handleSheetChanges}>
//           <View style={styles.contentContainer}>
//             <Text>Awesome 🎉</Text>
//           </View>
//         </BottomSheetModal>
//       </View>
//     </BottomSheetModalProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     justifyContent: 'center',
//     backgroundColor: 'grey',
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default BackdropView;

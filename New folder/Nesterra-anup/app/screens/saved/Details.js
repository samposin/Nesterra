import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
// import React, {useMemo} from 'react';
// import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
// import moment from 'moment/moment';
// import OrderLoder from '../../components/lodder/OrderLoder';
// import Atms from './Components/Atms';
// import Devices from './Components/Devices';
// import Sites from './Components/Sites';
// import Orders from './Components/Orders';

// import Circuits from './Components/Circuits/index';

// const Details = ({detailsRef, displayView}) => {
//   // console.log(displayView);
//   const snapPoints = useMemo(() => ['20%', '47%', '95%'], []);
//   const randerView = () => {
//     switch (true) {
//       case displayView === 'Atms':
//         return <Atms />;
//       case displayView === 'Devices':
//         return <Devices />;
//       case displayView === 'Circuits':
//         return <Circuits />;
//       case displayView === 'Sites':
//         return <Sites />;
//       case displayView === 'Orders':
//         return <Orders />;
//     }
//   };
//   return (
//     <BottomSheet
//       handleIndicatorStyle={{
//         backgroundColor: '#757575',
//         height: 0,
//         opacity: 0.5,
//       }}
//       handleComponent={() => (
//         <View style={styles.closeLineContainer}>
//           <View style={styles.closeLine}>
//             <SimpleLineIcons name="arrow-up" size={20} color="black" />
//           </View>
//         </View>
//       )}
//       enabledInnerScrolling={true}
//       enabledContentGestureInteraction={false}
//       ref={detailsRef}
//       index={1}
//       snapPoints={snapPoints}
//       enablePanDownToClose={true}
//       animateOnMount
//       animatedPosition={true}>
//       <View
//         style={{
//           width: '100%',
//           height: 30,
//           alignItems: 'flex-end',
//           paddingRight: 25,
//         }}>
//         <TouchableOpacity
//           onPress={() => {
//             detailsRef.current.close();
//           }}>
//           <View
//             style={{
//               width: 24,
//               height: 24,
//               borderRadius: 12,
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: '#007aff',
//             }}>
//             <Text>
//               <Entypo name="cross" size={20} color="white" />
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>

//       {randerView()}
//     </BottomSheet>
//   );
// };

// export default Details;

// const styles = StyleSheet.create({
//   closeLineContainer: {
//     alignSelf: 'center',
//   },
//   closeLine: {
//     width: 30,
//     height: 30,
//     borderRadius: 3,
//     marginTop: 9,

//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//   },
// });

import React, {useCallback, useMemo, useRef} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const Details = ({detailsRef}) => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheet
      handleIndicatorStyle={{
        backgroundColor: '#757575',
        height: 0,
        opacity: 0.5,
      }}
      handleComponent={() => (
        <View style={styles.closeLineContainer}>
          <View style={styles.closeLine}>
            <SimpleLineIcons name="arrow-up" size={20} color="black" />
          </View>
        </View>
      )}
      ref={detailsRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enabledInnerScrolling={true}
      enabledContentGestureInteraction={false}
      enablePanDownToClose={true}
      animateOnMount
      animatedPosition={true}>
      <View
        style={{
          width: '100%',
          height: 30,
          alignItems: 'flex-end',
          paddingRight: 25,
          // backgroundColor: 'red',
        }}>
        <TouchableOpacity
          onPress={() => {
            detailsRef.current.close();
          }}>
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
    flex: 1,
    alignItems: 'center',
  },
});

export default Details;

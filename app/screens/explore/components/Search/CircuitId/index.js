// import {StyleSheet, TextInput, Text, View} from 'react-native';
// import React, {useState} from 'react';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {useDispatch} from 'react-redux';
// // import {SEARCH_BY_SITE_ID} from '../../../../actions/action.coordinate.type';
// import CircuitIcon from './CircuitIcon';

// const CircuitId = ({setModalVisible}) => {
//   const dispatch = useDispatch();
//   const [search, setsearch] = useState('');
//   const [iconShow, setIconShow] = useState(false);
//   // console.log(iconShow);
//   const circuitSearch = text => {
//     setsearch(text);
//     // dispatch({
//     //   type: SEARCH_BY_SITE_ID,
//     //   data: text,
//     // });
//   };
//   return (
//     <>
//       <View
//         style={{
//           width: '15%',
//           height: '100%',

//           justifyContent: 'center',
//           paddingRight: 2,
//           alignItems: 'flex-end',
//         }}>
//         <FontAwesome name="search" size={20} color="#898989" />
//       </View>
//       <View
//         style={{
//           width: '70%',
//           height: '100%',
//         }}>
//         <TextInput
//           value={search}
//           style={{color: 'black'}}
//           placeholder="Search Circuit ID"
//           placeholderTextColor="#5c5b5b"
//           onChangeText={text => circuitSearch(text)}
//         />
//       </View>
//       <CircuitIcon
//         setModalVisible={setModalVisible}
//         circuitSearch={circuitSearch}
//         iconShow={iconShow}
//         setIconShow={setIconShow}
//       />
//     </>
//   );
// };

// export default CircuitId;

// const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InPutView from '../InPutView';
import IconView from '../IconView';

const CircuitID = () => {
  const searchId = data => {
    console.log('first', data);
  };
  return (
    <>
      <InPutView placeHolder="Search Circuit  Id" onSearch={searchId} />
      <IconView />
    </>
  );
};

export default CircuitID;

const styles = StyleSheet.create({});

import {Box} from 'native-base';
import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
const {width} = Dimensions.get('screen');
export const tostalert = (msg, color, toast) => {
  // // const toast = useToast();
  Snackbar.show({
    text: `Copied: ${msg}`,
    textColor: 'white',
    backgroundColor: '#007aff',
    marginBottom: 100,
  });
  // return toast.show({
  //   duration: 1500,
  //   placement: 'bottom',

  //   render: () => {
  //     return (
  //       <view>   //         style={{
  //           height: 50,
  //           padding: 10,
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           borderRadius: 10,
  //           backgroundColor: color,
  //           width: width,
  //           backgroundColor: '#ded9df',
  //         }}>
  //         <Text style={{color: 'white', fontSize: 16}}>{msg}</Text>
  //       </view>
  //     );
  //   },
  // });
};
export const copyText = text => {
  Clipboard.setString(text);
};

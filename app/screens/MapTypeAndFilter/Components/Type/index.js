import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {Heading, VStack} from 'native-base';
const {height, width} = Dimensions.get('screen');
const Type = () => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: height,

          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <Text>Type</Text>
      </View>
    </>
  );
};

export default Type;

const styles = StyleSheet.create({
  rightText: {
    backgroundColor: '#1b5a90',
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 3,
  },
  buttonUpper: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  mainContainer: {
    height: height - 195,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },

  mainContainerRight: {height: '100%', width: '100%'},
});

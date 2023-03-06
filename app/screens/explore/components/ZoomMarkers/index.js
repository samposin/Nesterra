import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ZoomMarkers = () => {
  return (
    <View
      style={{
        width: '100%',
        // backgroundColor: 'red',
        height: 150,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 50,
      }}>
      <Text>ZoomMarkers</Text>
    </View>
  );
};

export default ZoomMarkers;

const styles = StyleSheet.create({});

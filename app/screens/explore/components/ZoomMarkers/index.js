import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const ZoomMarkers = () => {
  const {regionMarkers} = useSelector(state => state.coordinates);
  console.log(regionMarkers, 'zoom');
  return (
    <View
      style={{
        width: '100%',
        // backgroundColor: 'red',
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

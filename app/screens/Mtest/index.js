import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Mtest = () => {
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: 'grey',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Mtest</Text>
      </View>
      {/* ============Seconde View============== */}
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: 'red',
          flexDirection: 'row',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          paddingVertical: 20,
        }}>
        <View
          style={{
            width: '33.33%',
            height: '100%',
            backgroundColor: 'green',
            //   justifyContent: 'center',
            //   alignItems: 'center',
          }}></View>
        <View
          style={{
            width: '33.33%',
            height: '100%',
            backgroundColor: 'yellow',
            //   justifyContent: 'center',
            //   alignItems: 'center',
          }}></View>
        <View
          style={{
            width: '33.33%',
            height: '100%',
            backgroundColor: 'blue',
            //   justifyContent: 'center',
            //   alignItems: 'center',
          }}></View>
      </View>
      {/* ============Seconde View============== */}
    </>
  );
};

export default Mtest;

const styles = StyleSheet.create({});

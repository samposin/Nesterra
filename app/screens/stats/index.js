import {StyleSheet, Text, Animated, View} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
//AIzaSyDOyxhWdKWUM0PiYg97jx5tk3eB1NniLbU
const Stats = () => {
  let transformX = useRef(new Animated.Value(0)).current;
  const rotationX = transformX.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 125],
  });
  useEffect(() => {
    Animated.timing(transformX, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: 200,
        backgroundColor: 'red',
        position: 'relative',
      }}>
      <Animated.View
        style={{
          position: 'absolute',
          height: 40,
          top: 2.5,
          left: 10,
          borderRadius: 25,
          width: 40,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,
          elevation: 14,
          transform: [
            {
              translateX: rotationX,
            },
          ],
          backgroundColor: 'white',
        }}></Animated.View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({});

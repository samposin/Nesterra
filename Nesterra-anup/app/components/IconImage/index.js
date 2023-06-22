import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
useSelector;
const IconImage = ({src}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);

  return (
    <Image
      style={{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        tintColor: appearanceType === 'dark' ? 'white' : 'black',
      }}
      source={src}
    />
  );
};

export default IconImage;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const TextView = ({title, color, size, bold, marginLeft}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);
  return (
    <Text
      style={{
        color: appearanceType === 'dark' ? 'white' : color,
        fontWeight: bold,
        fontSize: size,
        marginLeft: marginLeft,
      }}>
      {title}
    </Text>
  );
};

export default TextView;

const styles = StyleSheet.create({});

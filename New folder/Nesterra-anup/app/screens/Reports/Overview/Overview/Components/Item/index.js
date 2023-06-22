import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const Item = ({item1, color1, width, item}) => {
  // console.log(item.LocationType);
  return (
    <View
      style={{
        width: width,
        height: '100%',

        paddingLeft: moderateScale(5),
        borderStartColor: '#bababa',

        borderStartWidth: 0.7,
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: moderateScale(12),
          fontWeight:
            item?.LocationType && item?.LocationType === 'Total'
              ? 'bold'
              : null,
        }}>
        {item1}
      </Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({});

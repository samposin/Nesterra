import React, {useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const {width, height} = Dimensions.get('window');

const ImageLoder = ({}) => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{}}>
          <View style={{width: 300, height: 100, borderRadius: 5}} />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
            }}>
            <View style={{width: 200, height: 100, borderRadius: 5}} />
            {/* <View
              style={{
                width: 70,
                marginTop: 6,
                marginLeft: 25,
                height: 15,
                borderRadius: 4,
              }}
            /> */}
          </View>
          {/* <View
            style={{
              flexDirection: 'column',
              paddingLeft: 10,
            }}>
            <View
              style={{width: 120, marginTop: 6, height: 15, borderRadius: 4}}
            />
            <View
              style={{width: 150, marginTop: 6, height: 15, borderRadius: 4}}
            />
          </View> */}
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default ImageLoder;
const styles = StyleSheet.create({});

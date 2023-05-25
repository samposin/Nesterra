import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const MenuItem = ({src, onPress, title}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        width: '100%',
        height: 40,
        border: 1,
        borderBottomColor: '#575757',
        borderBottomWidth: 0.3,
        flexDirection: 'row',
        marginVertical: 5,
      }}>
      <View
        style={{
          width: '50%',
          height: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={src}
          style={{
            width: 25,
            height: 25,
            resizeMode: 'contain',
            tintColor: appearanceType == 'dark' ? 'white' : 'black',
          }}
        />
        <Text
          style={{
            marginLeft: 20,
            color: appearanceType == 'dark' ? 'white' : 'black',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          width: '50%',
          height: '100%',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <Text>
          {/* <AntDesign name="right" size={22} color="#b8b8b8" /> */}
          <Entypo name="chevron-thin-right" size={22} color="#b8b8b8" />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});

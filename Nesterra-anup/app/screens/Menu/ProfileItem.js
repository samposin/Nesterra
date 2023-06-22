import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';

const ProfileItem = ({onPress, name, email}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        width: '100%',
        height: 65,
        border: 1,
        borderBottomColor: '#575757',
        borderBottomWidth: 0.9,
        flexDirection: 'row',
        marginVertical: 5,
      }}>
      <View
        style={{
          width: '10%',
          height: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'pink',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: appearanceType == 'dark' ? 'white' : 'black',
              fontWeight: 'bold',
            }}>
            AB
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          height: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          // backgroundColor: 'red',
          alignItems: 'center',
        }}>
        <Text
          style={{
            marginLeft: 10,
            color: appearanceType == 'dark' ? 'white' : 'black',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          {name}
        </Text>
        <Entypo name="chevron-thin-right" size={22} color="#b8b8b8" />
      </View>
    </TouchableOpacity>
  );
  9;
};

export default ProfileItem;

const styles = StyleSheet.create({
  emailText: {
    marginLeft: 10,
    color: '#a9a7a7',
  },
});

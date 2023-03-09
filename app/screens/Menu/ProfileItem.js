import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ProfileItem = ({onPress, name, email}) => {
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
          <Text style={{color: 'black', fontWeight: 'bold'}}>AB</Text>
        </View>
      </View>
      <View style={{width: '90%', height: '100%', justifyContent: 'center'}}>
        <Text
          style={{
            marginLeft: 10,
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  emailText: {
    marginLeft: 10,
    color: '#a9a7a7',
  },
});

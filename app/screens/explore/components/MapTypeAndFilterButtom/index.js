import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const MapTypeAndFilterButtom = ({setSatellite}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MapTypeAndFilter', {setSatellite})}
      style={styles.button}>
      <Ionicons name="md-layers" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default MapTypeAndFilterButtom;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 120,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

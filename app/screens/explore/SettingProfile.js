import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const SettingProfile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, paddingVertical: StatusBar.currentHeight}}>
        <View
          style={{
            height: 50,
            width: '100%',

            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '15%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '70%',
              height: '100%',
              justifyContent: 'center',
            }}>
            <Text>About Term </Text>
          </View>
          <View style={{width: '15%', height: '100%'}}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingProfile;

const styles = StyleSheet.create({});

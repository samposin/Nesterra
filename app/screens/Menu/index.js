import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import MenuItem from './MenuItem';

const Imagg = {
  contact: require('../../images/nenuImage/contact.png'),
  filter: require('../../images/nenuImage/filter.png'),
  setting: require('../../images/nenuImage/cogwheel.png'),
  stats: require('../../images/nenuImage/pie-chart.png'),
};

const Menu = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('MapTypeAndFilter');
  };
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight,
        }}>
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Menu
          </Text>

          <TouchableOpacity
            style={{
              width: 100,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#3374b4',
              borderWidth: 1.5,
              borderRadius: 20,
            }}>
            <Text style={{color: '#575757'}}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 15}}>
          <MenuItem onPress={onPress} src={Imagg.filter} title="Filters" />
          <MenuItem onPress={onPress} src={Imagg.contact} title="Contacts" />
          <MenuItem onPress={onPress} src={Imagg.stats} title="Stats" />
          <MenuItem onPress={onPress} src={Imagg.setting} title="Settings" />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({});

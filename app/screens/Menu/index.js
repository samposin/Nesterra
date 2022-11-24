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
  contact: require('../../images/nenuImage/contract.png'),
  info: require('../../images/nenuImage/info.png'),
  pic: require('../../images/nenuImage/pie-chart.png'),
  mark: require('../../images/nenuImage/question-mark.png'),
  user: require('../../images/nenuImage/user.png'),
  logout: require('../../images/nenuImage/logout.png'),
};

const Menu = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Stats');
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
          <MenuItem onPress={onPress} src={Imagg.user} title="My Profile" />
          <MenuItem onPress={onPress} src={Imagg.pic} title="Stats" />
          <MenuItem onPress={onPress} src={Imagg.info} title="About" />
          <MenuItem
            onPress={onPress}
            src={Imagg.contact}
            title="Terms of use"
          />
          <MenuItem
            onPress={onPress}
            src={Imagg.logout}
            title="Privecy Policy"
          />
          <MenuItem onPress={onPress} src={Imagg.mark} title="FAQs" />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({});

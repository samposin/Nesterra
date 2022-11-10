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
const Imagg = {
  contact: require('../../images/nenuImage/contract.png'),
  info: require('../../images/nenuImage/info.png'),
  pic: require('../../images/nenuImage/pie-chart.png'),
  mark: require('../../images/nenuImage/question-mark.png'),
  user: require('../../images/nenuImage/user.png'),
  logout: require('../../images/nenuImage/logout.png'),
};
const MenuItem = ({src, title}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        border: 1,
        borderBottomColor: '#575757',
        borderBottomWidth: 0.6,
        flexDirection: 'row',
        marginVertical: 5,
      }}>
      <View
        style={{
          width: '30%',
          height: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={src}
          style={{width: 30, height: 30, resizeMode: 'contain'}}
        />
        <Text style={{marginLeft: 10, color: 'black', fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
      <View style={{width: '70%', height: '100%'}}></View>
    </View>
  );
};
const Menu = () => {
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
          <MenuItem src={Imagg.user} title="My Profile" />
          <MenuItem src={Imagg.pic} title="Stats" />
          <MenuItem src={Imagg.info} title="About" />
          <MenuItem src={Imagg.contact} title="Terms of use" />
          <MenuItem src={Imagg.logout} title="Privecy Policy" />
          <MenuItem src={Imagg.mark} title="FAQs" />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({});

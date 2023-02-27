import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef, useMemo, useState} from 'react';
import MenuItem from './MenuItem';
import BottomSheetView from './BottomSheetView';
import {getContacts} from './../../actions/Contacts/index';
import {connect} from 'react-redux';
import ProfileItem from './ProfileItem';
const Imagg = {
  profile: require('../../images/Icons/user.png'),
  contact: require('../../images/nenuImage/Icons/contact-book.png'),
  saved: require('../../images/nenuImage/Icons/save-instagram.png'),
  filter: require('../../images/nenuImage/Icons/filter.png'),
  setting: require('../../images/nenuImage/Icons/settings.png'),
  logout: require('../../images/nenuImage/Icons/exit.png'),
};

const Menu = ({navigation, getContacts}) => {
  const bottomRef = useRef(null);
  const snapPoints = useMemo(() => ['10%', '26%', '95%'], []);
  const [contactLoder, seTcontactLoder] = useState(true);
  const onPress = () => {
    navigation.navigate('MapTypeAndFilter');
  };
  const contact = () => {
    getContacts(seTcontactLoder);
    bottomRef.current.snapToIndex(2);
  };
  const stats = () => {
    navigation.navigate('Stats');
  };
  const setting = () => {
    navigation.navigate('MenuSetting');
  };
  const Profile = () => {
    navigation.navigate('Profile');
  };
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight,
        }}>
        {/* <View
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
        </View> */}

        <View style={{paddingHorizontal: 15}}>
          <ProfileItem
            onPress={onPress}
            src={Imagg.profile}
            name="Santosh Carperter"
            email="sontosh.cerpenter@nesterra.net"
          />
          <MenuItem onPress={Profile} src={Imagg.profile} title="My Profile" />
          <MenuItem onPress={onPress} src={Imagg.filter} title="Filters" />
          <MenuItem onPress={contact} src={Imagg.saved} title="Saved" />
          <MenuItem onPress={contact} src={Imagg.contact} title="Contacts" />
          <MenuItem onPress={setting} src={Imagg.setting} title="Settings" />
          <MenuItem onPress={stats} src={Imagg.logout} title="Logout" />
        </View>
      </SafeAreaView>
      <BottomSheetView
        bottomRef={bottomRef}
        contactLoder={contactLoder}
        snapPoints={snapPoints}
      />
      {/* */}
    </>
  );
};

export default connect(null, {getContacts})(Menu);

const styles = StyleSheet.create({});

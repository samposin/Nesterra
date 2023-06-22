import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  Share,
} from 'react-native';
import React, {useRef, useMemo, useState} from 'react';

import BottomSheetView from './BottomSheetView';
import {getContacts} from './../../actions/Contacts/index';
<<<<<<< HEAD:Nesterra-anup/app2/screens/Menu/index.js
import {connect} from 'react-redux';
const Imagg = {
  contact: require('../../images/nenuImage/contact.png'),
  filter: require('../../images/nenuImage/filter.png'),
  setting: require('../../images/nenuImage/cogwheel.png'),
  stats: require('../../images/nenuImage/pie-chart.png'),
};
=======
import {connect, useSelector} from 'react-redux';
import ProfileItem from './ProfileItem';
import {Title} from 'react-native-paper';
import MenuItem from './../../components/MenuItem/index';
import {MenuImage} from '../../components/imageLink/MenuLink';
import BackdropView from '../explore/components/BackdropView';

// const MenuImage = {
//   profile: require('../../images/Icons/user.png'),
//   contact: require('../../images/nenuImage/Icons/contact-book.png'),
//   saved: require('../../images/nenuImage/Icons/save-instagram.png'),
//   filter: require('../../images/nenuImage/Icons/filter.png'),
//   setting: require('../../images/nenuImage/Icons/settings.png'),
//   logout: require('../../images/nenuImage/Icons/exit.png'),
//   Appearence: require('../../images/nenuImage/Icons/Appearence.png'),
//   Help: require('../../images/nenuImage/Icons/Help.png'),
//   share: require('../../images/nenuImage/Icons/share.png'),

//   siteTitle: require('.././../images/siteTitle.png'),
// };
>>>>>>> 7605d47dd02e5e1a0e2e15aa3e171353bb2b0f18:app/screens/Menu/index.js

const Menu = ({navigation, getContacts}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);
  const bottomRef = useRef(null);
  const bottomRef1 = useRef(null);
  const snapPoints = useMemo(() => ['10%', '26%', '95%'], []);
  const [contactLoder, seTcontactLoder] = useState(true);
  const onPress = text => {
    navigation.navigate(text);
  };
  const stats = () => {
    navigation.navigate('Stats');
  };
<<<<<<< HEAD:Nesterra-anup/app2/screens/Menu/index.js
  const setting = () => {
    navigation.navigate('MenuSetting');
=======

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
>>>>>>> 7605d47dd02e5e1a0e2e15aa3e171353bb2b0f18:app/screens/Menu/index.js
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
<<<<<<< HEAD:Nesterra-anup/app2/screens/Menu/index.js
        </View>
        <View style={{paddingHorizontal: 15}}>
          <MenuItem onPress={onPress} src={Imagg.filter} title="Filters" />
          <MenuItem onPress={contact} src={Imagg.contact} title="Contacts" />
          <MenuItem onPress={stats} src={Imagg.stats} title="Stats" />
          <MenuItem onPress={setting} src={Imagg.setting} title="Settings" />
=======
        </View> */}
        <View style={styles.mainView}>
          <View style={styles.imageView}>
            <Image
              source={MenuImage.siteTitle}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'center',
                tintColor: appearanceType == 'dark' ? 'white' : null,
              }}
            />
          </View>
        </View>

        <View style={{paddingHorizontal: 15}}>
          <ProfileItem
            onPress={() => onPress('Profile')}
            src={MenuImage.profile}
            name="Akash Brahme"
          />
          <MenuItem
            onPress={() => onPress('MapTypeAndFilter')}
            src={MenuImage.filter}
            title="Filters"
          />
          {/* <MenuItem
            onPress={() => onPress('Appearance')}
            src={MenuImage.Appearence}
            title="Appearance"
          /> */}
          <MenuItem
            onPress={() => onPress('Contact')}
            src={MenuImage.contact}
            title="Contacts"
          />
          <MenuItem
            onPress={() => onPress('HelpDesk')}
            src={MenuImage.Help}
            title="Help Desk"
          />
          <MenuItem
            onPress={() => onPress('Saved')}
            src={MenuImage.saved}
            title="Saved"
          />
          <MenuItem onPress={onShare} src={MenuImage.share} title="Share App" />
          <MenuItem
            onPress={() => onPress('Settings')}
            src={MenuImage.setting}
            title="Settings"
          />

          <MenuItem
            onPress={() => {
              // bottomRef1.current.snapToIndex(2);
            }}
            src={MenuImage.Legal}
            title="Legal"
          />

          <MenuItem
            onPress={() => {
              //
            }}
            src={MenuImage.logout}
            title="Logout"
          />
>>>>>>> 7605d47dd02e5e1a0e2e15aa3e171353bb2b0f18:app/screens/Menu/index.js
        </View>
      </SafeAreaView>
      <BottomSheetView
        bottomRef={bottomRef}
        contactLoder={contactLoder}
        snapPoints={snapPoints}
      />
      {/* <BackdropView bottomRef={bottomRef1} /> */}
      {/* */}
    </>
  );
};

export default connect(null, {getContacts})(Menu);

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: 80,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    width: '60%',
    height: '100%',
    // backgroundColor: 'white',
  },
});

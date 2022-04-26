import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  ScrollView,
  useRef,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {list} from '../../utils/Constants';
const Setting = ({settingView, setSettingView}) => {
  const containerStyle = {
    marginTop: 110,
    backgroundColor: 'white',
    width: '95%',
    zIndex: 1000,
    height: '100%',
    alignSelf: 'center',
    borderRadius: 5,
  };
  // const settingRef = useRef(null);

  return (
    <Portal>
      <Modal
        visible={settingView}
        style={{zIndex: 14}}
        onDismiss={() => setSettingView(!settingView)}
        contentContainerStyle={containerStyle}>
        <Animated.View
          onScrollToTop={e => console.log(e)}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 5,
          }}>
          {/* ===========logo============= */}
          <View style={styles.logo}>
            <View style={styles.logoLeft}>
              <TouchableOpacity onPress={() => setSettingView(!settingView)}>
                <Entypo name="cross" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.logoMiddle}>
              <Image
                source={require('../../images/siteTitle.png')}
                style={{width: '50%', height: '100%', resizeMode: 'contain'}}
              />
            </View>
            <View style={styles.logoLeft}></View>
          </View>
          {/* ===========logo============= */}
          {/* ===========account============= */}
          <View style={styles.account}>
            {/* ===========account============= */}
            <View style={styles.accountTop}>
              <View style={styles.accountLeft}>
                <Image
                  source={require('../../images/xp.jpg')}
                  style={styles.imageProfile}
                />
              </View>
              <View style={styles.accountMiddle}>
                <Text>Name</Text>
                <Text>name@gmail.com</Text>
              </View>
              <View style={styles.accountLeft}>
                <View style={styles.rotatedIconView}>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="black"
                  />
                </View>
              </View>
            </View>
            {/* ===========account============= */}
            <View style={{width: '100%', height: '50%'}}>
              <View style={styles.appsAccount}>
                <Text style={styles.appsAccountText}>Nesterra Account</Text>
              </View>
            </View>
          </View>
          {/* ===========account============= */}
          {/* ===========List============= */}
          <View style={{width: '100%', height: 500}}>
            <ScrollView>
              {list.map((item, i) => {
                return (
                  <View key={i} style={styles.listItem}>
                    <View style={styles.listItemLeft}>
                      <EvilIcons name="user" size={24} color="black" />
                    </View>
                    <View
                      style={{
                        width: '60%',
                        height: '100%',
                        justifyContent: 'center',
                      }}>
                      <Text>Your Profile</Text>
                    </View>
                    <View style={{width: '20%', height: '100%'}}></View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          {/* ===========List============= */}
        </Animated.View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
  },
  logoLeft: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoMiddle: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Account
  account: {
    width: '100%',
    height: 150,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  accountLeft: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountMiddle: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
  },
  accountTop: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
  },
  imageProfile: {
    width: 46,
    height: 46,
    borderRadius: 23,

    resizeMode: 'cover',
  },
  rotatedIconView: {
    width: 25,
    height: 25,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appsAccount: {
    width: '60%',
    height: '100%',

    alignSelf: 'center',
    justifyContent: 'center',
  },
  appsAccountText: {
    borderColor: 'black',
    borderWidth: 0.7,
    color: 'black',
    padding: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    alignSelf: 'flex-start',
    borderRadius: 25,
  },
  //Account
  //List
  listItem: {
    width: '100%',
    height: 50,
    margin: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemLeft: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //List
});

export default Setting;

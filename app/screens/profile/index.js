import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <View style={styles.mainView}>
        <Text style={styles.ProfileText}>Profile</Text>

        <View style={styles.closeView}>
          <Entypo name="cross" size={scale(16)} color="white" />
        </View>
      </View>
      <View style={styles.profileView}>
        <View style={styles.imageView}>
          <Image
            source={require('../../images/Icons/user.png')}
            style={styles.userImage}
          />
        </View>
      </View>
      <Text style={styles.profileText1}>Santosh Cerpenter</Text>

      <View style={styles.profileText3}>
        <View style={styles.ProfileText2}>
          <Text style={{fontSize: 30}}>Email</Text>
          <Text style={{fontSize: 15, color: 'black'}}>
            Sontosh.cerperter@nesterra.net
          </Text>
        </View>
      </View>

      <View style={styles.ProfileText4}>
        <View style={styles.profileText5}>
          <Text style={{fontSize: 30}}>Emp id</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',

    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(15),
  },
  ProfileText: {
    fontSize: scale(20),
    color: 'black',
    fontWeight: 'bold',
  },
  closeView: {
    width: scale(18),
    height: scale(18),
    backgroundColor: '#0d79ff',
    borderRadius: scale(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileView: {
    width: '100%',
    height: scale(150),

    // backgroundColor: '#7c7c7c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: scale(100),
    height: scale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText1: {
    marginTop: 20,
    fontSize: scale(20),
    color: 'black',
    fontWeight: 'bold',
    // justifyContent: 'center',
    textAlign: 'center',
  },
  profileText3: {
    width: '100%',
    height: scale(100),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  ProfileText2: {
    width: '80%',
    height: 100,
    // backgroundColor: 'red',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ProfileText4: {
    width: '100%',
    height: 100,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText5: {
    width: '80%',
    height: 100,
    // backgroundColor: 'red',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  userImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

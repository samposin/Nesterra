import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import TextItemView from './Components/TextItemView';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <View style={styles.mainView}>
        <Text style={styles.ProfileText}>Profile</Text>

        <View style={styles.closeView}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Entypo name="cross" size={scale(16)} color="white" />
          </TouchableOpacity>
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
      <Text style={{...styles.profileText1, color: 'black'}}>
        Santosh Cerpenter
      </Text>
      <Text
        style={{
          ...styles.profileText1,
          color: 'gray',
          marginBottom: scale(10),
          fontSize: scale(15),
        }}>
        Title -
      </Text>
      {/* ========item====== */}

      <TextItemView
        leftText="Email"
        rightText="Sontosh.cerperter@nesterra.net"
      />
      <TextItemView leftText="Emp Id" rightText="-" />
      <TextItemView
        leftText="Phone#"
        rightText="Sontosh.cerperter@nesterra.net"
      />

      <TextItemView leftText="Desk Phone#" rightText="-" />
      <TextItemView leftText="Status" rightText="Active" />
      <TextItemView leftText="Business Unit" rightText="Nesterra" />
      <TextItemView leftText="Activation Date" rightText="2022-05-25" />
      <View
        style={{
          width: '100%',
          height: 1,

          paddingHorizontal: 10,
        }}>
        <View
          style={{
            width: '100%',
            borderTopColor: '#c6c6c6',
            borderTopWidth: 0.5,
          }}></View>
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
    fontSize: scale(20),

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
    resizeMode: 'cover',
  },
});

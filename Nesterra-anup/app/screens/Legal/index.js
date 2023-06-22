import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MenuItem from '../../components/MenuItem';
import Entypo from 'react-native-vector-icons/Entypo';

import {LegaleImage} from '../../components/imageLink/LegalImage';

const Legal = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}>
      <View style={styles.mainView}>
        <Text style={styles.settingText}>Legal</Text>
        <TouchableOpacity
          style={styles.closeView}
          onPress={() => {
            navigation.navigate('Menu');
          }}>
          <Entypo name="cross" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{width: '100%', paddingHorizontal: 15}}>
        <MenuItem
          onPress={() => {
            navigation.navigate('About');
          }}
          src={LegaleImage.about}
          title="About "
        />
        <TouchableOpacity>
          <MenuItem
            onPress={() => {}}
            src={LegaleImage.term}
            title="Terms of use"
          />
        </TouchableOpacity>
        <MenuItem
          onPress={() => {}}
          src={LegaleImage.privacy}
          title="Privacy Policy"
        />
      </View>
    </SafeAreaView>
  );
};

export default Legal;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: 80,
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  closeView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0472ef',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
});

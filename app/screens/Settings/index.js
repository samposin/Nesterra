import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import BackButton from '../../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import MenuItem from '../../components/MenuItem';
import {MenuImage} from '../../components/imageLink/MenuLink';
import ToggleSwitch from 'toggle-switch-react-native';
import TextView from '../../components/TextView';
import IconImage from '../../components/IconImage';

const Settings = () => {
  const [isOn, setIsSwitchOn] = React.useState(true);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <View
        style={{
          width: '100%',
          //   height: 50,
          //   backgroundColor: 'pink',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        {/* <TextView title="Settinges" color="black" size={25} /> */}
        <TextView
          title="Settinges"
          color="black"
          size={25}
          marginLeft={0}
          bold="bold"
        />

        <BackButton
          onPress={() => {
            navigation.navigate('Menu');
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: 60,
          //   backgroundColor: 'pink',
          flexDirection: 'row',

          borderBottomColor: 'black',
          paddingHorizontal: 20,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '50%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: 25, height: 25}}>
            <IconImage src={MenuImage.volume} />
          </View>

          <TextView
            title="Tab Sounds"
            color="black"
            size={16}
            marginLeft={10}
            bold="bold"
          />
        </View>

        <View
          style={{
            width: '50%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <ToggleSwitch
            isOn={isOn}
            onColor="#34c759"
            offColor="#b3b8b4"
            labelStyle={{color: 'black', fontWeight: '500'}}
            size="large"
            onToggle={isOn => {
              setIsSwitchOn(isOn);
              if (isOn) {
                console.log('yes');
                // alldata();
              } else {
                // activeFilter();
                console.log('no');
              }
            }}
          />
        </View>
      </View>
      <View style={{paddingHorizontal: 15}}>
        <MenuItem
          onPress={() => navigation.navigate('Appearance')}
          src={MenuImage.Appearence}
          title="Appearence"
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {useNavigation} from '@react-navigation/native';
import AddButton from '../button/AddButton';

const ToggleView = ({activeFilter, size, name, alldata, length}) => {
  const [isOn, setIsSwitchOn] = React.useState(false);
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: 230,
        height: 35,
        position: 'absolute',
        right: 8,
        bottom: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          width: '46%',
          height: '100%',
          backgroundColor: '#007aff',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>
          {length} {name}
        </Text>
      </View>
      <View
        style={{
          width: '52%',
          height: '100%',
          backgroundColor: '#007aff',
          borderRadius: 10,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 16}}>
          {isOn ? 'All' : ' Active'}{' '}
        </Text>
        {/* <ToggleSwitch
          isOn={isOn}
          onColor="#b3b8b4"
          offColor="#34c759"
          labelStyle={{color: 'black', fontWeight: '500'}}
          size={size}
          onToggle={isOn => {
            setIsSwitchOn(isOn);
            if (isOn) {
              //   console.log('yes');
              alldata();
            } else {
              activeFilter();
              //   console.log('no');
            }
          }}
        /> */}
        {/* <AddButton
          onPress={() => {
            navigation.navigate('AddOrder');
          }}
        /> */}
      </View>
    </View>
  );
};

export default ToggleView;

const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import TabView from './components/TabView';
const Orders = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'All', value: 'all'},
    {label: 'One', value: 'One'},
  ]);

  const [buttonBorder, setButtonBorder] = useState('circuits');
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
        }}>
        <View style={styles.container}>
          <TabView />
          {/* ==============Button============== */}
          {/* <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => {
                setButtonBorder('circuits');
              }}
              style={{
                ...styles.button,
                backgroundColor:
                  buttonBorder === 'circuits' ? '#2f6eba' : '#94aad7',
              }}>
              <Text style={{fontWeight: '900', fontSize: 15, color: 'white'}}>
                Circuits
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setButtonBorder('devices');
              }}
              style={{
                ...styles.button,
                backgroundColor:
                  buttonBorder === 'devices' ? '#2f6eba' : '#94aad7',
              }}>
              <Text style={{fontWeight: '900', fontSize: 15, color: 'white'}}>
                Devices
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setButtonBorder('connect');
              }}
              style={{
                ...styles.button,
                backgroundColor:
                  buttonBorder === 'connect' ? '#2f6eba' : '#94aad7',
              }}>
              <Text style={{fontWeight: '900', fontSize: 15, color: 'white'}}>
                x-Connects
              </Text>
            </TouchableOpacity>
          </View> */}
          {/* ==============Button============== */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    margin: 10,
    marginBottom: 50,
  },
  topView: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  topItem: {
    width: '33.33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topItem1: {
    width: '33.33%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  buttonView: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  button: {
    width: '27%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ///========dropdown
  dropDownView: {
    width: '80%',
    height: 40,
    flexDirection: 'row',
    marginTop: 10,
  },
  dropDownViewLeft: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  dropDownViewRight: {
    width: '70%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
  },
  pickerItem: {width: 200, height: 40, borderWidth: 0.5},
  ///========dropdown
  pickerBoxInner: {
    borderWidth: 0.6,
    borderColor: 'black',
    borderRadius: 2,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  pickerBoxIcon: {
    position: 'absolute',
    right: 0,
    fontSize: 23,
    color: 'red',
  },
  pickerStyle: {
    width: '120%',
    paddingBottom: 0,
    paddingLeft: 0,
    transform: [{scaleX: 0.85}, {scaleY: 0.85}],
    left: -25,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
});

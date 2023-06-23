import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {width} = Dimensions.get('screen');
import React, {useState, useEffect, useRef} from 'react';

import Devices from './components/Devices';

import Circuits from './components/Circuits';
import {connect} from 'react-redux';
import Button from '../../components/button/Button';
import {returnMapZoom} from './../search/components/helpers';

const Orders = ({}) => {
  const circuitRefDetails = useRef(null);
  const deviceRefDetails = useRef(null);
  const bottomSheetRef = useRef(null);

  const [displyCompomnet, setDisplayComponents] = useState('Circuits');
  const [loding, setLodding] = useState(true);

  const ranDerView = () => {
    switch (true) {
      case displyCompomnet === 'Circuits':
        return (
          <Circuits
            setLodding={setLodding}
            circuitRefDetails={circuitRefDetails}
          />
        );

      case displyCompomnet === 'Devices':
        return (
          <Devices
            setLodding={setLodding}
            deviceRefDetails={deviceRefDetails}
          />
        );
    }
  };
  const setComponentCircuit = () => {
    setDisplayComponents('Circuits');
  };
  const setComponentDeives = () => {
    setDisplayComponents('Devices');
  };
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
          position: 'relative',
        }}>
        {/* ==============container============== */}

        {/* ==============Search View=========== */}
        <View
          style={{
            ...styles.searchView,
            alignItems: 'center',
          }}>
          <View
            style={{
              ...styles.searchViewLeft,
              flexDirection: 'row',
            }}>
            <Button
              onPress={setComponentCircuit}
              displyCompomnet={displyCompomnet}
              title="Circuits"
            />
            <Button
              onPress={setComponentDeives}
              displyCompomnet={displyCompomnet}
              title="Devices"
            />
            <Button
              onPress={setComponentDeives}
              displyCompomnet={displyCompomnet}
              title="Equinix"
            />
          </View>

          <View style={styles.searchViewRight}></View>
        </View>
        <View
          style={{
            width: '100%',
            height: 30,
            // backgroundColor: 'pink',
            //paddingHorizontal: 20,
            paddingVertical: 3,
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              // backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '25%',
                height: '100%',
                backgroundColor: '#7fc781',
                borderRadius: 7,
                marginRight: 9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 12}}>Search</Text>
            </View>

            <View
              style={{
                width: '25%',
                height: '100%',
                backgroundColor: '#7fb4ee',
                borderRadius: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 12}}>Clear Search</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '100%',
              }}></View>
          </View>
          {/* <View
            style={{
              width: '100%',
              height: 20,
              backgroundColor: 'white',
              marginTop: 15,
            }}></View> */}
          {/* <Text style={{color: 'black', paddingLeft: 15, paddingTop: 8}}>
            Current Selection:
          </Text>
          <Text style={{color: '#007aff', paddingLeft: 15, paddingTop: 8}}>
            All
          </Text> */}
        </View>
        {/* ==============Search View=========== */}

        {ranDerView()}
      </SafeAreaView>
      <View
        styles={{
          width: '100%',
          height: 100,
          position: 'absolute',
          bottom: 150,
          left: 10,
          right: 0,
          backgroundColor: 'red',
          zIndex: 400,
        }}></View>
    </>
  );
};

export default connect(null, {})(Orders);

const styles = StyleSheet.create({
  //searchView
  searchViewLeft: {
    width: '80%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchViewRight: {
    width: '20%',
    height: '100%',
    paddingLeft: 10,
    justifyContent: 'center',
  },

  searchView: {
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  //searchView

  ///=========data row
});

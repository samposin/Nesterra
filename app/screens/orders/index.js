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
  useEffect(() => {}, []);

  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
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
            <TouchableOpacity
              onPress={() => {
                setDisplayComponents('Circuits');
              }}
              style={{
                width: 90,
                height: 40,
                borderRadius: 10,
                marginRight: 10,
                backgroundColor:
                  displyCompomnet == 'Circuits' ? '#007aff' : 'transparent',
                borderWidth: 1,
                borderColor:
                  displyCompomnet == 'Circuits' ? '#007aff' : 'black',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: displyCompomnet == 'Circuits' ? 'white' : 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Circuits
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDisplayComponents('Devices');
              }}
              style={{
                width: 90,
                height: 40,

                borderRadius: 10,
                backgroundColor:
                  displyCompomnet == 'Devices' ? '#007aff' : 'transparent',
                borderWidth: 1,
                borderColor: displyCompomnet == 'Devices' ? '#007aff' : 'black',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: displyCompomnet == 'Devices' ? 'white' : 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Device
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchViewRight}></View>
        </View>

        {/* ==============Search View=========== */}

        {ranDerView()}
      </SafeAreaView>
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

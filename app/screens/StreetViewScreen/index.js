import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';
import StreetView from 'react-native-streetview';
import {useSelector} from 'react-redux';

const StreetViewScreen = () => {
  const location_data = useSelector(state => state.location_details.data);
  return (
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <View style={styles.container}>
        <StreetView
          style={styles.streetView}
          allGesturesEnabled={true}
          coordinate={{
            latitude: location_data.Latitude,
            longitude: location_data.Longitude,
          }}
          pov={{
            tilt: parseFloat(0),
            bearing: parseFloat(0),
            zoom: parseInt(1),
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default StreetViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  streetView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

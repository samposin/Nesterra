import React, {useRef} from 'react';
import {Button, StyleSheet} from 'react-native';
import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
const INITIAL_REGION = {
  latitude: 52.5,
  longitude: 19.2,
  latitudeDelta: 8.5,
  longitudeDelta: 8.5,
};
const Search = () => {
  const mapRef = useRef();

  const animateToRegion = () => {
    let region = {
      latitude: 42.5,
      longitude: 15.2,
      latitudeDelta: 7.5,
      longitudeDelta: 7.5,
    };

    mapRef.current.animateToRegion(region, 2000);
  };
  return (
    <>
      <MapView ref={mapRef} initialRegion={INITIAL_REGION} style={{flex: 1}}>
        <Marker coordinate={{latitude: 52.4, longitude: 18.7}} />
        <Marker coordinate={{latitude: 52.1, longitude: 18.4}} />
        <Marker coordinate={{latitude: 52.6, longitude: 18.3}} />
        <Marker coordinate={{latitude: 51.6, longitude: 18.0}} />
        <Marker coordinate={{latitude: 53.1, longitude: 18.8}} />
        <Marker coordinate={{latitude: 52.9, longitude: 19.4}} />
        <Marker coordinate={{latitude: 52.2, longitude: 21}} />
        <Marker coordinate={{latitude: 52.4, longitude: 21}} />
        <Marker coordinate={{latitude: 51.8, longitude: 20}} />
      </MapView>
      <Button onPress={animateToRegion} title="Animate" />
    </>
  );
};

export default Search;

const styles = StyleSheet.create({});

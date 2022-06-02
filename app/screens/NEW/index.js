import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import MapView from 'react-native-map-clustering';
import {hasLocationPermission} from '../../utils/AskPermission';
import Geolocation from 'react-native-geolocation-service';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchAddress from '../../components/searchAddress';
import {useSelector} from 'react-redux';
import {Marker} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_REGION = {
  latitude: 41.85942,
  longitude: -71.519236,
  latitudeDelta: 8.5,
  longitudeDelta: 8.5,
};
const Extra = () => {
  const {coordinates} = useSelector(state => state.coordinates);
  const mapRef = useRef(null);
  const [lat, setLat] = useState(42.340350646);
  const [lng, setLng] = useState(-71.06219976);
  const [currentRegion, setCurrentRegion] = useState({
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.0112333,
    longitudeDelta: 0.001233,
  });

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }
    Geolocation.getCurrentPosition(
      position => {
        // setLat(position.coords.latitude);
        // setLng(position.coords.longitude);
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0112333,
          longitudeDelta: 0.001233,
        };
        mapRef.current.animateToRegion(region, 500);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  const _onRegionChange = mapRegion => {
    console.log(mapRegion);
    setCurrentRegion({
      latitude: mapRegion.latitude,
      longitude: mapRegion.longitude,
      latitudeDelta: mapRegion.latitudeDelta,
      longitudeDelta: mapRegion.longitudeDelta,
    });
  };
  const goToAddres = (lat, lng) => {
    const region = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
    setCurrentRegion(region);
  };
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapRef}
        preserveClusterPressBehavior={true}
        maxZoom={20}
        mapType={'standard'}
        pitchEnabled={true}
        zoomControlEnabled={false}
        zoomEnabled={true}
        zoomTapEnabled={true}
        rotateEnabled={true}
        scrollEnabled={true}
        showsMyLocationButton={true}
        showsCompass={true}
        followsUserLocation={true}
        provider={MapView.PROVIDER_GOOGLE}
        style={{flex: 1}}
        region={currentRegion}
        initialRegion={INITIAL_REGION}></MapView>
      <SearchAddress goToAddres={goToAddres} />
      {/* <MapView
        ref={mapRef}
        preserveClusterPressBehavior={true}
        maxZoom={20}
        mapType={'standard'}
        pitchEnabled={true}
        zoomControlEnabled={true}
        zoomEnabled={true}
        zoomTapEnabled={true}
        rotateEnabled={true}
        scrollEnabled={true}
        showsMyLocationButton={true}
        showsCompass={true}
        onRegionChange={(region, gesture) => {
          if (Platform.OS === 'android') {
            if (gesture.isGesture) {
              _onRegionChange(region);
            }
          }
        }}
        initialRegion={currentRegion}
        region={currentRegion}
        style={{flex: 1}}>
        {coordinates.map(item => {
          return (
            <Marker.Animated
              key={`${item.Latitude}_${item.Longitude}`}
              coordinate={{
                latitude: item.Latitude,
                longitude: item.Longitude,
              }}>
              <CustomMarker />
            </Marker.Animated>
          );
        })}
      </MapView> */}
      {/* <SearchAddress goToAddres={goToAddres} /> */}
    </View>
  );
};

export default Extra;

const styles = StyleSheet.create({});

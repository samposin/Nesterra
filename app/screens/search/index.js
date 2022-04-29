import React, {useState} from 'react';
import {Dimensions, LayoutAnimation, Platform} from 'react-native';

// import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
import MapView from './lib/ClusteredMapView';
import SearchA from './Search';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function getRandomLatitude(min = 48, max = 100) {
  return Math.random() * (max - min) + min;
}

function getRandomLongitude(min = 14, max = 24) {
  return Math.random() * (max - min) + min;
}

import {connect, useSelector} from 'react-redux';

const Search = () => {
  const {coordinates} = useSelector(state => state.coordinates);
  const {lat, lng} = useSelector(state => state.setLatLang);

  const INITIAL_REGION = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 8.5,
    longitudeDelta: 8.5,
  };
  const currentRegion1 = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  const _generateMarkers = count => {
    const markers = [];

    count.map((item, i) => {
      markers.push(
        <Marker
          key={i}
          coordinate={{
            latitude: item.Latitude,
            longitude: item.Longitude,
          }}
        />,
      );
    });
    // for (let i = 0; i < count.length; i++) {
    //   markers.push(
    //     <Marker
    //       key={i}
    //       coordinate={{
    //         latitude: c,
    //         longitude: getRandomLongitude(),
    //       }}
    //     />,
    //   );
    // }

    return markers;
  };

  return (
    <>
      <MapView
        initialRegion={INITIAL_REGION}
        currentRegion1={currentRegion1}
        style={{flex: 1}}>
        {_generateMarkers(coordinates)}
      </MapView>
      {/* <SearchA /> */}
    </>
  );
};

export default Search;

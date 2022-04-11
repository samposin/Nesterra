import React, {useEffect, useState, useRef, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  Dimensions,
  PanResponder,
  ActivityIndicator,
  Image,
  Animated,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Search from './Search';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useIsFocused} from '@react-navigation/native';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();
import {data} from './data';
import ModalView from './ModalView';
import CustomMarker from './CustomMarker';
import Profile from '../profile';
import {Base_url} from '../../key';
import {get_coordinates} from '../../actions/coordinates';
import {connect, useSelector} from 'react-redux';

import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Explore = ({navigation, get_coordinates}) => {
  const isFocused = useIsFocused();

  const coordinates = useSelector(state => state.coordinates);
  const latlang = useSelector(state => state.setLatLang);
  const mapRef = useRef(null);

  const [markerData, setMarkerData] = useState(null);
  const [latitute, setLatitute] = useState(41.85942);
  const [longitute, setLongitute] = useState(-71.519236);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // added by Dildar Khan start
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['30%', '90%'], []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  // added by Dildar Khan end

  const onMapReadyHandler = () => {
    if (Platform.OS === 'ios') {
      mapRef.current.fitToElements(false);
    } else {
      const markersCoordinates = [];

      coordinates.coordinates.forEach(coords => {
        markersCoordinates.push({
          latitude: coords.Latitude,
          longitude: coords.Longitude,
        });
      });
      mapRef.current.fitToCoordinates(markersCoordinates, {
        animated: true,
        edgePadding: {
          top: 200,
          right: 50,
          bottom: 50,
          left: 50,
        },
      });
    }
  };

  useEffect(() => {
    get_coordinates();
  }, []);
  // useEffect(() => {

  //   getLatLong()
  // }, [isFocused]);
  const renderBottomSheet = () => {
    return (
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Bottomsheet contents goes here!</Text>
        </BottomSheetView>
      </BottomSheet>
    );
  };

  return (
    <>
      <StatusBar backgroundColor="#1b5a90" barStyle="light-content" />
      <ModalView modalVisible={modalVisible} />

      <View style={styles.container}>
        <MapView
          ref={mapRef}
          zoomControlEnabled={false}
          zoomEnabled={true}
          zoomTapEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          provider={PROVIDER_GOOGLE}
          style={styles.container}
          region={{
            latitude: latitute,
            longitude: longitute,
            latitudeDelta: 0.0112333,
            longitudeDelta: 5.001233,
          }}
          initialRegion={{
            latitude: 41.85942,
            longitude: -71.519236,
            latitudeDelta: 0.0112333,
            longitudeDelta: 5.001233,
          }}
          onLayout={() =>
            setTimeout(() => {
              onMapReadyHandler();
            }, 5000)
          }>
          <Marker
            title="dummy marker"
            description="just for testing"
            coordinate={{
              latitude: 41.85942,
              longitude: -71.519236,
              latitudeDelta: 0.0112333,
              longitudeDelta: 5.001233,
            }}
            onPress={() => bottomSheetRef.current.snapToIndex(0)}>
            <CustomMarker />
          </Marker>
          {coordinates.coordinates &&
            coordinates.coordinates.map((item, i) => {
              return (
                <Marker
                  key={i}
                  coordinate={{
                    latitude: item.Latitude,
                    longitude: item.Longitude,
                  }}
                  title="Test Title"
                  description="This is the test description"
                  onPress={() => setMarkerData(item)}>
                  <CustomMarker />
                </Marker>
              );
            })}
        </MapView>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Filtter');
          }}
          style={{
            position: 'absolute',
            top: SCREEN_HEIGHT - 252,
            right: 4,
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            backgroundColor: '#1b5a90',
          }}>
          <AntDesign name="menufold" size={28} color="white" />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            top: SCREEN_HEIGHT - 265,
            left: 0,
            width: 150,
            height: 50,
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../images/siteTitle.png')}
              style={{width: '90%', height: 25, resizeMode: 'contain'}}
            />
          </View>
        </View>

        <Search modalVisible={modalVisible} />
        {/* =================search=============== */}
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          height={50}
          style={styles.chipsScrollView}
          contentInset={{
            // iOS only
            top: 0,
            left: 0,
            bottom: 0,
            right: 20,
          }}
          contentContainerStyle={{
            paddingRight: Platform.OS === 'android' ? 20 : 0,
          }}>
          {data.category.map((category, index) => (
            <View
              key={index}
              style={{
                ...styles.chipsItem,
                backgroundColor: category.isVisible ? '#1b5a90' : 'white',
              }}>
              {category.isVisible ? category.icon : null}
              <Text
                style={{
                  color: category.isVisible ? '#ffffff' : '#1b5a90',
                  fontWeight: '800',
                }}>
                {category.name} #
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      {renderBottomSheet()}
    </>
  );
};

export default connect(null, {get_coordinates})(Explore);

const styles = StyleSheet.create({
  searchRight: {
    width: '25%',
    height: '100%',
    borderRadius: 25,
    flexDirection: 'row',
  },
  searchMiddele: {width: '60%', height: '100%'},
  searchLeft: {
    width: '15%',
    height: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    width: '95%',
    position: 'absolute',
    height: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
    top: 15,
    zIndex: 1000,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  bottomUpperTop: {
    height: '40%',
    width: '100%',
  },
  bottomUpperLower: {
    flexDirection: 'row',
    height: '60%',
    width: '100%',
  },
  header: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#1b5a90',
  },
  cIcon: {
    marginRight: 5,
  },
  left: {
    width: '85%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cIcon: {
    marginRight: 5,
  },
  searchBox: {
    // position: 'absolute',
    // marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '92%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 12,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsItem: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 80 : 80,
    paddingHorizontal: 10,
  },

  // added by Dildar Khan start
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  // added by Dildar Khan end
});

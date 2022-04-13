import React, {useEffect, useState, useRef, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Search from './Search';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();
import {data} from './data';
import ModalView from './ModalView';
import CustomMarker from './CustomMarker';
import Profile from '../profile';

import {get_coordinates, marker_seleted} from '../../actions/coordinates';
import {connect, useSelector} from 'react-redux';
import {setLatLng} from '../../actions/setLatLang';
import BottomSheet from '@gorhom/bottom-sheet';
import {get_location_details} from '../../actions/loacationDetails';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const Explore = ({
  navigation,
  get_coordinates,
  get_location_details,
  marker_seleted,
  setLatLng,
}) => {
  const {coordinates} = useSelector(state => state.coordinates);
  const {lat, lng} = useSelector(state => state.setLatLang);
  const location_data = useSelector(state => state.location_details.data);

  ///state data
  // console.log(lat, lng, 'latlang');

  const mapRef = useRef(null);
  const speechRef = useRef(null);
  const [markerData, setMarkerData] = useState(null);
  const [latitute, setLatitute] = useState(41.85942);
  const [longitute, setLongitute] = useState(-71.519236);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [marginBottom, setMarginBottom] = useState(100);
  const [satellite, setSatellite] = useState('standard');
  const [aHeight, setAheight] = useState(new Animated.Value(40));
  const [aWidth, setaWidth] = useState(new Animated.Value(40));
  const [animatioVal, setanimatioVal] = useState(false);
  const [mapType, setMapType] = useState(false);

  const animationChange = () => {
    Animated.timing(aHeight, {
      toValue: 230,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const animationChangeoff = () => {
    Animated.timing(aHeight, {
      toValue: 40,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };
  // added by Dildar Khan start
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['20%', '100%'], []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  // added by Dildar Khan end
  //anup
  const onRechange = (lat, lng) => {
    setLatitute(lat);
    setLongitute(lng);
  };

  const onMapReadyHandler = () => {
    if (Platform.OS === 'ios') {
      mapRef.current.fitToElements(false);
    } else {
      const markersCoordinates = [];

      coordinates.forEach(coords => {
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
        handleIndicatorStyle={{
          backgroundColor: '#757575',
          height: 2.5,
          opacity: 0.5,
        }}
        enabledInnerScrolling={true}
        enabledContentGestureInteraction={false}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        // onChange={handleSheetChanges}
      >
        <View style={{width: '100%', height: 110}}>
          {location_data ? (
            <>
              <View style={{...styles.bottomUpperTop}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="#1b5a90"
                    style={{marginTop: 5}}
                  />
                  <Text style={{color: '#1b5a90'}}>
                    {location_data?.FullAddress}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="black"
                  />
                  <Text style={{color: '#1b5a90'}}>
                    {location_data.Address}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  ...styles.bottomUpperLower,
                  marginTop: 3,
                  paddingHorizontal: 5,
                }}>
                <View style={styles.buttonUpperLowerTop}>
                  {/* <Text style={styles.textStyles}>
                Site Status:
                <Text style={{color: '#8cff84', fontWeight: 'bold'}}>
                  {' '}
                  Active{' '}
                </Text>{' '}
              </Text> */}
                  <Text style={{...styles.textStyles, margin: 3}}>
                    Site Type:
                    <Text> {location_data.Concat_LocationTypes} </Text>{' '}
                  </Text>
                  {/* <Text style={styles.textStyles}>
                Asset Cost(Y):<Text> :$26808 </Text>{' '}
              </Text> */}
                </View>
                {/* <View style={{width: '50%', height: '100%', paddingLeft: 20}}>
              <Text style={styles.textStyles}>Property Cost (Y):$0:00</Text>
              <Text style={styles.textStyles}>Circuits:9 </Text>
              <Text style={styles.textStyles}>Devices:5 </Text>
            </View> */}
              </View>
            </>
          ) : null}
        </View>
        <Profile />
      </BottomSheet>
    );
  };

  return (
    <>
      <StatusBar backgroundColor="#1b5a90" barStyle="light-content" />
      <ModalView modalVisible={modalVisible} />

      <View style={styles.container}>
        <MapView
          showsPointsOfInterest={true}
          showsUserLocation={true}
          mapType={satellite}
          ref={mapRef}
          zoomControlEnabled={false}
          zoomEnabled={true}
          zoomTapEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          showsMyLocationButton={true}
          showsCompass={true}
          followsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={{...styles.container, marginBottom}}
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.0112333,
            longitudeDelta: 5.001233,
          }}
          initialRegion={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.0112333,
            longitudeDelta: 5.001233,
          }}
          onMapReady={() => {
            onMapReadyHandler();
            setMarginBottom(0);
          }}
          onLayout={() =>
            setTimeout(() => {
              // onMapReadyHandler();
            }, 2000)
          }>
          {coordinates &&
            coordinates.map((item, i) => {
              return (
                <Marker
                  key={i}
                  coordinate={{
                    latitude: item.Latitude,
                    longitude: item.Longitude,
                  }}
                  onPress={() => {
                    bottomSheetRef.current.snapToIndex(0);
                    get_location_details(item.Location_ID);
                    marker_seleted(i);
                    const lat = item.Latitude;
                    const lng = item.Longitude;
                    // console.log(latt, langg);
                    setLatLng({lat, lng});
                    // setMarkerData(item);
                  }}>
                  <CustomMarker isChecked={item.isChecked} />
                </Marker>
              );
            })}
        </MapView>

        <Animated.View
          style={{
            position: 'absolute',
            top: 140,
            right: 8,
            width: aHeight,
            height: aHeight,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            onPress={() => {
              setanimatioVal(true);

              animationChange();

              //navigation.navigate('Filtter');
            }}>
            {!animatioVal ? (
              <MaterialCommunityIcons
                name="layers-outline"
                size={24}
                color="black"
              />
            ) : (
              <View style={styles.mapTypeView}>
                {/* ============map Type view============= */}
                <View
                  style={{
                    ...styles.mapTypeViewUpper,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '20%',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{fontWeight: '700', marginLeft: 10, marginTop: 5}}>
                      Map Type
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '80%',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setanimatioVal(false);
                        animationChangeoff();
                        setSatellite('hybrid');
                      }}
                      style={{
                        ...styles.mapTypeImageWrap,
                      }}>
                      <View
                        style={{
                          ...styles.imageView,
                          borderColor:
                            satellite === 'hybrid' ? '#1b5a90' : 'white',
                        }}>
                        <Image
                          source={require('../../images/satellite.jpg')}
                          style={styles.mapTypeImage}
                        />
                      </View>
                      <Text
                        style={{
                          color: satellite === 'hybrid' ? '#1b5a90' : 'black',
                        }}>
                        Hybrid
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setanimatioVal(false);
                        animationChangeoff();
                        setSatellite('standard');
                      }}
                      style={{
                        ...styles.mapTypeImageWrap,
                      }}>
                      <View
                        style={{
                          ...styles.imageView,
                          borderColor:
                            satellite === 'standard' ? '#1b5a90' : 'white',
                        }}>
                        <Image
                          source={require('../../images/defaultMap.png')}
                          style={styles.mapTypeImage}
                        />
                      </View>
                      <Text
                        style={{
                          color: satellite === 'standard' ? '#1b5a90' : 'black',
                        }}>
                        Standard
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setanimatioVal(false);
                        animationChangeoff();
                        setSatellite('terrain');
                      }}
                      style={styles.mapTypeImageWrap}>
                      <View
                        style={{
                          ...styles.imageView,
                          borderColor:
                            satellite === 'terrain' ? '#1b5a90' : 'white',
                        }}>
                        <Image
                          source={require('../../images/terrain.jpg')}
                          style={styles.mapTypeImage}
                        />
                      </View>
                      <Text
                        style={{
                          color: satellite === 'terrain' ? '#1b5a90' : 'black',
                        }}>
                        Terrain
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* ============map Type view============= */}

                <View style={{...styles.mapTypeViewUpper, paddingTop: 10}}>
                  <View
                    style={{
                      width: '100%',
                      height: '20%',
                    }}>
                    <Text style={{fontWeight: '700', marginLeft: 10}}>
                      {' '}
                      Filtter
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '50%',
                      paddingTop: 5,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setanimatioVal(false);
                        animationChangeoff();

                        navigation.navigate('Filtter');
                      }}
                      style={{
                        width: 50,
                        height: 50,
                        marginLeft: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#1b5a90',
                        borderRadius: 5,
                      }}>
                      <AntDesign name="menufold" size={28} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </TouchableOpacity>
        </Animated.View>

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

        <Search
          modalVisible={modalVisible}
          speechRef={speechRef}
          setModalVisible={setModalVisible}
        />
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

export default connect(null, {
  get_coordinates,
  get_location_details,
  marker_seleted,
  setLatLng,
})(Explore);

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
  mapTypeView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  mapTypeViewUpper: {
    width: '100%',
    height: '50%',

    borderRadius: 5,
  },
  mapTypeImage: {width: 40, height: 40, borderRadius: 5},
  mapTypeImageWrap: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

    borderWidth: 2,
    padding: 3,
  },

  // added by Dildar Khan start
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 10,
  },
  // added by Dildar Khan end
});

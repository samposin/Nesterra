import React, {useEffect, useState, useRef, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  StatusBar,
  Animated,
  Easing,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BottomSheetView from './BottomSheet';
import MapView from 'react-native-map-clustering';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Search from './Search';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MapViewDirections from 'react-native-maps-directions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Geolocation from 'react-native-geolocation-service';
import CustomClusteredMarkers from './components/CustomClusteredMarkers';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import ModalView from './ModalView';

import {get_coordinates, marker_seleted} from '../../actions/coordinates';
import {connect, useSelector} from 'react-redux';
import {setLatLng} from '../../actions/setLatLang';

import {get_location_details} from '../../actions/loacationDetails';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {hasLocationPermission} from '../../utils/AskPermission';
import {LocationKey} from '../../key';
import CustomMarker from '../../components/CustomMarker';
import Category from './Category';
import {clusterImages} from '../../utils/Constants';
import Setting from './Setting';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const Explore = ({
  navigation,
  get_coordinates,
  get_location_details,
  marker_seleted,
  setLatLng,
}) => {
  const {coordinates} = useSelector(state => state.coordinates);
  const {lat, lng} = useSelector(state => state.setLatLang);
  // console.log(coordinates);

  const mapRef = useRef(null);
  const pointStart = useRef(null);
  const speechRef = useRef(null);

  const [latitute, setLatitute] = useState(41.85942);
  const [longitute, setLongitute] = useState(-71.519236);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [marginBottom, setMarginBottom] = useState(100);
  const [satellite, setSatellite] = useState('standard');
  const [aHeight, setAheight] = useState(new Animated.Value(40));
  const [findDirection, setaWidth] = useState(new Animated.Value(0));
  const [animatioVal, setanimatioVal] = useState(false);
  const [inputRotate, setInputRotate] = useState(true);
  const [rotatedIcon, setrotatedIcon] = useState(new Animated.Value(0));
  const [animatioValOff, setanimatioValOff] = useState(false);
  ///cluster color
  const [settingView, setSettingView] = useState(false);

  const [startPoints, setStartPoints] = useState({});
  const [startAddress, setStartAddress] = useState('Choose Start Point');
  const [destinationAddress, setDestinationAddress] =
    useState('Choose Destination');
  const [destinationPoints, setdestinationPoints] = useState({});
  let transformDot = useRef(new Animated.Value(0)).current;
  let transformMap = useRef(new Animated.Value(0)).current;
  let transformX = useRef(new Animated.Value(0)).current;
  let transformX1 = useRef(new Animated.Value(0)).current;

  const transMap = transformMap.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -38],
  });
  const transDot = transformDot.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 38],
  });

  const transX = transformX.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 54],
  });
  const transX1 = transformX1.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 66],
  });

  /// arrow rotated
  // get start points
  const startPoint = (lat, lng) => {
    const startPoints = {
      latitude: lat,
      longitude: lng,
    };
    setStartPoints(startPoints);
    //console.log(startPoints);
    // console.log(startPoints, 'startPoints');
    // console.log(Object.keys(startPoints).length);
  };
  // get destination points
  const destination = (lat, lng) => {
    const destinationPoints = {
      latitude: lat,
      longitude: lng,
    };
    setdestinationPoints(destinationPoints);
    // console.log(destinationPoints, 'destinationPoints');
    // console.log(Object.keys(destinationPoints).length);
  };

  const spin = rotatedIcon.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const rotatedIconchange = () => {
    Animated.timing(rotatedIcon, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(transformX, {
      toValue: 1,
      duration: 200,

      useNativeDriver: true,
    }).start();
    Animated.timing(transformX1, {
      toValue: 0,
      duration: 200,

      useNativeDriver: true,
    }).start();
    Animated.timing(transformDot, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(transformMap, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };
  const rotatedIconAntichange = () => {
    Animated.timing(rotatedIcon, {
      toValue: 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(transformX, {
      toValue: 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(transformX1, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(transformDot, {
      toValue: 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(transformMap, {
      toValue: 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  /// arrow rotated
  const animationChange = () => {
    Animated.timing(aHeight, {
      toValue: 230,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  //find coordinate Animation on
  const animationFindON = () => {
    Animated.timing(findDirection, {
      toValue: 150,
      duration: 200,
      easing: Easing.in(Easing.bounce),
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      setanimatioValOff(true);
    }, 200);
  };
  //find coordinate Animation off
  const animationFindOff = () => {
    Animated.timing(findDirection, {
      toValue: 0,
      duration: 200,
      easing: Easing.out(Easing.bounce),
      useNativeDriver: false,
    }).start();
    setanimatioValOff(false);
    // setTimeout(() => {

    // }, 200);
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
  //cluster change
  const animateToRegion = (lat, lng) => {
    let region = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 7.5,
      longitudeDelta: 7.5,
    };

    mapRef.current.animateToRegion(region, 2000);
  };
  //DEVICE CURRENT LAT LNG GET
  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }
    Geolocation.getCurrentPosition(position => {
      // this.setState({ coords: position.coords, loading: false });

      const region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0112333,
        longitudeDelta: 0.001233,
      };
      mapRef.current.animateToRegion(region, 500);
    });
  };
  useEffect(() => {
    get_coordinates();
  }, []);

  // console.log(clusterRef.current.options.radius);
  // console.log(JSON.stringify(clusterRef.current));

  const [currentRegion, setCurrentRegion] = useState();
  const mapRegionChangeComplete = mapRegion => {
    setCurrentRegion({
      latitude: mapRegion.latitude,
      longitude: mapRegion.longitude,
      latitudeDelta: mapRegion.latitudeDelta,
      longitudeDelta: mapRegion.longitudeDelta,
    });
  };

  const onSearchPress = (data, details = null) => {
    setCurrentRegion({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
    bottomSheetRef.current.close();
  };

  return (
    <>
      {inputRotate ? rotatedIconAntichange() : rotatedIconchange()}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ModalView modalVisible={modalVisible} />

      <View style={styles.container}>
        <MapView
          //showsUserLocation={true}
          // radius={70}
          renderCluster={props => {
            const clusterCounts =
              props.properties.point_count.toString().length;

            return (
              <CustomClusteredMarkers
                key={props.properties.cluster_id}
                tracksViewChanges={false}
                imageSrc={
                  clusterCounts === 1
                    ? clusterImages.cluster1
                    : clusterCounts === 2
                    ? clusterImages.cluster2
                    : clusterCounts === 3
                    ? clusterImages.cluster3
                    : clusterCounts === 4
                    ? clusterImages.cluster4
                    : clusterImages.cluster5
                }
                {...props}
              />
            );
          }}
          preserveClusterPressBehavior={true}
          maxZoom={20}
          mapType={satellite}
          ref={mapRef}
          pitchEnabled={true}
          zoomControlEnabled={false}
          zoomEnabled={true}
          zoomTapEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          showsMyLocationButton={true}
          showsCompass={true}
          followsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={{...styles.container, marginBottom: 50}}
          onRegionChangeComplete={mapRegionChangeComplete}
          region={currentRegion}
          initialRegion={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
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
                <Marker.Animated
                  key={`${item.Latitude}_${item.Longitude}`}
                  coordinate={{
                    latitude: item.Latitude,
                    longitude: item.Longitude,
                  }}
                  tracksViewChanges={false}
                  onPress={() => {
                    bottomSheetRef.current.snapToIndex(0);
                    get_location_details(item.Location_ID);
                    marker_seleted(i);
                    const lat = item.Latitude;
                    const lng = item.Longitude;
                    // console.log(latt, langg);
                    setLatLng({lat, lng});
                    animateToRegion(lat, lng);
                    // setMarkerData(item);
                  }}>
                  <CustomMarker
                    officeType={item.HierarchyLocationType}
                    isChecked={item.isChecked}
                  />
                </Marker.Animated>
              );
            })}
          {Object.keys(startPoints).length > 0 &&
          Object.keys(destinationPoints).length > 0 ? (
            <MapViewDirections
              origin={startPoints}
              destination={destinationPoints}
              apikey={LocationKey} // insert your API Key here
              strokeWidth={6}
              strokeColor="#1b5a90"
              optimizeWaypoints={true}
            />
          ) : null}
        </MapView>
        {/* ===========get Current position=== */}
        <TouchableOpacity onPress={getLocation} style={styles.currentLocation}>
          <MaterialCommunityIcons name="target" size={32} color="black" />
        </TouchableOpacity>
        {/* ===========get Current position=== */}
        {/* ===========Direction=== */}
        <TouchableOpacity
          onPress={animationFindON}
          style={styles.directionButton}>
          <MaterialIcons name="directions" size={24} color="white" />
        </TouchableOpacity>
        {/* ===========Direction=== */}
        {/* ===========find Direction=== */}
        {/* <FindeDirection animatioValOff={animatioValOff}/> */}
        <Animated.View
          style={{
            width: SCREEN_WIDTH,
            height: findDirection,
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 20,
            flexDirection: 'row',
          }}>
          {animatioValOff ? (
            <>
              <View
                style={{
                  width: '20%',
                  height: '100%',

                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '50%',
                    height: '100%',
                    paddingTop: 35,
                    paddingLeft: 10,
                  }}>
                  <TouchableOpacity onPress={animationFindOff}>
                    <Feather name="arrow-left" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: '50%',
                    height: '100%',
                    marginTop: 40,
                  }}>
                  {/* <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 10,
                      borderColor: 'red',
                      borderWidth: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                                    

                  </View> */}
                  <Animated.View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',

                      transform: [
                        {
                          translateY: transDot,
                        },
                      ],
                    }}>
                    <FontAwesome5 name="dot-circle" size={12} color="black" />
                  </Animated.View>
                  <Animated.View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <MaterialCommunityIcons
                      name="dots-vertical"
                      size={22}
                      color="gray"
                    />
                  </Animated.View>
                  <Animated.View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',

                      transform: [
                        {
                          translateY: transMap,
                        },
                      ],
                    }}>
                    <Feather name="map-pin" size={16} color="red" />
                  </Animated.View>
                </View>
              </View>
              <View
                style={{
                  width: '60%',
                  height: '100%',
                  marginTop: StatusBar.currentHeight / 2,
                  position: 'relative',
                }}>
                <Animated.View
                  style={{
                    position: 'absolute',

                    top: 3,
                    left: 2,
                    paddingLeft: 2,
                    backgroundColor: 'red',
                    transform: [
                      {
                        translateY: transX,
                      },
                    ],
                  }}>
                  <TextInput
                    ref={pointStart}
                    placeholder={startAddress}
                    style={{
                      borderColor: 'red',
                      borderWidth: 1,
                      position: 'absolute',
                      top: 0,
                      paddingVertical: 4,
                      borderRadius: 25,
                      width: 240,
                      paddingLeft: 10,
                    }}
                    onFocus={() =>
                      navigation.navigate('StartPoint', {
                        startPoint: startPoint,
                        setStartAddress: setStartAddress,
                      })
                    }
                  />
                </Animated.View>
                <Animated.View
                  style={{
                    position: 'absolute',
                    top: 30,
                    left: 2,
                    backgroundColor: 'red',
                    transform: [
                      {
                        translateY: transX1,
                      },
                    ],
                  }}>
                  <TextInput
                    placeholder={destinationAddress}
                    style={{
                      borderColor: 'green',
                      borderWidth: 1,
                      borderRadius: 25,
                      position: 'absolute',
                      bottom: 0,
                      width: 240,
                      paddingVertical: 4,
                      paddingLeft: 10,
                    }}
                    onFocus={() =>
                      navigation.navigate('DestinationPoint', {
                        destination: destination,
                        setDestinationAddress: setDestinationAddress,
                      })
                    }
                  />
                </Animated.View>
              </View>
              <View
                style={{
                  width: '20%',
                  height: '100%',

                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setInputRotate(!inputRotate);
                    //  rotatedIconchange();
                  }}>
                  <Animated.View
                    style={{
                      width: 40,
                      height: 40,
                      flexDirection: 'row',
                      alignItems: 'center',
                      transform: [{rotate: spin}],
                    }}>
                    {/* <AntDesign
                      name="arrowdown"
                      size={24}
                      style={{backgroundColor: 'red'}}
                      color="black"
                    />
                    <AntDesign name="arrowup" size={24} color="black" /> */}
                    <Image
                      style={{width: 40, height: 40}}
                      source={require('../../images/rotated.png')}
                    />
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </>
          ) : null}
        </Animated.View>
        {/* ===========find Direction=== */}

        <Animated.View
          style={{
            position: 'absolute',
            top: 170,
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
            top: 120,
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
        {/* =================search=============== */}
        <Search
          onPress={onSearchPress}
          settingView={settingView}
          setSettingView={setSettingView}
        />

        {/* =================search=============== */}
        {/* =================Category=============== */}
        <Category />
        {/* =================Category=============== */}
      </View>
      {/* =================BottomSheetView=============== */}
      <BottomSheetView bottomSheetRef={bottomSheetRef} />
      {/* =================Setting=============== */}
      {settingView ? (
        <Setting
          settingView={settingView}
          navigation={navigation}
          setSettingView={setSettingView}
        />
      ) : null}
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
  currentLocation: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 120,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  directionButton: {
    width: 50,
    height: 50,
    backgroundColor: '#4676fc',
    position: 'absolute',
    bottom: 60,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
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

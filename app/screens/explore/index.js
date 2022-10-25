import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  StatusBar,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import BottomSheetView from './BottomSheet';
import MapView from 'react-native-map-clustering';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import Search from './Search';

import MapViewDirections from 'react-native-maps-directions';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Geolocation from 'react-native-geolocation-service';
import CustomClusteredMarkers from './components/CustomClusteredMarkers';
import {LogBox} from 'react-native';
import {get_order} from '../../actions/order';

// import Sound from 'react-native-sound';
var Sound = require('react-native-sound');

LogBox.ignoreLogs(['new NativeEventEmitter']);

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import ModalView from './ModalView';

import {get_coordinates, marker_seleted} from '../../actions/coordinates';
import {connect, useDispatch, useSelector} from 'react-redux';
import {setLatLng} from '../../actions/setLatLang';

import {get_location_details} from '../../actions/loacationDetails';

import {hasLocationPermission} from '../../utils/AskPermission';
import {LocationKey} from '../../key';
import CustomMarker from '../../components/CustomMarker';
import Category from './Category';

import Setting from './Setting';

import {photo_url_from_map} from '../../actions/photpUrlFromMap';

import Lodder from '../../components/lodder';
import {get_all_devices_inventory} from '../../actions/devicesInventory';
import {getInventoryCircuit} from '../../actions/circuitInventory';
import Voice from '@react-native-community/voice';
import CircuitDetailsExplore from '../../components/BottomSheetTab/Circuits/CircuitDetailsExplore';
import DeviceDetailsExplore from '../../components/BottomSheetTab/Devices/DeviceDetailsExplore';
import OrderDetailsExplore from '../../components/BottomSheetTab/Orders/OrderDetailsExplore';
import AtmsDetails from '../../components/BottomSheetTab/Atms/AtmsDetails';

import SearchComponet from './components/Search/SearchComponet';
import {soundePlay} from '../../components/helper/soundHelper';
import {getAllAtms} from './../../actions/ATMS/index';
import MapTypeAndFilterButtom from './components/MapTypeAndFilterButtom/index';

import {dataMar} from '../../utils/MarkerData1';
import {getLocationInfo} from './../../actions/LocartionInfo/index';
import {SET_LAT_LNG} from '../../actions/action.type';

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

  getLocationInfo,
}) => {
  const atmdDetailsRef = useRef(null);
  const {mapType} = useSelector(state => state.MapType);
  // Sound.setCategory('Playback');
  // const mu = require('../../images/first.wav');
  // const soundePlay = mu => {
  //   //   alert('ddsffsda');

  //   const soundVar = new Sound(mu, Sound.MAIN_BUNDLE, error => {
  //     if (error) {
  //       console.log(error);
  //       console.log('NOT ABLE TO PLAY SOUND');
  //     }
  //   });

  //   soundVar.play(success => {
  //     if (success) {
  //       console.log('successfully finished playing');
  //     } else {
  //       console.log('playback failed due to audio decoding errors');
  //     }
  //   });
  //   soundVar.release();
  // };

  const [modalVisible1, setModalVisible1] = useState(false);

  //voice
  const onSpeechStartHandler = e => {
    console.log('start handler==>>>', e);
  };
  const onSpeechEndHandler = async e => {
    if (e.error === false) {
      try {
        await Voice.stop();
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onSpeechResultsHandler = e => {
    // console.log(modalVisible, 'dd');
    // console.log(e, 'loctaion');
    setlocationText(e.value[0]);

    const voiceText = find(e.value[0]);
    googlePlacesRef.current?.setAddressText(e.value[0]);
    // googlePlacesRef.current?.focus();

    // setTimeout(() => {
    //   if (!voiceText) {
    //     setModalVisible(false);
    //     setlocationText('Place Not Found')
    //      console.log('madan');
    //   }

    // }, 5000);
  };
  let timer = null;
  const stopStartTimeOute = () => {
    // setModalVisible1(false)
    //alert(123)
    clearTimeout(startTimeOute);
    // console.log('sec');
    // clearTimeout(startTimeOute)
    // startTimeOute()
    timer = null;
  };
  const startTimeOute = () => {
    timer = setTimeout(() => {
      if (!locationText) {
        setModalVisible1(true);
        setlocationText('');
        // setModalVisible(false)
        // console.log('object');
      }
    }, 10000);
  };

  const startRecording = async () => {
    try {
      setModalVisible(true);
      setModalVisible1(false);
      await Voice.start('en-Us');
    } catch (error) {
      console.log('error raised', error);
    }
  };
  const find = data => {
    Geocoder.init(`${LocationKey}`);
    Geocoder.from(data)
      .then(json => {
        // console.log(json);

        var location = json.results[0].geometry.location;

        const {lat, lng} = location;
        onSearchPress(lat, lng);
        setModalVisible(false);
        setlocationText('');
      })
      .catch(error => {
        console.warn(error, 'ffd');
        setModalVisible(false);
        setlocationText('');
      });
  };
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  //voice

  const dispatch = useDispatch();
  // const {coordinates} = useSelector(state => state.coordinates);
  const {lat, lng} = useSelector(state => state.setLatLang);
  // console.log(coordinates, 'ddd');
  const [cord, setCord] = useState([]);
  const mapRef = useRef(null);

  // const picRef = useRef(null);
  const pointStart = useRef(null);
  const [detailsLoder, setDetailsLoder] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [locationText, setlocationText] = useState('');

  const [aHeight, setAheight] = useState(new Animated.Value(40));
  const [findDirection, setaWidth] = useState(new Animated.Value(0));
  const [animatioVal, setanimatioVal] = useState(false);
  const [inputRotate, setInputRotate] = useState(true);
  const [rotatedIcon, setrotatedIcon] = useState(new Animated.Value(0));
  const [animatioValOff, setanimatioValOff] = useState(false);
  ///cluster color
  const [settingView, setSettingView] = useState(false);
  const [catShow, setCatShow] = useState(true);
  const [startPoints, setStartPoints] = useState({});
  const [startAddress, setStartAddress] = useState('Choose Start Point');
  const [destinationAddress, setDestinationAddress] =
    useState('Choose Destination');
  const [destinationPoints, setdestinationPoints] = useState({});
  let transformDot = useRef(new Animated.Value(0)).current;
  let transformMap = useRef(new Animated.Value(0)).current;
  let transformX = useRef(new Animated.Value(0)).current;
  let transformX1 = useRef(new Animated.Value(0)).current;
  const [currentRegion, setCurrentRegion] = useState({
    latitude: 42.361145,
    longitude: -71.057083,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const origin = {latitude: 42.3601, longitude: 71.0589};
  const destination1 = {latitude: 40.7128, longitude: 74.006};
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
  //

  /// arrow rotated
  // get start points
  const startPoint = (lat, lng) => {
    // console.log(lat, lng, 'lat, lng');
    const startPoints = {
      latitude: lat,
      longitude: lng,
    };
    setStartPoints(startPoints);
  };
  // get destination points
  const destination = (lat, lng) => {
    // console.log(lat, lng, 'f');
    const destinationPoints = {
      latitude: lat,
      longitude: lng,
    };
    setdestinationPoints(destinationPoints);
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
      toValue: 130,
      duration: 200,
      easing: Easing.in(Easing.bounce),
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      setanimatioValOff(true);
    }, 0);
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

  const bottomSheetRefImage = useRef(null);
  const cirCuitRefExplore = useRef(null);
  const deviceRefExplore = useRef(null);
  const orderRefExplore = useRef(null);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  // added by Dildar Khan end
  //anup

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }
    Geolocation.getCurrentPosition(position => {
      // this.setState({ coords: position.coords, loading: false });
      // console.log(position);
      const region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0112333,
        longitudeDelta: 0.001233,
      };
      mapRef.current.animateToRegion(region, 500);
    });
  };
  // useEffect(() => {
  //   get_coordinates();
  // }, []);

  const animateToRegion = region => {
    mapRef.current.animateToRegion(region, 2000);
  };
  const onSearchPress = (lat, lng) => {
    animateToRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });

    bottomSheetRef.current.close();
  };
  const markerZoom = (lat, lng) => {
    animateToRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    });

    bottomSheetRef.current.close();
  };

  const onLayoutMap = () => {
    mapRef.current.animateCamera({
      center: {
        currentRegion,
      },
      heading: 0,
      pitch: 180,
    });
  };
  const [indexZ, settIndexZ] = useState(2);
  const [marKerType, setMarkerType] = useState(false);

  const markerChange = id => {
    // cord, setCord

    let lisdata = dataMar.map(item => {
      let itm = {...item, isChecked: false};
      return itm;
    });
    lisdata[id].isChecked = true;
    // console.log(lisdata[id], 'oo');
    setCord(lisdata);
    // setMarkerType(false);
  };
  const getChange = marker => {
    let marker1 = marker.map(item => {
      let itm = {...item, isChecked: false};
      return itm;
    });

    setCord(marker1);
  };
  const filterData1 = data => {
    if (data == 'All') {
      setCord(dataMar);
    } else {
      const fdata = dataMar.filter(function (item) {
        return item.LocationStatusDesc.toLowerCase() === data.toLowerCase();
      });

      setCord(fdata);
    }
  };
  const filterData = data => {
    const fdata = dataMar.filter(function (item) {
      return item.HierarchyLocationType.toLowerCase() === data.toLowerCase();
    });
    // console.log(cord.length, fdata);
    setCord(fdata);
  };
  const allDataa = () => {
    getChange(dataMar);
  };
  const setLatLang = (lat, lng) => {
    dispatch({
      type: SET_LAT_LNG,
      payload: {
        lat: lat,
        lng: lng,
      },
    });
  };
  const searchAddress = data => {
    if (data) {
      const dataAdd = dataMar.filter(item => {
        return item.FullAddress.toLowerCase() === data.toLowerCase();
      });
      setCord(dataAdd);
    } else {
      setCord(dataMar);
    }
  };
  const searchBranch = data => {
    if (data) {
      const dataAdd = dataMar.filter(item => {
        return item.Branch_ID.toLowerCase() === data.toLowerCase();
      });
      setCord(dataAdd);
    } else {
      setCord(dataMar);
    }
  };

  useEffect(() => {
    getChange(dataMar);
  }, []);

  return (
    <>
      {inputRotate ? rotatedIconAntichange() : rotatedIconchange()}

      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {/* {modalVisible ? (
        <ModalView
          modalVisible={modalVisible}
          catShow={catShow}
          locationText={locationText}
          setModalVisible={setModalVisible}
        />
      ) : null} */}
      {/* =======Voice Modal======== */}
      {modalVisible ? (
        <ModalView
          stopStartTimeOute={stopStartTimeOute}
          startRecording={startRecording}
          startTimeOute={startTimeOute}
          modalVisible={modalVisible}
          modalVisible1={modalVisible1}
          catShow={catShow}
          locationText={locationText}
          setModalVisible={setModalVisible}
          setModalVisible1={setModalVisible1}
          bottomSheetRef={bottomSheetRef}
          setlocationText={setlocationText}
        />
      ) : null}

      {/* =======Voice Modal======== */}
      <View style={styles.container}>
        <MapView
          renderCluster={props => {
            const clusterCounts =
              props.properties.point_count.toString().length;

            return (
              <CustomClusteredMarkers
                key={props.properties.cluster_id}
                tracksViewChanges={false}
                imageSrc={
                  clusterCounts === 1
                    ? '#0099cc'
                    : clusterCounts === 2
                    ? '#669900'
                    : clusterCounts === 3
                    ? '#f3a54f'
                    : '#bb271a'
                }
                textCount={
                  clusterCounts === 1
                    ? '10+'
                    : clusterCounts === 2
                    ? '50+'
                    : clusterCounts === 3
                    ? '100+'
                    : '200+'
                }
                {...props}
              />
            );
          }}
          maxZoomLevel={20}
          minZoomLevel={0}
          radius={50}
          style={styles.map}
          initialRegion={currentRegion}
          ref={mapRef}
          Provider={MapView.PROVIDER_GOOGLE}
          zoomControlEnabled={false}
          zoomEnabled={true}
          zoomTapEnabled={true}
          animationEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          pitchEnabled={true}
          showsMyLocationButton={false}
          scrollDuringRotateOrZoomEnabled={true}
          preserveClusterPressBehavior={true}
          showsUserLocation={true}
          userLocationPriority={'high'}
          mapType={mapType}
          onLayout={onLayoutMap}>
          {cord &&
            cord.map((item, i) => {
              // console.log(item.SubLocationType);
              return (
                <Marker.Animated
                  key={`${item.Latitude}_${item.Longitude}`}
                  coordinate={{
                    latitude: item.Latitude,
                    longitude: item.Longitude,
                  }}
                  tracksViewChanges={true}
                  onPress={() => {
                    setIsLoading(true);
                    get_location_details({
                      id: item.Location_ID,

                      setIsLoading,
                      bottomSheetRef,
                    });
                    markerZoom(item.Latitude, item.Longitude);
                    // settIndexZ(0);

                    // bottomSheetRefImage.current.close();

                    // marker_seleted(i);
                    // get_order(item.Location_ID);
                    // getAllAtms(item.Location_ID);
                    // getInventoryCircuit(item.Location_ID);
                    // get_all_devices_inventory(item.Location_ID);
                    getLocationInfo(item.Location_ID);

                    const lat = item.Latitude;
                    const lng = item.Longitude;
                    // bottomSheetRef.current.snapToIndex(2);
                    // setLatLng({lat, lng});
                    // animateToRegion(lat, lng);
                    // fetchNearestPlacesFromGoogle(lat, lng);
                    setLatLang(item.Latitude, item.Longitude);

                    markerChange(i);
                  }}>
                  <CustomMarker
                    mark={item.isChecked}
                    officeType={item.HierarchyLocationType}
                  />
                </Marker.Animated>
              );
            })}
          {/* <MapViewDirections
            origin={origin}
            destination={destination1}
            apikey={LocationKey} // insert your API Key here
            strokeWidth={6}
            strokeColor="#1b5a90"
            optimizeWaypoints={true}
          /> */}
          {/* {Object.keys(startPoints).length > 0 &&
          Object.keys(destinationPoints).length > 0 ? (
            <MapViewDirections
              origin={startPoints}
              destination={destinationPoints}
              apikey={LocationKey} // insert your API Key here
              strokeWidth={6}
              strokeColor="#1b5a90"
              optimizeWaypoints={true}
            />
          ) : null} */}
        </MapView>
        {/* ===========get Current position=== */}
        <MapTypeAndFilterButtom filterData={filterData1} />
        <TouchableOpacity onPress={getLocation} style={styles.currentLocation}>
          <MaterialCommunityIcons name="target" size={26} color="black" />
        </TouchableOpacity>
        {/* ===========get Current position=== */}
        {/* ===========Direction=== */}
        {/* <TouchableOpacity
          onPress={animationFindON}
          // onPress={() => {
          //   alert('dd');
          //   console.log('first');
          //   bottomSheetRefImage.current.snapToIndex(0);
          // }}
          style={styles.directionButton}>
          <MaterialIcons name="directions" size={24} color="white" />
        </TouchableOpacity> */}
        {/* ===========Direction=== */}
        {/* ===========find Direction=== */}
        {/* <FindeDirection animatioValOff={animatioValOff} /> */}
        {/* <Animated.View
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
                  }}>
                  <Animated.View
                    style={{
                      width: 40,
                      height: 40,
                      flexDirection: 'row',
                      alignItems: 'center',
                      transform: [{rotate: spin}],
                    }}>
                    <Image
                      style={{width: 40, height: 40}}
                      source={require('../../images/rotated.png')}
                    />
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </>
          ) : null}
        </Animated.View> */}
        {/* ===========find Direction=== */}
        {/* =================Map Type Change=============== */}
        {/* {animatioVal ? (
          <TouchableOpacity
            onPress={() => {
              setanimatioVal(false);
              animationChangeoff();
            }}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'black',
              opacity: 0.1,

              zIndex: 1,
            }}></TouchableOpacity>
        ) : null} */}

        {/* <Animated.View
          style={{
            position: 'absolute',
            top: 200,
            right: 8,
            width: aHeight,
            height: aHeight,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            backgroundColor: 'white',
            zIndex: indexZ,
          }}>
          <TouchableOpacity
            onPress={() => {
              setanimatioVal(true);
              settIndexZ(2);
              animationChange();
            }}>
            {!animatioVal ? (
              <Ionicons
                name="md-layers"
                size={24}
                color={animatioVal ? 'white' : 'black'}
              />
            ) : (
              <>
                <View style={styles.mapTypeView}>
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
                        style={{
                          fontWeight: '700',
                          marginLeft: 10,
                          marginTop: 5,
                        }}>
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
                            color:
                              satellite === 'standard' ? '#1b5a90' : 'black',
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
                            color:
                              satellite === 'terrain' ? '#1b5a90' : 'black',
                          }}>
                          Terrain
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

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
              </>
            )}
          </TouchableOpacity>
        </Animated.View> */}
        {/*      */}

        <View
          style={{
            position: 'absolute',
            top: 30,
            left: 0,
            width: '100%',
            height: 50,
            flexDirection: 'row',
          }}>
          <View style={styles.titleView}>
            <Image
              source={require('../../images/siteTitle.png')}
              style={{width: '90%', height: 25, resizeMode: 'contain'}}
            />
          </View>
          <View
            style={{
              width: '20%',
              height: '100%',

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}>
              for
            </Text>
          </View>
          <View style={styles.titleView}>
            <Image
              source={require('../../images/banKTitle.png')}
              style={{width: '90%', height: 25, resizeMode: 'contain'}}
            />
          </View>
        </View>
        {/* =================search=============== */}
        {/* <Search
          catShow={setCatShow}
          onPress={onSearchPress}
          setModalVisible={setModalVisible}
          settingView={settingView}
          modalVisible={modalVisible}
          setlocationText={setlocationText}
          setSettingView={setSettingView}
          bottomSheetRefImage={bottomSheetRefImage}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        /> */}
        {/* <Search /> */}
        <SearchComponet
          searchAddress={searchAddress}
          searchBranch={searchBranch}
        />

        {/* =================search=============== */}
        {/* =================Category=============== */}
        {catShow && (
          <Category
            get_coordinates={get_coordinates}
            allDataa={allDataa}
            filterData={filterData}
          />
        )}

        {/* =================Category=============== */}
      </View>
      {/* =================BottomSheetView=============== */}
      <BottomSheetView
        bottomSheetRef={bottomSheetRef}
        catShow={setCatShow}
        cirCuitRefExplore={cirCuitRefExplore}
        deviceRefExplore={deviceRefExplore}
        orderRefExplore={orderRefExplore}
        atmdDetailsRef={atmdDetailsRef}
        setDetailsLoder={setDetailsLoder}
        setMarkerType={setMarkerType}
        marKerType={marKerType}
      />

      {/* <BottomSheetViewImage
        bottomSheetRefImage={bottomSheetRefImage}
        catShow={setCatShow}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      /> */}
      {/* =================Setting=============== */}
      {/* =================DetailsCircuit=============== */}
      <CircuitDetailsExplore
        cirCuitRefExplore={cirCuitRefExplore}
        bottomSheetRef={bottomSheetRef}
      />

      {/* =================DeviceDetailsExplore=============== */}
      <DeviceDetailsExplore
        bottomSheetRef={bottomSheetRef}
        deviceRefExplore={deviceRefExplore}
      />
      <OrderDetailsExplore
        bottomSheetRef={bottomSheetRef}
        orderRefExplore={orderRefExplore}
      />
      <AtmsDetails
        atmdDetailsRef={atmdDetailsRef}
        detailsLoder={detailsLoder}
      />

      {/* =================CircuitDetailsExpolore=============== */}
      {settingView ? (
        <Setting
          settingView={settingView}
          navigation={navigation}
          setSettingView={setSettingView}
        />
      ) : null}
      {isLoading && <Lodder lodding={isLoading} />}
    </>
  );
};

export default connect(null, {
  get_coordinates,
  get_location_details,
  marker_seleted,
  setLatLng,
  photo_url_from_map,
  get_all_devices_inventory,
  get_order,
  getInventoryCircuit,
  getAllAtms,
  getLocationInfo,
})(Explore);

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
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
    width: 40,
    height: 40,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 60,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
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
  titleView: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // added by Dildar Khan end
});

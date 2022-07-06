// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   StatusBar,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import React, {useState, useEffect} from 'react';
// import Entypo from 'react-native-vector-icons/Entypo';

// import {connect, useSelector} from 'react-redux';
// import {useIsFocused} from '@react-navigation/native';
// import ImageLoder from '../../components/lodder/imageLodder';
// import {dataMar} from '../../utils/MarkerData1';

// import {get_all_devices_inventory} from '../../actions/devicesInventory';
// import {getInventoryCircuit} from '../../actions/circuitInventory';

// const Extra = ({
//   getInventory,
//   get_all_devices_inventory,
//   navigation,
//   route,
// }) => {
//   const isFocused = useIsFocused();
//   const renderItem = ({item}) => {
//     return (
//       <TouchableOpacity
//         onPress={() => {
//           get_all_devices_inventory(item.Location_ID);
//           navigation.navigate('DevicesInventory');
//         }}
//         style={styles.tableRow1}>
//         <View style={styles.tableRowColum1}>
//           <Text style={styles.boxText1}>{item.Location_ID}</Text>
//         </View>
//         <View style={styles.tableRowColum1}></View>
//         <View style={styles.tableRowColum1}></View>
//         <View style={styles.tableRowColum1}></View>
//       </TouchableOpacity>
//     );
//   };
//   return (
//     <>
//       <SafeAreaView
//         style={{
//           marginTop: StatusBar.currentHeight,
//           flex: 1,
//         }}>
//         {/* ==============container============== */}

//         <View style={styles.container}>
//           {/* ==============top============== */}
//           <View style={styles.topView}>
//             <View style={styles.topItem1}>
//               <TouchableOpacity onPress={() => navigation.goBack()}>
//                 <Text>
//                   <Entypo name="cross" size={24} color="black" />
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.topItem}>
//               <Text style={{fontWeight: '900', fontSize: 18, color: 'black'}}>
//                 Location
//               </Text>
//             </View>
//             <View style={styles.topItem}>
//               <Text style={{fontWeight: '700', fontSize: 15, color: 'black'}}>
//                 Reset
//               </Text>
//             </View>
//           </View>
//           {/* ==============top============== */}

//           {/* ==============Table============== */}
//           {dataMar.length == 0 ? (
//             <ImageLoder />
//           ) : (
//             <View style={styles.table}>
//               {/* ===================table Tow============== */}
//               <View style={{...styles.tableRow}}>
//                 <View
//                   style={{...styles.tableRowColum, backgroundColor: '#ffffd1'}}>
//                   <Text style={{...styles.boxText, color: 'black'}}>
//                     Loacation Id
//                   </Text>
//                 </View>
//                 <View
//                   style={{
//                     ...styles.tableRowColum,
//                     backgroundColor: '#b3b3b3',
//                   }}></View>
//                 <View
//                   style={{
//                     ...styles.tableRowColum,
//                     backgroundColor: '#b3b3b3',
//                   }}></View>
//                 <View
//                   style={{
//                     ...styles.tableRowColum,
//                     backgroundColor: '#b3b3b3',
//                   }}></View>
//               </View>
//               {/* ===================table Tow============== */}
//               {/* ===================table Tow============== */}
//               <FlatList
//                 data={dataMar}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.Location_ID}
//               />

//               {/* <ScrollView
//                 style={{width: '100%', height: 480}}
//                 showsVerticalScrollIndicator={false}>
//                 {dataMar.map((item, i) => {
//                   return (
//                     <TouchableOpacity
//                       // onPress={() =>
//                       //   navigation.navigate('OrderDetails', {
//                       //     inv_Id: item.Inventory_ID,
//                       //     loca_Id: id,
//                       //   })
//                       // }
//                       key={i}
//                       style={styles.tableRow1}>
//                       <View style={styles.tableRowColum1}>
//                         <Text style={styles.boxText1}>{item.Location_ID}</Text>
//                       </View>
//                       <View style={styles.tableRowColum1}></View>
//                       <View style={styles.tableRowColum1}></View>
//                       <View style={styles.tableRowColum1}></View>
//                     </TouchableOpacity>
//                   );
//                 })}
//               </ScrollView> */}

//               {/* ===================table Tow============== */}
//             </View>
//           )}
//           {/* ==============Table============== */}

//           {/* ==============Container============== */}
//         </View>
//       </SafeAreaView>
//     </>
//   );
// };

// export default connect(null, {getInventoryCircuit, get_all_devices_inventory})(
//   Extra,
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#000000',
//     margin: 10,
//     marginBottom: 50,
//   },
//   topView: {
//     height: 50,
//     width: '100%',
//     flexDirection: 'row',
//   },
//   topItem: {
//     width: '33.33%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   topItem1: {
//     width: '33.33%',
//     height: '100%',
//     justifyContent: 'center',
//     paddingLeft: 10,
//   },

//   ///=========Table
//   table: {
//     width: '100%',
//     paddingHorizontal: 10,
//     alignSelf: 'center',
//     marginTop: 15,
//   },
//   tableRow: {
//     width: '100%',
//     height: 50,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignSelf: 'center',
//   },
//   tableRow1: {
//     width: '100%',
//     height: 100,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignSelf: 'center',
//   },
//   tableRowColum: {
//     width: '23%',
//     height: '100%',
//     marginHorizontal: 2,
//     borderBottomColor: '#73c0b8',
//     borderBottomWidth: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tableRowColumLast: {
//     width: '25%',
//     marginHorizontal: 2,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   boxText: {
//     fontWeight: '700',
//     fontSize: 14,
//     color: 'white',
//   },
//   ///=========Table
//   ///=========data row
//   tableRow1: {
//     width: '100%',
//     height: 40,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignSelf: 'center',
//   },
//   tableRowColum1: {
//     width: '23%',
//     height: '100%',
//     marginHorizontal: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   boxText1: {
//     fontSize: 14,
//     color: '#000000',
//   },
//   ///=========data row
//   ///========Second table
//   secondTable: {
//     width: '95%',
//     marginTop: 20,
//     alignSelf: 'center',
//   },
//   secondTableRow: {
//     width: '100%',
//     height: 30,
//     flexDirection: 'row',
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
//   },
//   secondTableColum: {
//     width: '50%',
//     height: '100%',
//     borderRightColor: 'black',
//     borderRightWidth: 1,
//     paddingLeft: 10,
//     justifyContent: 'center',
//   },
//   ///========Second table
// });
import {StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
// import MapView from 'react-native-map-clustering';
import {hasLocationPermission} from '../../utils/AskPermission';
import Geolocation from 'react-native-geolocation-service';

import SearchAddress from '../../components/searchAddress';
import {connect, useSelector} from 'react-redux';
import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
// import CustomMarker from '../../components/CustomMarker';
import BottomsheetView from './BottomsheetView';
import {get_order} from '../../actions/order';
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
const Extra = ({navigation, get_order}) => {
  const {coordinates} = useSelector(state => state.coordinates);
  // console.log(coordinates, 'first');
  const mapRef = useRef(null);
  const bottomSheetRef = useRef(null);
  const [lat, setLat] = useState(42.340350646);
  const [lng, setLng] = useState(-71.06219976);
  const [currentRegion, setCurrentRegion] = useState({
    latitude: lat,
    longitude: lng,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }
    Geolocation.getCurrentPosition(
      position => {
        // console.log(position.coords.latitude);
        setLat(Number(position.coords.latitude));
        setLng(Number(position.coords.longitude));
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
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
    setLat(lat);
    setLng(lng);
    const region = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
    setCurrentRegion(region);
  };
  const che = () => {
    console.log(currentRegion);
  };
  useEffect(() => {
    // getLocation();
  }, [currentRegion]);
  // Info - Pics - Hours - Circuits - Devices - Others
  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapRef}
        tracksViewChanges={false}
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
        showsUserLocation={true}
        showsCompass={true}
        followsUserLocation={true}
        provider={MapView.PROVIDER_GOOGLE}
        style={{flex: 1}}
        initialRegion={currentRegion}
        region={currentRegion}
        onRegionChange={region => {
          setCurrentRegion(region);
        }}
        // initialRegion={currentRegion}
      >
        {coordinates.map((item, i) => {
          return (
            <Marker
              onPress={() => {
                console.log(item.Location_ID);
                get_order(item.Location_ID);
                navigation.navigate('Orders', {
                  location_ID: item.Location_ID,
                });

                //bottomSheetRef.current.snapToIndex(0);
              }}
              key={i}
              coordinate={{
                latitude: item.Latitude,
                longitude: item.Longitude,
              }}
            />
          );
        })}
      </MapView>
      <SearchAddress goToAddres={goToAddres} />
      <BottomsheetView bottomSheetRef={bottomSheetRef} />
    </View>
  );
};

export default connect(null, {get_order})(Extra);

const styles = StyleSheet.create({});

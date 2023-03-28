import {
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  View,
  Image,
} from 'react-native';
import StreetView from 'react-native-streetview';

import React, {useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {CHANGE_BORDER1} from '../../../../actions/actionType/action.Coordinatefilter.type';
import {dataMar} from '../../../../utils/MarkerData1';

const ZoomMarkers = ({onSearchPress}) => {
  const dispatch = useDispatch();
  const [che, setChange] = useState(null);
  // console.log(che);
  const {regionMarkers} = useSelector(state => state.coordinates);

  // const onViewCallBack = React.useCallback(({viewableItems, changed}) => {
  //   console.log(viewableItems);
  //   // Use viewable items in state or as intended
  //   dispatch({
  //     type: CHANGE_BORDER_BY_LOCATIO_ID,
  //     data: changed[0].Location_ID,
  //   });
  // }, []);
  const onViewableItemsChanged = ({viewableItems}) => {
    const dataa = viewableItems.find(i => i.isViewable == true);

    const location = dataa.item.Location_ID;
    const ddd = dataMar.findIndex(i => i.Location_ID == location);
    let ddD = dataMar.map((item, i) => {
      return {...item, isChecked: false};
    });

    ddD[ddd].isChecked = true;

    dispatch({
      type: CHANGE_BORDER1,
      data: ddD,
    });
    // console.log(
    //   viewableItems[0].item.Latitude,
    //   viewableItems[0].item.Longitude,
    // );
    onSearchPress(dataa.item.Latitude, dataa.item.Longitude);
  };

  const viewabilityConfig = {itemVisiblePercentThreshold: 50};

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        // backgroundColor: 'white',
        height: 150,
        position: 'absolute',
        right: 0,
        bottom: 70,

        justifyContent: 'center',
      }}>
      <FlatList
        horizontal
        data={regionMarkers}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        renderItem={({item, index}) => {
          return (
            <View
              key={index}
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                position: 'relative',
                elevation: 8,
                width: 300,
                height: 200,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                marginHorizontal: 10,
              }}>
              <View
                style={{
                  width: 100,
                  height: 60,
                  backgroundColor: 'yellowgreen',
                  marginBottom: 5,
                }}>
                <StreetView
                  style={styles.streetView}
                  allGesturesEnabled={true}
                  coordinate={{
                    latitude: item.Latitude,
                    longitude: item.Longitude,
                  }}
                  pov={{
                    tilt: parseFloat(0),
                    bearing: parseFloat(0),
                    zoom: parseInt(1),
                  }}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  height: 140,
                  // backgroundColor: 'red',
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    color: 'black',
                    marginTop: 10,
                    marginLeft: 18,
                    fontWeight: 'bold',
                  }}>
                  {item.FullAddress.length > 29
                    ? `${item.FullAddress.substring(0, 30)}...`
                    : item.FullAddress}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    marginTop: 10,
                    marginLeft: 18,
                  }}>
                  <Text style={{color: 'black', fontWeight: '500'}}>
                    Site Type:
                  </Text>
                  {'  '}
                  {item?.SubLocationType !== null &&
                  item?.SubLocationType.length > 2
                    ? `${item?.SubLocationType.substring(0, 5)}...`
                    : item?.SubLocationType}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    marginTop: 10,
                    marginLeft: 18,
                  }}>
                  <Text style={{color: 'black', fontWeight: '500'}}>
                    Site ID:
                  </Text>
                  {'   '}
                  {item.Location_ID}
                </Text>
                <View
                  style={{
                    width: '100%',
                    height: 30,
                    // backgroundColor: 'pink',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      marginLeft: 18,
                      fontWeight: '500',
                    }}>
                    Site Status:
                  </Text>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor:
                        item.LocationStatusDesc == 'Active' ? '#57fd05' : 'red',
                      marginLeft: 20,
                      borderRadius: 10,
                    }}></View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ZoomMarkers;

const styles = StyleSheet.create({
  streetView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

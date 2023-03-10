import {
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  View,
  Image,
} from 'react-native';

import React, {useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  CHANGE_BORDER,
  CHANGE_BORDER_BY_LOCATIO_ID,
} from '../../../../actions/actionType/action.Coordinatefilter.type';

const ZoomMarkers = () => {
  const dispatch = useDispatch();
  const [che, setChange] = useState(null);
  console.log(che);
  const {regionMarkers} = useSelector(state => state.coordinates);
  const _onViewableItemsChanged = ({viewableItems, changed}) => {
    console.log('Visible items are', viewableItems);
    console.log('Changed in this iteration', changed);
    // dispatch({
    //   type: CHANGE_BORDER_BY_LOCATIO_ID,
    //   data: changed[0].Location_ID,
    // });
  };
  const onViewCallBack = React.useCallback(({viewableItems, changed}) => {
    console.log(viewableItems);
    // Use viewable items in state or as intended
    dispatch({
      type: CHANGE_BORDER_BY_LOCATIO_ID,
      data: changed[0].Location_ID,
    });
  }, []);
  const _viewabilityConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  });
  // const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged}]);
  // console.log(regionMarkers, 'zoom');
  const onViewableItemsChanged = ({viewableItems, changed}) => {
    // console.log(JSON.stringify(info), 'pp');
    console.log('Visible items are', viewableItems);
    console.log('Changed in this iteration', changed);
    console.log('here are the chaneges', viewableItems);
    if (changed.length >= 1)
      changed[0].isViewable ? setChange(changed[0].index) : null;
  };

  // 2. create a reference to the function (above)
  const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged}]);

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        // backgroundColor: 'white',
        height: 150,
        position: 'absolute',
        right: 0,
        bottom: 50,

        justifyContent: 'center',
      }}>
      <FlatList
        horizontal
        data={regionMarkers}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 5}}
        // viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}

        // onViewableItemsChanged={onViewCallBack}
        // viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
        // viewabilityConfig={_viewabilityConfig.current}
        // viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
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

                elevation: 8,
                width: 300,
                height: 140,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                marginHorizontal: 10,
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
          );
        }}
      />
    </View>
  );
};

export default ZoomMarkers;

const styles = StyleSheet.create({});

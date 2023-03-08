import {StyleSheet, Text, FlatList, ScrollView, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const ZoomMarkers = () => {
  const {regionMarkers} = useSelector(state => state.coordinates);
  // console.log(regionMarkers, 'zoom');
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
                {item.SubLocationType.length > 15
                  ? `${item.SubLocationType.substring(0, 15)}...`
                  : item.SubLocationType}
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

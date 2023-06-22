import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
  FlatList,
  View,
} from 'react-native';
import React from 'react';

import NoDataViewFlatList from './../../../../../../components/NoDataViewFlatList/index';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';

const Site = ({getsiteId, setRander, setFocusOn1, setPlace}) => {
  // console.log(dataMar)
  const {data} = useSelector(state => state.ExploreSiteId);
  // console.log(data);

  return (
    <View style={{flex: 1, paddingHorizontal: 5}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={data}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item, i}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                getsiteId(item.Location_ID);
                setRander(false);
                setFocusOn1(true);
                setPlace('Search Site ID');
                Keyboard.dismiss();
              }}
              style={{
                width: '100%',
                height: 50,
                paddingVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 0.5,
              }}>
              <View
                style={{
                  width: '10%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="back-in-time" size={24} color="black" />
              </View>
              <View style={{width: '90%', height: '100%'}}>
                <Text style={{marginLeft: 5, color: 'black'}}>
                  {item?.Location_ID}
                  {'  '}
                  {item?.FullAddress.length > 20
                    ? `(${item?.FullAddress.substring(0, 20)})`
                    : `(${item?.FullAddress})`}
                </Text>
                <Text style={{marginLeft: 5, color: 'black'}}>
                  {item?.SubLocationType}
                </Text>
              </View>
              {/* <FontAwesome name="map-marker" size={24} color="black" /> */}
            </TouchableOpacity>
          );
        }}
        ListEmptyComponent={() => {
          return <NoDataViewFlatList />;
        }}
      />
    </View>
  );
};

export default Site;

const styles = StyleSheet.create({});

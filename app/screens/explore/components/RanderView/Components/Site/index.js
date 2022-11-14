import {StyleSheet, Text, FlatList, View} from 'react-native';
import React from 'react';

import NoDataViewFlatList from './../../../../../../components/NoDataViewFlatList/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

const Site = () => {
  // console.log(dataMar)
  const {data} = useSelector(state => state.ExploreSiteId);

  // console.log(data);

  const randerItem = ({item}) => {
    return (
      <View
        style={{
          width: '100%',
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 0.5,
        }}>
        <FontAwesome name="map-marker" size={24} color="black" />
        <Text style={{marginLeft: 15}}>{item.Location_ID}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, paddingHorizontal: 30}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item, i) => i.toString()}
        renderItem={(item, i) => randerItem(item)}
        ListEmptyComponent={() => {
          return <NoDataViewFlatList />;
        }}
      />
    </View>
  );
};

export default Site;

const styles = StyleSheet.create({});

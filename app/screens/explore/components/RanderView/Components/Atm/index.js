import {StyleSheet, Text,FlatList, View} from 'react-native';
import React,{useState, useEffect} from 'react';
import { dataMar } from '../../../../../../utils/MarkerData1';
import NoDataViewFlatList from './../../../../../../components/NoDataViewFlatList/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const Atm = () => {
// console.log(dataMar)
const {data}=useSelector(state=>state.ExploreAtmId)


const randerItem=({item})=>{
  return(
    <>
    {item?.ATM_ID?(
    <View style={{width:'100%', height:40,  flexDirection:'row',alignItems:'center',
    borderBottomWidth:.5, }}>
      <FontAwesome name="map-marker" size={24} color="black" />
    <Text style={{marginLeft:15}}>{item?.ATM_ID}</Text>
    </View>):null}
    </>
  )
}
  return (
    <View style={{flex:1,paddingHorizontal:30}}>
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

export default Atm;

const styles = StyleSheet.create({});

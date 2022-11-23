import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import DataLoder from '../../lodder/DataLoder';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {LocationKey, PhotoUrl} from '../../../key';
const Pics = ({isLoding}) => {
  const navigation = useNavigation();
  const photo = useSelector(state => state.photo_url.photo_url);

  return (
    <>
      {isLoding ? (
        <DataLoder />
      ) : (
        <>
          <View style={styles.container}>
            <BottomSheetFlatList
              numColumns={2}
              showsVerticalScrollIndicator={false}
              data={photo}
              keyExtractor={(item, index) => index}
              renderItem={({item}) => {
                const url = `${PhotoUrl}${item.photo_reference}&key=${LocationKey}`;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('BackGroundCorsoul');
                    }}
                    style={{
                      width: '48%',
                      height: 150,
                      margin: 5,
                      marginRight: 5,
                      borderRadius: 5,
                    }}>
                    <Image
                      source={{
                        uri: url,
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                );
              }}
              contentContainerStyle={{backgroundColor: 'white'}}
            />
            <View style={{height: 70}}></View>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingRight: 3,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
});

export default Pics;

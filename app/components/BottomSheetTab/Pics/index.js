import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';
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
            <View
              style={{
                width: '100%',
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 5,
              }}>
              <View
                style={{
                  width: '23%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text>Filter</Text>
              </View>
              <View
                style={{
                  width: '23%',
                  height: '100%',
                  borderColor: '#007aff',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text>NetWork</Text>
              </View>
              <View
                style={{
                  width: '23%',
                  height: '100%',
                  borderColor: '#007aff',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text>NetWork</Text>
              </View>
              <View
                style={{
                  width: '23%',
                  height: '100%',
                  borderColor: '#007aff',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text>NetWork</Text>
              </View>
            </View>
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

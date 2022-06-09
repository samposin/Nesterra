import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';
import Imagee from './Imagee';
import ImageLoder from '../../lodder/imageLodder';

const Pics = () => {
  const photo = useSelector(state => state.photo_url.photo_url);

  const renderItem = ({item}) => {
    return (
      <>
        <Imagee image={item.photo_reference} />
      </>
    );
  };
  return (
    <View style={styles.container}>
      {photo ? (
        <BottomSheetFlatList
          showsVerticalScrollIndicator={false}
          data={photo}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
          contentContainerStyle={{backgroundColor: 'white'}}
        />
      ) : (
        <ImageLoder />
      )}

      <View style={{height: 70}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    width: 400,
    height: 100,
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});

export default Pics;

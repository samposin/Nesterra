import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
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
          numColumns={2}
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

    paddingRight: 3,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
});

export default Pics;

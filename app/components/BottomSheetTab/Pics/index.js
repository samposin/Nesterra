import React, {useCallback, useRef, useMemo} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';
import Imagee from './Imagee';
import ImageLoder from '../../lodder/imageLodder';

const Pics = () => {
  const photo = useSelector(state => state.photo_url.photo_url);

  return (
    <View style={styles.container}>
      <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        {photo ? (
          photo.map((item, i) => {
            return <Imagee key={i} image={item.photo_reference} />;
          })
        ) : (
          <ImageLoder />
        )}

        <View style={{height: 70}}></View>
      </BottomSheetScrollView>
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

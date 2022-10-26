import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';
import Imagee from './Imagee';
import ImageLoder from '../../lodder/imageLodder';
import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';
import {Image} from 'moti';
import {LocationKey, PhotoUrl} from '../../../key';
import {useNavigation} from '@react-navigation/native';
import DataLoder from '../../lodder/DataLoder';

const Pics = ({picRef, isLoding}) => {
  // console.log(isLoding);
  const navigation = useNavigation();
  const photo = useSelector(state => state.photo_url.photo_url);
  const [visible, setVisible] = React.useState(false);
  const [imgUrl, setImageUrl] = React.useState('');
  // const showModal = () => setVisible(true);
  // const hideModal = () => setVisible(false);
  // console.log(photo, 'dfds');
  const containerStyle = {
    backgroundColor: 'white',
    height: 300,
    width: 400,
    alignSelf: 'center',
    borderRadius: 15,
    padding: 15,
  };
  const renderItem = ({item}) => {
    const url = `${PhotoUrl}${item.photo_reference}&key=${LocationKey}`;

    return (
      <TouchableOpacity
        onPress={() => {
          // setVisible(true);
          // setImageUrl(item.photo_reference);
          navigation.navigate('BackGroundCorsoul');
          // picRef.current.snapToIndex(2);
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
  };

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
              renderItem={renderItem}
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

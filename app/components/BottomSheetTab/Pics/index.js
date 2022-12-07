import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import DataLoder from '../../lodder/DataLoder';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {LocationKey, PhotoUrl} from '../../../key';
import ImageButton from './ImageButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CameraModal from './../../CameraModal/index';

const Pics = ({isLoding, imageAddRef}) => {
  const navigation = useNavigation();
  const photo = useSelector(state => state.photo_url.photo_url);
  const [imagetype, setImageType] = React.useState('Google');
  const [modalVisible, setModalVisible] = React.useState(false);
  const googleImage = () => {
    setImageType('Google');
  };
  const siteImage = () => {
    setImageType('Site');
  };
  const netWorkImage = () => {
    setImageType('Network');
  };
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
                height: 50,
                flexDirection: 'row',
                paddingHorizontal: 5,
                paddingVertical: 2,
                alignItems: 'center',
                backgroundColor: '#f3f2f8',
              }}>
              <Text style={{color: 'black'}}>Filter :</Text>

              <ImageButton
                title="Google"
                onPress={googleImage}
                imagetype={imagetype}
              />
              <ImageButton
                title="Site"
                onPress={siteImage}
                imagetype={imagetype}
              />
              <ImageButton
                title="Network"
                onPress={netWorkImage}
                imagetype={imagetype}
              />
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
            <TouchableOpacity
              onPress={() => {
                imageAddRef.current.snapToIndex(2);
              }}
              style={{
                width: 55,
                height: 25,
                backgroundColor: '#0075f6',
                borderRadius: 5,
                position: 'absolute',
                right: 10,
                bottom: 55,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <CameraModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
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

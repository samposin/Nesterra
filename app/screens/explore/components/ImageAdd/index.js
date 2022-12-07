import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo';
import {RadioButton} from 'react-native-paper';
import CameraModal from '../../../../components/CameraModal';
import {
  getImageFromGallery,
  getImageFromCamera,
} from '../../../../components/CameraModal/imagePickerHelper';

const ImageAdd = ({imageAddRef}) => {
  const snapPoints = useMemo(() => ['10%', '26%', '93%'], []);
  const [checked, setChecked] = React.useState('first');
  const [imageUrl, setImageUrl] = React.useState('');
  // console.log(imageUrl, 'da');

  return (
    <BottomSheet
      handleIndicatorStyle={{
        backgroundColor: '#757575',
        height: 3,
        opacity: 0.5,
      }}
      // handleComponent={() => (
      //   <View style={styles.closeLineContainer}>
      //     <View style={styles.closeLine}>
      //       <SimpleLineIcons name="arrow-up" size={20} color="black" />
      //     </View>
      //   </View>
      // )}
      enabledInnerScrolling={true}
      enabledContentGestureInteraction={false}
      ref={imageAddRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      animateOnMount
      style={{}}
      animatedPosition={true}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
          Add Image
        </Text>
        <TouchableOpacity
          style={styles.closeView}
          onPress={() => {
            imageAddRef.current.close();
          }}>
          <Entypo name="cross" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          getImageFromCamera(setImageUrl);
        }}
        style={{
          width: '90%',
          height: 100,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: 100, height: 100}}>
          {imageUrl ? (
            <Image
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              source={{uri: imageUrl.uri}}
            />
          ) : (
            <Image
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              source={require('../../../../images/nenuImage/File.jpg')}
            />
          )}
        </View>
      </TouchableOpacity>
      <Text
        style={{
          color: 'black',
          marginLeft: 10,
          fontSize: 17,
          fontWeight: 'bold',
        }}>
        Image Type
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            color="#3d69ee"
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text style={{color: 'black'}}>Site</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            color="#3d69ee"
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text style={{color: 'black'}}>Network Design</Text>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          height: 50,
          backgroundColor: '#0472ef',
          alignSelf: 'center',
          position: 'absolute',
          bottom: 60,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          POST
        </Text>
      </View>
    </BottomSheet>
  );
};

export default ImageAdd;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingHorizontal: 10,
  },
  closeView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0472ef',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
});

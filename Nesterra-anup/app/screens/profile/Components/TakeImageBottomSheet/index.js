import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React, {useMemo, useCallback, useState} from 'react';
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RadioButton} from 'react-native-paper';
import CameraModal from '../../../../components/CameraModal';
import {
  getImageFromGallery,
  getImageFromCamera,
} from '../../../../components/CameraModal/imagePickerHelper';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {warinng} from '../../../../components/helper';
import {Base_url1} from '../../../../key';
import Lodder from '../../../../components/lodder';

const TakeImageBottomSheet = ({imageAddRef}) => {
  const location_data = useSelector(state => state?.location_details?.data);
  const snapPoints = useMemo(() => ['5%', '10%', '28%'], []);
  const [ImageType, setChecked] = React.useState('site');
  const [imageUrl, setImageUrl] = React.useState('');
  const [img, setimg] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [index, sedtIndex] = useState(1);

  // console.log(location_data?.Location_ID, 'da');
  // console.log(moment().format('YYYY-MM-DD'));
  // console.log(imageUrl.assets[0].uri, 'imageUrl');
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    [],
  );

  //   const submit = () => {
  //     if (img == '') {
  //       warinng('Chooose An Image');
  //     } else {
  //       let formData = new FormData();
  //       let localUri = imageUrl.uri;
  //       let filename = imageUrl.fileName;
  //       let type = imageUrl.type;
  //       formData.append('Image', {uri: localUri, name: filename, type});
  //       formData.append('ImageType', ImageType);
  //       formData.append('Location_id', location_data?.Location_ID);
  //       formData.append('comment', comment);

  //       formData.append('AuthorEmail', '');
  //       formData.append('DateTime', moment().format('YYYY-MM-DD'));
  //       console.log(JSON.stringify(formData), 'formData');
  //       setIsLoading(true);
  //       fetch(`${Base_url1}/UploadImage`, {
  //         method: 'POST',
  //         body: formData,
  //         headers: {
  //           Accept: 'applicatopn/json',
  //           'content-type': 'multipart/form-data',
  //         },
  //       })
  //         .then(res => {
  //           return res.json();
  //         })
  //         .then(result => {
  //           if (result.includes('https')) {
  //             setImageUrl('');
  //             setimg('');
  //             setComment('');
  //             setIsLoading(false);
  //           }
  //         })
  //         .catch(err => console.log(err));
  //     }
  //   };
  const getCameraImage = () => {
    const data1 = getImageFromCamera(setImageUrl, setimg);
    console.log(data1, 'data1');
    // setimg(imageUrl.assets[0].uri);
  };
  const getGalleryImage = () => {
    const data = getImageFromGallery(setImageUrl, setimg);
    // console.log(data, 'data');
  };

  return (
    <>
      <BottomSheet
        handleIndicatorStyle={{
          backgroundColor: '#757575',
          height: 3,
          opacity: 0.5,
          justifyContent: 'center',
        }}
        // handleComponent={() => (
        //   <View style={styles.closeLineContainer}>
        //     <View style={styles.closeLine}>
        //       <SimpleLineIcons name="arrow-up" size={20} color="black" />
        //     </View>
        //   </View>
        // )}
        backdropComponent={renderBackdrop}
        enabledInnerScrolling={true}
        enabledContentGestureInteraction={false}
        ref={imageAddRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount
        style={{}}
        keyboardBehavior={true}
        animatedPosition={true}>
        {/* ============================= */}

        <TouchableOpacity
          onPress={() => {
            getImageFromCamera();
            imageAddRef.current.close();
          }}>
          <View
            style={{
              ...styles.itemView,
              borderTopColor: 'black',
              borderTopWidth: 0.5,
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              paddingVertical: 6,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '600',
                color: '#0472ef',
              }}>
              Take Photo
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            getImageFromGallery();
            imageAddRef.current.close();
          }}>
          <View
            style={{
              ...styles.itemView,

              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              paddingVertical: 6,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '600',
                color: '#0472ef',
              }}>
              Choose from photos
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.itemView}>
            <Text style={{marginLeft: 15, color: '#0472ef'}}>Cancle</Text>
          </View>
        </TouchableOpacity>

        {/* ============================= */}
      </BottomSheet>

      {isLoading && <Lodder lodding={isLoading} />}
    </>
  );
};

export default TakeImageBottomSheet;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 5,
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
  input: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
    height: 100,
    width: '95%',
    alignSelf: 'center',
  },
  topView: {
    width: '100%',
    height: '80%',
  },
  bottomview: {
    width: '100%',
    height: '20%',

    alignItems: 'center',
  },
  imageView: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 5,
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  radioView: {
    width: '100%',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  inputView: {
    width: '100%',
    height: 100,
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  itemView: {
    // width: '100%',
    // height: 40,
    // backgroundColor: 'green',

    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'center',
  },
});

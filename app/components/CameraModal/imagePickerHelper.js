import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const options = {
  title: ' Choose Image ',
  takePhotoButtonTitle: 'From camera',
  ChooseFromLibraryButtonTitle: 'From Library',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export const getImageFromGallery = () => {
  launchImageLibrary(options, response => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      console.log(response);
      //   setImage(response.assets[0]);
    }
  });
};
export const getImageFromCamera = setImageUrl => {
  launchCamera(options, response => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      //   console.log(setImageUrl);
      // console.log(response.fileName, 'hh', response.path, response.type)
      setImageUrl(response.assets[0]);
      //   console.log(response.assets[0].uri, 'pp');
      //   setImage(response.assets[0]);
      // console.log(response.uri, response.fileName, response.type);
    }
  });
};

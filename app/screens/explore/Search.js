import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Voice from '@react-native-community/voice';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {LocationKey} from '../../key';
import Geocoder from 'react-native-geocoding';
import {useDispatch} from 'react-redux';
import {GET_PHOTO_URL_FROM_SEARCH} from '../../actions/actionType/action.photoMapurl.type';

const Search = ({
  catShow,
  onPress,
  setModalVisible,
  setlocationText,
  modalVisible,
  onSearchPress,
  setSettingView,
  settingView,
  bottomSheetRefImage,
  setIsLoading,
}) => {
  const dispatch = useDispatch();
  const googlePlacesRef = useRef(null);
  const [lactext, setLaction] = useState('');
  const onSpeechStartHandler = e => {
    console.log('start handler==>>>', e);
  };
  const onSpeechEndHandler = async e => {
    if (e.error === false) {
      try {
        await Voice.stop();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onSpeechResultsHandler = e => {
    console.log(modalVisible, 'dd');
    setlocationText(e.value[0]);

    find(e.value[0]);
    googlePlacesRef.current?.setAddressText(e.value[0]);
    // googlePlacesRef.current?.focus();
  };

  const startRecording = async () => {
    try {
      setModalVisible(true);
      await Voice.start('en-Us');
    } catch (error) {
      console.log('error raised', error);
    }
  };
  const find = data => {
    Geocoder.init(`${LocationKey}`);
    Geocoder.from(data)
      .then(json => {
        console.log(json);

        // var location = json.results[0].geometry.location;

        // const {lat, lng} = location;
        // onPress(lat, lng);
        setModalVisible(false);
        setlocationText('');
      })
      .catch(error => console.warn(error));
  };
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  // added by Dildar Khan start
  const renderSearchLeftIcons = () => {
    return (
      <Image
        source={require('../../images/Logo-SmartSite-Color-640px.png')}
        style={styles.leftIconImage}
      />
    );
  };

  const renderSearchRightIcons = () => {
    return (
      <View style={styles.searchRighIcons}>
        {!modalVisible ? (
          <TouchableOpacity onPress={startRecording} style={styles.mr10}>
            <FontAwesome name="microphone" size={26} color="#a3a2a2" />
          </TouchableOpacity>
        ) : (
          <Entypo name="cross" size={22} color="black" style={styles.mr10} />
        )}
        <TouchableOpacity onPress={() => setSettingView(!settingView)}>
          <Image
            source={require('../../images/user.png')}
            style={{
              width: 20,
              height: 23,
              marginRight: 12,
              tintColor: '#b9b7b7',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const changeValue = data => {
    if (data.length == 0) {
      catShow(true);
    } else {
      catShow(false);
    }
  };

  return (
    <GooglePlacesAutocomplete
      ref={googlePlacesRef}
      fetchDetails={true}
      placeholder="Search Location"
      onPress={(data, details = null) => {
        // console.log(details.photos, 'pp');
        setIsLoading(true);
        if (details.photos) {
          dispatch({
            type: GET_PHOTO_URL_FROM_SEARCH,
            payload: {
              data: details.photos,
            },
          });
          setIsLoading(false);
        }

        bottomSheetRefImage.current.snapToIndex(0);
        const {lat, lng} = details.geometry.location;
        catShow(true);
        onPress(lat, lng);
      }}
      textInputProps={{
        onFocus: () => {
          catShow(false);
          bottomSheetRefImage.current?.close();
        },
        onChangeText: text => changeValue(text),
      }}
      query={{
        key: `${LocationKey}`,
        language: 'en',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={300}
      enablePoweredByContainer={false}
      styles={{
        ...styles.googlePlaces,
      }}
      renderLeftButton={renderSearchLeftIcons}
      renderRightButton={renderSearchRightIcons}
    />
  );
};

export default Search;

const styles = StyleSheet.create({
  googlePlaces: {
    container: {
      position: 'absolute',
      width: '95%',
      alignSelf: 'center',
      zIndex: 0,
      marginTop: 80,

      // zIndex: -1,
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 2,
        height: 6,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 29,
    },
    listView: {
      borderBottomWidth: 10,
      borderRadius: 10,
      borderBottomColor: 'white',
      zIndex: 2,
    },
    textInput: {
      paddingTop: 12,
    },
  },
  leftIconImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',

    marginLeft: 10,
  },
  searchRighIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  rightIconImage: {width: 30, height: 30, borderRadius: 15},
  mr10: {marginRight: 18},
});

// added by Dildar Khan end

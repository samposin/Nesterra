import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
// import Voice from '@react-native-voice/voice';
import Voice from '@react-native-community/voice';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {LocationKey} from '../../key';
import {setLatLng} from '../../actions/setLatLang';
import {connect, useSelector} from 'react-redux';

const Search = ({
  modalVisible,
  navigation,
  setModalVisible,
  setLatLng,
  onRechange,
  speechRef,
  onPress,
  bottomSheetRef,
}) => {
  const googlePlacesRef = useRef(null);

  const onSpeechStartHandler = e => {
    console.log('start handler==>>>', e);
  };
  const onSpeechEndHandler = e => {
    //  setLoading(false)
    console.log('stop handler', e);
  };

  const onSpeechResultsHandler = e => {
    let text = e.value[0];
    // setResult(text)
    console.log('speech result handler', e);
    googlePlacesRef.current?.setAddressText(text);
  };

  const startRecording = async () => {
    //setModalVisible(true);
    console.log(speechRef.current);
    try {
      await Voice.start('en-Us');
    } catch (error) {
      console.log('error raised', error);
    }
  };
  useEffect(() => {
    //alert('yyyy')
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
        source={require('../../images/logo.png')}
        style={styles.leftIconImage}
      />
    );
  };

  const renderSearchRightIcons = () => {
    return (
      <View style={styles.searchRighIcons}>
        {!modalVisible ? (
          <TouchableOpacity onPress={startRecording} style={styles.mr10}>
            <FontAwesome name="microphone" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <Entypo name="cross" size={24} color="black" style={styles.mr10} />
        )}
        <Image
          source={require('../../images/dalasi.png')}
          style={styles.rightIconImage}
        />
      </View>
    );
  };

  return (
    <GooglePlacesAutocomplete
      ref={googlePlacesRef}
      fetchDetails={true}
      placeholder="Search Location"
      onPress={
        onPress
        //   (data, details = null) => {
        //   const lat = details.geometry.location.lat;
        //   const lng = details.geometry.location.lng;
        //   setLatLng({lat, lng});
        //   bottomSheetRef.current.close();
        // }
      }
      query={{
        key: `${LocationKey}`,
        language: 'en',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={300}
      enablePoweredByContainer={false}
      styles={styles.googlePlaces}
      renderLeftButton={renderSearchLeftIcons}
      renderRightButton={renderSearchRightIcons}
    />
  );
};

export default connect(null, {setLatLng})(Search);

const styles = StyleSheet.create({
  googlePlaces: {
    container: {
      position: 'absolute',
      width: '95%',
      alignSelf: 'center',
      marginTop: StatusBar.currentHeight,
      zIndex: 10,
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

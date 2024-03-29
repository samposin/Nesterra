import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  Keyboard,
  View,
  Image,
} from 'react-native';
import React from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {SITE_ID_SEARCH} from '../../../../../actions/actionType/ExploreSearch';

const SiteId = ({
  setRander,
  setFocusView,
  setFocusOn1,
  searchView,
  focusOn1,
  seTDropDownShow,
  placeHolder,
  setPlace,
}) => {
  const [search, setSearch] = React.useState('');
  const dispatch = useDispatch();
  const searchId = data => {
    if (data) {
      setSearch(data);

      dispatch({
        type: SITE_ID_SEARCH,
        data: data,
      });
      setRander(true);
      setFocusView('Site');
    } else {
      setPlace('Search Site ID');
      setFocusOn1(true);
      setRander(false);
      Keyboard.dismiss();
    }
  };

  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          height: '100%',
        }}>
        <View
          style={{
            width: '65%',
            height: '100%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '20%',
              height: '100%',

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../../../images/logo.png')}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'cover',
              }}
            />
          </View>

          <TextInput
            style={{color: 'black', width: '100%'}}
            placeholder={placeHolder}
            placeholderTextColor="black"
            onChangeText={text => searchId(text)}
            onFocus={() => {
              setFocusOn1(false);
              setPlace('');
            }}
          />
        </View>

        <View
          style={{
            width: '35%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {focusOn1 ? (
            <>
              <View
                style={{
                  width: '18%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome name={'microphone'} size={24} color="#898989" />
              </View>
              <View
                style={{
                  width: '8%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 2,
                    height: '45%',
                    backgroundColor: 'black',
                  }}></View>
              </View>
              <View
                style={{
                  width: '74%',
                  height: '100%',
                  paddingRight: 10,
                }}>
                <TouchableOpacity
                  onPress={() => seTDropDownShow(true)}
                  style={{
                    flexDirection: 'row',

                    justifyContent: 'space-around',
                    height: '100%',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'black', marginRight: 10}}>
                    {searchView}
                  </Text>

                  <FontAwesome5
                    name="eject"
                    size={15}
                    style={{
                      transform: [{rotate: '180deg'}],
                      marginLeft: 2,
                      marginTop: 3,
                    }}
                    color={'#007aff'}
                  />
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <View
              style={{
                width: '100%',
                height: '100%',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setRander(false);
                  setFocusOn1(true);
                  setPlace('Search Site ID');
                  Keyboard.dismiss();
                }}
                style={{
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: 5,
                  flexDirection: 'row',

                  width: '100%',
                  height: '100%',
                }}>
                <View
                  style={{
                    width: 70,
                    height: 30,
                    backgroundColor: '#d4f4df',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#52bc71'}}>Site ID</Text>
                </View>
                <Entypo name="cross" size={22} color="black" style={{}} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default SiteId;

const styles = StyleSheet.create({});

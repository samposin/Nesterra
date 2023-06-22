import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const {width} = Dimensions.get('screen');

const TabButton = ({focused, imagePath, name}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);
  return (
    <>
      <View
        style={{
          width: width / 4,
          height: '100%',

          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 3,
        }}>
        {/* <View
          style={{
            width: '50%',
            height: '50%',

            backgroundColor: focused ? '#1b5a90' : 'white',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}> */}
        <Image
          style={{
<<<<<<< HEAD:Nesterra-anup/app2/components/tabButton/TabButton.js
            tintColor: focused ? '#0A7AFF' : 'gray',
=======
            tintColor:
              appearanceType == 'dark'
                ? focused
                  ? '#0A7AFF' //
                  : 'white'
                : focused
                ? '#0A7AFF' //
                : 'black',
>>>>>>> 7605d47dd02e5e1a0e2e15aa3e171353bb2b0f18:app/components/tabButton/TabButton.js
            resizeMode: 'contain',
            // marginVertical: 2,
            // marginTop: 2,
            width: 20,
            height: 20,
          }}
          source={imagePath}
        />
        {/* </View> */}
        <View
          style={{
            width: '50%',
            height: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 11,
              fontWeight: '800',
<<<<<<< HEAD:Nesterra-anup/app2/components/tabButton/TabButton.js
              color: focused ? '#0A7AFF' : 'gray',
=======
              color:
                appearanceType == 'dark'
                  ? focused
                    ? '#0A7AFF' //
                    : 'white'
                  : focused
                  ? '#0A7AFF' //
                  : 'black',
>>>>>>> 7605d47dd02e5e1a0e2e15aa3e171353bb2b0f18:app/components/tabButton/TabButton.js
            }}>
            {name}
          </Text>
        </View>
      </View>
    </>
  );
};

export default TabButton;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';

const TextItemView = ({leftText, rightText}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);
  return (
    <View style={styles.profileText3}>
      <View style={styles.ProfileText2}>
        <Text
          style={{
            fontSize: scale(13),
            color: appearanceType == 'dark' ? 'white' : '#77777e',
          }}>
          {leftText}
        </Text>
        <Text
          style={{
            fontSize: scale(13),
            color: appearanceType == 'dark' ? 'white' : 'black',
            marginRight: scale(3),
          }}>
          {rightText}
        </Text>
      </View>
    </View>
  );
};

export default TextItemView;

const styles = StyleSheet.create({
  profileText3: {
    width: '100%',
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(25),
    // backgroundColor: 'red',
  },
  ProfileText2: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',

    borderTopWidth: 0.5,
    borderTopColor: '#c6c6c6',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

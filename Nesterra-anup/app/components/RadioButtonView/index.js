import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
<<<<<<< HEAD
import {Use} from 'react-native-svg';
import {useSelector} from 'react-redux';

<<<<<<<< HEAD:Nesterra-anup/app/components/RadioButtonView/index.js
const RadioButtonView = ({title, colors, onPress, type}) => {
========
const RadioButtonView = ({title, colors, onPress, userType}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);

>>>>>>>> 7605d47dd02e5e1a0e2e15aa3e171353bb2b0f18:app/screens/Menu/BottomSheetView/RadioButtonView.js
=======

const RadioButtonView = ({title, colors, onPress, type}) => {
>>>>>>> 7605d47dd02e5e1a0e2e15aa3e171353bb2b0f18
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}>
      <View style={styles.RadioView}>
        <RadioButton
          color="#3d69ee"
<<<<<<< HEAD
<<<<<<<< HEAD:Nesterra-anup/app/components/RadioButtonView/index.js
          status={type === title ? 'checked' : 'unchecked'}
        />
========
          uncheckedColor={appearanceType == 'dark' ? 'white' : '#0472ef'}
          status={userType === title ? 'checked' : 'unchecked'}
        />
        <Text style={{color: appearanceType == 'dark' ? 'white' : 'black'}}>
          {title}
        </Text>
>>>>>>>> 7605d47dd02e5e1a0e2e15aa3e171353bb2b0f18:app/screens/Menu/BottomSheetView/RadioButtonView.js
=======
          status={type === title ? 'checked' : 'unchecked'}
        />
>>>>>>> 7605d47dd02e5e1a0e2e15aa3e171353bb2b0f18
      </View>
    </TouchableOpacity>
  );
};

export default RadioButtonView;

const styles = StyleSheet.create({
  RadioView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

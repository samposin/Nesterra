import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Use} from 'react-native-svg';
import {useSelector} from 'react-redux';

const RadioButtonView = ({title, colors, onPress, userType}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}>
      <View style={styles.RadioView}>
        <RadioButton
          color="#3d69ee"
          uncheckedColor={appearanceType == 'dark' ? 'white' : '#0472ef'}
          status={userType === title ? 'checked' : 'unchecked'}
        />
        <Text style={{color: appearanceType == 'dark' ? 'white' : 'black'}}>
          {title}
        </Text>
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

import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Button from './Button';
import {useSelector} from 'react-redux';
const ButtonView = () => {
  const {appearanceType} = useSelector(state => state.appearanceType);
  const [buttonType, setButtonType] = useState('Data Line');

  return (
    <>
      <View style={styles.buttonView}>
        <View
          style={[
            styles.buttonView2,
            {
              backgroundColor: appearanceType == 'dark' ? '#1c1c1f' : '#d6d6d8',
            },
          ]}>
          <Button
            title="Data Line"
            buttonType={buttonType}
            onPress={() => {
              setButtonType('Data Line');
            }}
          />
          <Button
            title="Voice Line(s)"
            buttonType={buttonType}
            onPress={() => {
              setButtonType('Voice Line(s)');
            }}
          />
          <Button
            title="Equipment"
            buttonType={buttonType}
            onPress={() => {
              setButtonType('Equipment');
            }}
          />
        </View>
      </View>
    </>
  );
};

export default ButtonView;

const styles = StyleSheet.create({
  buttonView: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  buttonView2: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#e1e1e1',
    height: '100%',
    padding: 3,
    borderRadius: 7,
  },
});

import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Modal, Portal} from 'react-native-paper';
const {width, height} = Dimensions.get('screen');
const ModalView = ({setModal, modal}) => {
  return (
    <>
      <View style={styles.container}></View>

      <View style={styles.containerStyle}>
        <Text style={{marginBottom: 20, fontSize: 18, color: '#1b5a90'}}>
          Select an authentication factor
        </Text>
        <TouchableOpacity
          onPress={() => {
            setModal(!modal);
          }}
          style={{
            width: '100%',
            height: 50,
            backgroundColor: 'red',
          }}></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModal(!modal);
          }}
          style={{
            width: '100%',
            height: 50,
            backgroundColor: 'green',
          }}></TouchableOpacity>
      </View>
    </>
    // <Portal>
    //   <Modal
    //     visible={modalVisible}
    //     onDismiss={() => setModalVisible(false)}
    //     contentContainerStyle={styles.containerStyle}>
    //     <Text style={{marginBottom: 20, fontSize: 25, color: '#1b5a90'}}>
    //       {locationText}
    //     </Text>
    //     <Text style={{marginBottom: 20}}>
    //       {' '}
    //       <FontAwesome name="microphone" size={40} color="#1b5a90" />
    //     </Text>
    //     <Text>
    //       <ActivityIndicator size="large" color="#1b5a90" />
    //     </Text>
    //   </Modal>
    // </Portal>
  );
};

export default ModalView;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
    width: 350,
    height: 250,
    alignSelf: 'center',
    borderRadius: 15,
    alignItems: 'center',
    zIndex: 999,
    top: height / 2 - 125,
    position: 'absolute',
  },
  container1: {
    position: 'absolute',
    top: 0,
    bottom: 0,

    right: 0,
    left: 0,
    zIndex: 998,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'black',
    zIndex: 10,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

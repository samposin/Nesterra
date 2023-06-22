import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Modal, Portal} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import {certifiedImg} from '../../../../components/imageLink';
import TextView from './TextView';
import SimpleButton from './../../../../components/button/SimpleButton';
const {width, height} = Dimensions.get('screen');

const Certification = ({navigation, certifiedModal, setCertifiedModal}) => {
  return (
    <Portal>
      <Modal
        visible={certifiedModal}
        onDismiss={() => {
          setCertifiedModal(false);
        }}
        contentContainerStyle={styles.containerStyle}>
        <View
          style={{
            width: '100%',
            height: '25%',
            // backgroundColor: 'pink',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: 50,
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={certifiedImg.certifiedImg}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'cover',
                tintColor: '#8e9397',
              }}
            />
          </View>
          <Text style={styles.notYetCertifiedText}>Not Yet Certified</Text>

          <TouchableOpacity
            style={styles.closeView}
            onPress={() => {
              setCertifiedModal(false);
            }}>
            <Entypo name="cross" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', height: '75%'}}>
          <TextView
            title="Engineer Assigned: "
            value="Not Assigned"
            color="#2297e7"
          />
          <TextView title="Last certified: " value="TBD" color="black" />
          <TextView
            title="Last certified By: "
            value="Not Assigned"
            color="black"
          />
          <TextView title="Next Certification " value="TBD" color="black" />
          <View
            style={{
              width: '100%',
              height: 40,
              // backgroundColor: 'pink',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SimpleButton title="Report" />
            {/* <View
              style={{
                width: 80,
                height: 30,
                backgroundColor: '#d1e7ff',
                borderRadius: 7,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#3573a6'}}>Report</Text>
            </View> */}
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default Certification;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',

    width: '90%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 10,
    zIndex: 999,
    top: height / 2 - 100,
    position: 'absolute',
  },
  notYetCertifiedText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  closeView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0472ef',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
});

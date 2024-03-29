import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {memo, useCallback} from 'react';
import {Portal, Modal} from 'react-native-paper';
const {width} = Dimensions.get('screen');

const w1 = width - 50;
const w2 = (w1 / 100) * 35;
const ButtonView = ({setSearchView, title}) => {
  // console.log(id);
  return (
    <TouchableOpacity
      onPress={() => {
        setSearchView();
      }}
      style={{
        width: '100%',
        height: 30,
        paddingLeft: 10,
        justifyContent: 'center',
      }}>
      <Text style={{color: 'black'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const DropDownView = ({
  setSearchView,
  searchView,
  setRander,
  rander,
  setPlace,
}) => {
  const addSer = useCallback(() => {
    setSearchView('Address');
    setRander(false);
  }, [searchView]);
  const atmSer = useCallback(() => {
    setSearchView('ATM ID');
    setRander(false);
    setPlace('Serach Atm ID');
  }, [searchView]);
  const siteSer = useCallback(() => {
    setPlace('Serach Site ID');
    setSearchView('Site ID');
    setRander(false);
  }, [searchView]);
  const branchSer = useCallback(() => {
    setSearchView('Branch ID');
    setRander(false);
    setPlace('Serach Branch ID');
  }, [searchView]);
  const circuitSer = useCallback(() => {
    setSearchView('Circuit ID');
    setPlace('Serach Circuit ID');
    setRander(false);
  }, [searchView]);
  const devicesSer = useCallback(() => {
    setSearchView('Device ID');
    setPlace('Serach Device ID');
    setRander(false);
  }, [searchView]);

  return (
<<<<<<< HEAD:Nesterra-anup/app2/screens/explore/components/Search/DropDownView.js
    <View style={styles.rightVies1}>
      <ButtonView setSearchView={addSer} id={'Address'} title="Address" />
      <ButtonView setSearchView={atmSer} id={'AtmsId'} title="ATM ID" />
      <ButtonView setSearchView={siteSer} id={'SiteId'} title="Site ID" />
      <ButtonView setSearchView={branchSer} id={'BranchId'} title="Branch ID" />
      <ButtonView
        setSearchView={circuitSer}
        id={'CircuitId'}
        title="Circuit ID"
      />
      <ButtonView
        setSearchView={devicesSer}
        id={'DeviceId'}
        title="Device ID"
      />
    </View>
=======
    <Portal>
      <Modal
        visible={rander}
        onDismiss={() => {
          // setCertifiedModal(false);
          setRander(false);
        }}
        contentContainerStyle={styles.containerStyle}>
        <ButtonView setSearchView={addSer} id={'Address'} title="Address" />
        <ButtonView setSearchView={atmSer} id={'AtmsId'} title="ATM ID" />
        <ButtonView setSearchView={siteSer} id={'SiteId'} title="Site ID" />
        <ButtonView
          setSearchView={branchSer}
          id={'BranchId'}
          title="Branch ID"
        />
        <ButtonView
          setSearchView={circuitSer}
          id={'CircuitId'}
          title="Circuit ID"
        />
        <ButtonView
          setSearchView={devicesSer}
          id={'DeviceId'}
          title="Device ID"
        />
        <ButtonView
          setSearchView={devicesSer}
          id={'office ID'}
          title="Office ID"
        />
        <ButtonView
          setSearchView={devicesSer}
          id={'Property Name'}
          title="Property Name"
        />
      </Modal>
    </Portal>
>>>>>>> 7605d47dd02e5e1a0e2e15aa3e171353bb2b0f18:app/screens/explore/components/Search/DropDownView.js
  );
};

export default memo(DropDownView);

const styles = StyleSheet.create({
  rightVies1: {
    marginTop: 220,
    alignSelf: 'flex-end',
    right: 10,
    // zIndex: 100,
    position: 'absolute',
    backgroundColor: 'white',
    width: w2,
    paddingVertical: 10,
    borderColor: '#898989',
    borderWidth: 1,
  },
  containerStyle: {
    top: 110,
    alignSelf: 'flex-end',
    right: 10,
    // zIndex: 100,
    position: 'absolute',
    backgroundColor: 'white',
    width: w2,
    paddingVertical: 10,
    borderColor: '#898989',
    borderWidth: 1,
  },
});

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {Modal, Portal, Button, PaperProvider} from 'react-native-paper';

// const DropDownView = () => {
//   const [visible, setVisible] = React.useState(false);

//   const showModal = () => setVisible(true);
//   const hideModal = () => setVisible(false);
//   const containerStyle = {backgroundColor: 'white', padding: 20};
//   return (
//     <>
//       <Portal>
//         <Modal
//           visible={true}
//           contentContainerStyle={{backgroundColor: 'white', padding: 20}}>
//           <Text>Example Modal. Click outside this area to dismiss.</Text>
//         </Modal>
//       </Portal>
//     </>
//   );
// };

// export default DropDownView;

// const styles = StyleSheet.create({});

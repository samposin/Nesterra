import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';

import {imgg} from '../../components/imageLink/saveTabImage';
import {useSelector} from 'react-redux';
import Details from './Details';
import Entypo from 'react-native-vector-icons/Entypo';

const Saved = ({navigation}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);

  const {circuitItems} = useSelector(state => state.CircuitsItems);
  const {devicestItems} = useSelector(state => state.DevicesItems);

  const {atmsItem} = useSelector(state => state.AtmsItem);
  const {siteItem} = useSelector(state => state.SiteItem);
  const {orderItem} = useSelector(state => state.OrdersItem);
  const detailsRef = useRef(null);
  const DetailsOneRef = useRef(null);
  const [displayView, setDisplayView] = useState('Atms');
  const ListItem = ({source, title, item, onPress}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={{
          width: '100%',
          height: 60,
          borderBottomColor: appearanceType == 'dark' ? 'white' : 'black',
          borderBottomWidth: 0.5,

          flexDirection: 'row',
        }}>
        <View style={{width: '10%', height: '100%', justifyContent: 'center'}}>
          <Image
            style={{
              width: 25,
              height: 25,
              resizeMode: 'contain',
              tintColor: appearanceType == 'dark' ? 'white' : 'black',
            }}
            source={source}
          />
        </View>
        <View
          style={{
            width: '90%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: appearanceType == 'dark' ? 'white' : 'black',
            }}>
            {title}
          </Text>
          <Text
            style={{
              marginLeft: 7,
              color: appearanceType == 'dark' ? 'white' : 'black',
            }}>
            {item}{' '}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const atmsDetails = () => {
    setDisplayView('Atms');
    detailsRef.current.snapToIndex(2);
  };
  const devicesDetails = () => {
    setDisplayView('Devices');
    detailsRef.current.snapToIndex(2);
  };
  const circuitsDetails = () => {
    setDisplayView('Circuits');
    detailsRef.current.snapToIndex(2);
  };
  const SitesDetails = () => {
    setDisplayView('Sites');
    detailsRef.current.snapToIndex(2);
  };
  const OrdersDetails = () => {
    setDisplayView('Orders');
    detailsRef.current.snapToIndex(2);
  };
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: 28,
          flex: 1,
        }}>
        <View style={styles.container}>
          <View style={styles.mainView}>
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
              Saved
            </Text>
            <TouchableOpacity
              style={styles.closeView}
              onPress={() => {
                navigation.goBack();
              }}>
              <Entypo name="cross" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <ListItem
            source={imgg.imgAtm}
            title="ATMS"
            item={`(${atmsItem.length})`}
            onPress={atmsDetails}
          />
          <ListItem
            source={imgg.imgBranche}
            title="Branches"
            item={`(0)`}
            onPress={devicesDetails}
          />
          <ListItem
            source={imgg.imgCircuits}
            title="Circuits"
            item={`(${circuitItems.length})`}
            onPress={circuitsDetails}
          />
          <ListItem
            source={imgg.imgDevices}
            title="Devices"
            item={`(${devicestItems.length})`}
            onPress={devicesDetails}
          />
          <ListItem
            source={imgg.imgSite}
            title="Sites"
            item={`(${siteItem.length})`}
            onPress={SitesDetails}
          />
          <ListItem
            source={imgg.imgOrders}
            title="Orders"
            item={`(${orderItem.length})`}
            onPress={OrdersDetails}
          />
          <ListItem
            source={imgg.imgNotes}
            title="My Notes"
            item={''}
            onPress={SitesDetails}
          />
        </View>
      </SafeAreaView>
      <Details detailsRef={detailsRef} displayView={displayView} />
    </>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    // paddingHorizontal: 10,
  },
  mainView: {
    width: '100%',
    height: 50,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0472ef',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    // width: 20,
    // height: 20,
    // borderRadius: 10,
    // backgroundColor: '#0472ef',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginRight: 20,
  },
});

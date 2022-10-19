import {Image, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';

const CustomMarker = ({isChecked, marKerType, mark, officeType}) => {
  // console.log(mark, 'marKerType');

  const getImage = value => {
    // console.log(officeType);
    switch (true) {
      case value === 'Office':
        return require('../../images/office.png');

      case value === 'Other':
        return require('../../images/other.png');

      case value === 'ATM':
        return require('../../images/atm.png');

      case value === 'Branch':
        return require('../../images/br.png');

      case value === 'Data Center':
        return require('../../images/dc.png');
      case value === '3rd Party':
        return require('../../images/3rdd.png');
      case value === 'ITM Kiosk':
        return require('../../images/itm.png');
    }
  };
  const location_data = useSelector(state => state.location_details.data);
  const {siteItem} = useSelector(state => state.SiteItem);
  const dataa = siteItem.find(i => i.id === location_data.Location_ID);
  // const getMar = officeType => {
  //   if (mark && marKerType) {
  //     return require('../../images/green.png');
  //   } else if (mark) {
  //     return require('../../images/red.png');
  //   } else {
  //     return getImage(officeType);
  //   }
  // };

  const getMar = officeType => {
    if (mark && dataa) {
      return require('../../images/green.png');
    } else if (mark) {
      return require('../../images/red.png');
    } else {
      return getImage(officeType);
    }
  };
  const getText = value => {
    // console.log(officeType);
    switch (true) {
      case value === 'Office':
        return 'O';

      case value === 'Other':
        return '+';
      case value === 'Branch':
        return 'B';
      case value === 'ATM':
        return 'A';

      case value === 'Data Center':
        return 'DC';
      case value === '3rd Party':
        return '3rd';
      case value === 'ITM Kiosk':
        return 'I';
    }
  };

  return (
    // <Image
    //   style={{width: 35, height: 35}}
    //   // source={mark ? require('../../images/14.png') : getImage(officeType)}
    //   source={getMar(officeType)}
    // />
    <>
      <View
        style={{
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        {mark && dataa ? (
          <View
            style={{
              width: 20,
              height: 20,

              position: 'absolute',
              top: 5,
              right: 5,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10,
            }}>
            <Entypo name="heart" size={20} color="#c338b5" />
          </View>
        ) : null}

        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: mark ? '#f6fecd' : '#55fe01',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: mark ? 1.5 : 0,
            borderColor: mark ? '#59ff02' : '#55fe01',
          }}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {getText(officeType)}
          </Text>
        </View>
      </View>
    </>
  );
};
export default CustomMarker;

// source={
//   marKerType === mark
//     ? require('../../images/14.png')
//     : getImage(officeType)
// }

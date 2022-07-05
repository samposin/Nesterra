import {Image} from 'react-native';
import React from 'react';

const CustomMarker = ({isChecked, officeType}) => {
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
    }
  };
  return (
    <Image
      style={{width: 35, height: 35}}
      source={
        isChecked
          ? require('../../images/14.png')
          : require('../../images/office.png')
      }
    />
  );
};
export default CustomMarker;

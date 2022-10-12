import {Image} from 'react-native';
import React from 'react';

const CustomMarker = ({isChecked, marKerType, mark, officeType}) => {
  // console.log(marKerType, 'typeof');
  // console.log('ttt', mark);
  // console.log(typeof mark);
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
    }
  };
  return (
    <Image
      style={{width: 35, height: 35}}
      source={
        marKerType === mark
          ? require('../../images/14.png')
          : getImage(officeType)
      }
    />
  );
};
export default CustomMarker;

// source={
//   marKerType === mark
//     ? require('../../images/14.png')
//     : getImage(officeType)
// }

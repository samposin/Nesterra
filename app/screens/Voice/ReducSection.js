import React, {Component} from 'react';
import {StyleSheet, Text, View, SectionList, Image} from 'react-native';

const JSON_DATA = [
  {
    billingamountauthorised: '1',
    iconblob:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/cb/cf/bb/cbcfbb61-4d03-4f4e-ecf7-b7582688435f/source/512x512bb.jpg',
    merchantname: 'K Kiosk Sihlquai',
    merchantstreet: 'Sihlquai',
    addedtime: 1576590342000,
    uniqueref: 'A446806878486B5B',
  },
  {
    billingamountauthorised: '750',
    iconblob:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1024px-Starbucks_Corporation_Logo_2011.svg.png',
    merchantname: 'Starbucks',
    merchantstreet: 'Rue du Mont-Blanc',
    addedtime: 1576590342000,
    uniqueref: 'D0868EB65DC2DE585',
  },
  {
    billingamountauthorised: '1',
    iconblob:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/cb/cf/bb/cbcfbb61-4d03-4f4e-ecf7-b7582688435f/source/512x512bb.jpg',
    merchantname: 'K Kiosk Sihlquai',
    merchantstreet: 'Sihlquai',
    addedtime: 1576590342000,
    uniqueref: 'A446806878486B5B0',
  },
  {
    billingamountauthorised: '100',
    iconblob:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/cb/cf/bb/cbcfbb61-4d03-4f4e-ecf7-b7582688435f/source/512x512bb.jpg',
    merchantname: 'K Kiosk Sihlquai',
    merchantstreet: 'Sihlquai',
    addedtime: 1575554709000,
    uniqueref: '0D10B5F56A73D73DD',
  },
  {
    billingamountauthorised: '1320',
    iconblob:
      'https://pbs.twimg.com/profile_images/568401882444349441/KDWvUHCJ_400x400.jpeg',
    merchantname: 'Schweizerische Bundesbahnen',
    merchantstreet: 'Bahnhofplatz',
    addedtime: 1575554709000,
    uniqueref: '2F3D907B0FF675216',
  },
];

const DATA = Object.values(
  JSON_DATA.reduce((acc, item) => {
    if (!acc[item.addedtime])
      acc[item.addedtime] = {
        title: item.addedtime,
        data: [],
      };
    acc[item.addedtime].data.push(item);
    return acc;
  }, {}),
);

export default class ReducSection extends Component {
  renderItems = ({item}) => {
    return (
      <View style={styles.itemStyle}>
        <Image style={{width: 60, height: 60}} source={{uri: item.iconblob}} />
        <Text>{item.merchantname}</Text>
        <Text>{item.merchantstreet}</Text>
      </View>
    );
  };

  renderHeader = ({section}) => {
    return (
      <View style={styles.headerStyle}>
        <Text>{section.title}</Text>
      </View>
    );
  };

  render() {
    return (
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={this.renderItems}
        renderSectionHeader={this.renderHeader}
      />
    );
  }
}

const styles = StyleSheet.create({
  itemStyle: {
    backgroundColor: '#dcdee0',
    padding: 10,
    margin: 5,
  },
  headerStyle: {
    paddingLeft: 10,
    paddingVertical: 10,
  },
});

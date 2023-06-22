import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Status from './Components/Status';
import Type from './Components/Type';
import Genealogy from './Components/Genealogy';
import SiteType from './Components/SiteType';
import DisPlayItem from './Components/DisPlayItem';
import SiteCertified from './Components/SiteCertified';
import PropertyName from './Components/PropertyName';
const {height, width} = Dimensions.get('screen');
const MapTypeAndFilter = ({route}) => {
  // console.log(route.params, 'route');

  const [setetedView, setSeletedView] = React.useState('Map Type');
  const selectedComponent = () => {
    switch (true) {
      case setetedView === 'Map Type':
        return <Type />;

      case setetedView === 'Site Status':
        return <Status />;
      case setetedView === 'Genealogy':
        return <Genealogy />;
      case setetedView === 'Site Type':
        return <SiteType />;
      case setetedView === 'Property Name':
        return <PropertyName />;
      case setetedView === 'Site Certified':
        return <SiteCertified />;
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      {selectedComponent()}
      <View
        style={{
          width: '40%',
          height: height - 70,
          marginTop: 70,
          backgroundColor: '#f5f5f5',
          paddingLeft: 20,
        }}>
        <DisPlayItem
          setetedView={setetedView}
          onPress={() => setSeletedView('Map Type')}
          title="Map Type"
          count={1}
        />
        <DisPlayItem
          setetedView={setetedView}
          onPress={() => setSeletedView('Site Status')}
          title="Site Status"
          count={0}
        />
        <DisPlayItem
          setetedView={setetedView}
          onPress={() => setSeletedView('Site Type')}
          title="Site Type"
          count={0}
        />
        <DisPlayItem
          setetedView={setetedView}
          onPress={() => setSeletedView('Genealogy')}
          title="Genealogy"
          count={0}
        />
        <DisPlayItem
          setetedView={setetedView}
          onPress={() => setSeletedView('Property Name')}
          title="Property Name"
          count={0}
        />

        <DisPlayItem
          setetedView={setetedView}
          onPress={() => setSeletedView('Site Certified')}
          title="Site Certified"
          count={0}
        />
      </View>
    </SafeAreaView>
  );
};

export default MapTypeAndFilter;

const styles = StyleSheet.create({
  rightText: {
    backgroundColor: '#1b5a90',
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 3,
  },
  buttonUpper: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  mainContainer: {
    height: height - 195,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  mainContainerLeft: {
    height: '100%',
    backgroundColor: '#f5f5f5',
    width: '30%',
    alignItems: 'center',
  },
  mainContainerRight: {height: '100%', width: '70%'},
});

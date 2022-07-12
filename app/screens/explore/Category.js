import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useRef} from 'react';
import {data} from '../../utils/Constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {third_party_filter} from '../../actions/coordinates';
import {connect} from 'react-redux';

const Category = ({third_party_filter}) => {
  const [allItem, setAllItem] = React.useState(data);
  const myRef = useRef(null);
  const actiText = id => {
    let listData = allItem.map(item => {
      let itm = {...item, isActive: false};
      return itm;
    });

    listData[id].isActive = true;
    setAllItem(listData);
  };
  const centerTab = i => {
    myRef.current.scrollToIndex({animated: true, index: i, viewPosition: 0.5});
  };

  return (
    <>
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={50}
        style={styles.chipsScrollView}
        contentInset={{
          // iOS only
          top: 0,
          left: 0,
          bottom: 0,
          right: 20,
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 0 : 0,
        }}>
        {allItem.map((category, index) => (
          <TouchableOpacity
            ref={myRef}
            onPress={() => {
              actiText(index);

              third_party_filter(category.value);
            }}
            key={index}
            style={{
              ...styles.chipsItem,
              alignItems: 'center',
              backgroundColor: category.isActive ? '#0A7AFF' : 'white',
            }}>
            {category.isActive ? category.icon : null}

            {/* <Image
              source={require('../../images/upload.png')}
              style={{
                width: 15,
                height: 15,
                tintColor: category.isActive ? '#ffffff' : '#1b5a90',
              }}
            /> */}
            <Text
              style={{
                color: category.isActive ? 'white' : 'black',
                fontWeight: '800',
              }}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default connect(null, {third_party_filter})(Category);

const styles = StyleSheet.create({
  chipsItem: {
    flexDirection: 'row',
    borderRadius: 20,
    // padding: 7,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    height: 40,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    paddingLeft: 5,
    zIndex: 0,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 140 : 140,
    //paddingHorizontal: 10,
  },
});

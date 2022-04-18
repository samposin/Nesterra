import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import {data} from '../../utils/Constants';

const Category = () => {
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
        {data.category.map((category, index) => (
          <View
            key={index}
            style={{
              ...styles.chipsItem,

              backgroundColor: category.isActive ? '#1b5a90' : 'white',
            }}>
            {category.isActive ? category.icon : null}
            <Text
              style={{
                color: category.isActive ? '#ffffff' : '#1b5a90',
                fontWeight: '800',
              }}>
              {category.name} #
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Category;

const styles = StyleSheet.create({
  chipsItem: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    //  marginTop: 10,

    position: 'absolute',
    top:
      Platform.OS === 'ios'
        ? StatusBar.currentHeight
        : StatusBar.currentHeight + 60,
    //paddingHorizontal: 10,
  },
});

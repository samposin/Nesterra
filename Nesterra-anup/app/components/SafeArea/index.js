import {StyleSheet, Text, SafeAreaView, StatusBar, View} from 'react-native';
import React from 'react';

const SafeArea = ({children}) => {
  return (
    <SafeAreaView
      style={{
        marginTop: 28,
      }}>
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;

const styles = StyleSheet.create({});

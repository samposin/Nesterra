import {StyleSheet, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import FilterButton from '../../../../../components/FilterButton';
const ThirdRow = ({diplayName, setDiplayName}) => {
  const siteidChabge = () => {};
  const branchIdChabge = () => {};
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 60,
          paddingLeft: 10,
          flexDirection: 'row',
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FilterButton
            diplayName={diplayName}
            onPress={siteidChabge}
            title="Vendor"
          />
          <FilterButton
            diplayName={diplayName}
            onPress={branchIdChabge}
            title="Type"
          />
          <FilterButton
            diplayName={diplayName}
            onPress={branchIdChabge}
            title="Model"
          />
          <FilterButton
            diplayName={diplayName}
            onPress={branchIdChabge}
            title="ATM ID"
          />
        </ScrollView>
      </View>
    </>
  );
};

export default ThirdRow;

const styles = StyleSheet.create({});

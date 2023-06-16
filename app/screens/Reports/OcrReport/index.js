import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TableHeaderColumWithOutIcon from '../../../components/TableHeaderColumWithOutIcon';

const OcrReport = () => {
  return (
    <>
      <View style={styles.header}>
        <TableHeaderColumWithOutIcon
          title="status"
          width={'25%'}
          leftBorder={0}
        />
        <TableHeaderColumWithOutIcon
          title="Stategy"
          width={'25%'}
          leftBorder={1}
        />
        <TableHeaderColumWithOutIcon
          title="Network Eng"
          width={'35%'}
          leftBorder={1}
        />
        <TableHeaderColumWithOutIcon
          title="status"
          width={'15%'}
          leftBorder={1}
        />
      </View>
    </>
  );
};

export default OcrReport;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 40,
    backgroundColor: '#007cf4',
    marginTop: 10,
    flexDirection: 'row',
  },
});

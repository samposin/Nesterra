import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import TableHeaderColumWithOutIcon from '../../../components/TableHeaderColumWithOutIcon';
import {getOcrReport} from '../../../actions/Reports/OCRReport';
import {connect, useSelector} from 'react-redux';
import DataColum from '../../../components/DataColum';
import {boxColor} from '../../../actions/Helper';

const OcrReport = ({getOcrReport}) => {
  const [loding, setLoding] = useState(true);
  const {OCRReport} = useSelector(state => state.OCRReport);
  console.log(OCRReport[OCRReport.length - 1], 'OCRReport');
  useEffect(() => {
    getOcrReport(setLoding);
  }, []);

  return (
    <>
      <View style={styles.header}>
        <TableHeaderColumWithOutIcon
          title="status"
          width={'20%'}
          leftBorder={0}
        />
        <TableHeaderColumWithOutIcon
          title="Stategy"
          width={'20%'}
          leftBorder={1}
        />
        <TableHeaderColumWithOutIcon
          title="Network Eng"
          width={'30%'}
          leftBorder={1}
        />
        <TableHeaderColumWithOutIcon
          title="
          Site ID"
          width={'30%'}
          leftBorder={1}
        />
      </View>
      <FlatList
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
        data={OCRReport}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({index, item}) => {
          return (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                margin: 2,
                height: 35,
              }}>
              <View
                style={{
                  width: '20%',
                  height: '100%',
                  backgroundColor: boxColor(item?.Status),
                }}>
                <Text>{item?.Status}</Text>
              </View>
              <DataColum title={item?.Strategy} width={'20%'} />
              <DataColum title={item?.Network_Engineer} width={'30%'} />
              <DataColum title={item?.Location_ID} width={'30%'} />
            </View>
          );
        }}
        ListEmptyComponent={() => {
          // return <NoDataViewFlatList />;
        }}
      />
    </>
  );
};

export default connect(null, {getOcrReport})(OcrReport);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 40,
    backgroundColor: '#007cf4',
    marginTop: 10,
    flexDirection: 'row',
  },
});

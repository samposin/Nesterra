import {StyleSheet, Text, TouchableOpacity, FlatList, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import NotesAdd from './NotesAdd';
import Lodder from './../../lodder/index';
import {useSelector} from 'react-redux';
import DataLoder from '../../lodder/DataLoder';
import NoDataViewFlatList from './../../NoDataViewFlatList/index';

const RanderColum = ({title, color, border}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum,
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: border,
        borderColor: 'white',
      }}>
      <Text style={{...styles.boxText1, color: 'black'}}>{title}</Text>
    </View>
  );
};
const TableHeaderOtherColum = ({title, color, border}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum,
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: 'white',
        borderLeftWidth: border,
      }}>
      <Text style={{...styles.boxText1, color: color}}>{title}</Text>
    </View>
  );
};

const Notes = ({notesLoding}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoder] = useState(false);
  const {notes} = useSelector(state => state.Notes);

  const randerItem = ({index, item}) => {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          paddingVertical: 5,
          backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          borderBottomColor: 'black',
          marginBottom: 1,
        }}>
        <RanderColum title={item.Notes} border={0} />
        <RanderColum title={item.Location_ID} border={2} />
        <RanderColum title={item.Created} border={2} />
        <RanderColum title={item.UserName} border={2} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      {notesLoding ? (
        <DataLoder />
      ) : (
        <>
          <View style={{flex: 1}}>
            <View style={styles.tableRow}>
              <TableHeaderOtherColum color="white" title="Notes" border={0} />
              <TableHeaderOtherColum color="white" title="Site ID" border={2} />
              <TableHeaderOtherColum color="white" title="Created" border={2} />
              <TableHeaderOtherColum
                color="white"
                title="UserName"
                border={2}
              />
            </View>

            <FlatList
              showsVerticalScrollIndicator={false}
              data={notes}
              keyExtractor={(item, i) => i.toString()}
              renderItem={(item, i) => randerItem(item)}
              ListEmptyComponent={() => {
                return (
                  <>
                    <NoDataViewFlatList />
                  </>
                );
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
            style={{
              width: 60,
              height: 30,
              borderRadius: 10,
              position: 'absolute',
              right: 20,
              bottom: 60,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#007aff',
            }}>
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
          <NotesAdd
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setLoder={setLoder}
          />
          {isLoading && <Lodder lodding={isLoading} />}
        </>
      )}
    </>
  );
};

export default Notes;

const styles = StyleSheet.create({
  tableRow: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});

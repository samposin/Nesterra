import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NotesAdd from './NotesAdd';
import Lodder from './../../lodder/index';
import {useSelector} from 'react-redux';
import DataLoder from '../../lodder/DataLoder';
import NoDataViewFlatList from './../../NoDataViewFlatList/index';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {BottomSheetSectionList} from '@gorhom/bottom-sheet';
const {width} = Dimensions.get('screen');
import Popover, {
  PopoverPlacement,
  PopoverMode,
  arrowSize,
} from 'react-native-popover-view';

const Notes = ({notesLoding}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoder] = useState(false);
  const {notes} = useSelector(state => state.Notes);
  const navigation = useNavigation();
  const [showPopover, setShowPopover] = useState(false);
  const touchable = useRef();
  const renderItems = ({item}) => {
    return (
      <View style={styles.itemStyle}>
        <View
          style={{
            width: '100%',
            height: '50%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'black'}}>
            {item.Location_ID}
            {'  '} {`${item.Created.split(' ')[1].split(':')[0]}`}
            {':'}
            {`${item.Created.split(' ')[1].split(':')[1]}`}{' '}
            {`${item.Created.split(' ')[2]}`}
          </Text>
          {/* <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color="black"
          /> */}
          <Popover
            arrowSize={{width: 0, height: 0}}
            placement={PopoverPlacement.TOP}
            from={
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            }>
            <View
              style={{
                width: 60,
                height: 70,
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  width: '100%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => setShowPopover(false)}>
                  <MaterialIcons name="delete" size={24} color="red" />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => setShowPopover(false)}>
                  <FontAwesome name="edit" size={24} color="#007aff" />
                </TouchableOpacity>
              </View>
            </View>
          </Popover>
        </View>
        <View style={{width: '100%', height: '50%'}}>
          <Text style={{color: 'black'}}>{item.Notes}</Text>
        </View>
      </View>
    );
  };

  const renderHeader = ({section}) => {
    return (
      <View style={styles.headerStyle}>
        <Text style={{color: 'black'}}>
          {moment(section.title).format('MMM D')}
        </Text>
      </View>
    );
  };
  return (
    <>
      {notesLoding ? (
        <DataLoder />
      ) : (
        <>
          <View style={{flex: 1}}>
            <BottomSheetSectionList
              sections={notes}
              keyExtractor={(item, index) => item + index}
              renderItem={renderItems}
              renderSectionHeader={renderHeader}
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
      <View
        style={{
          width: 100,
          height: 40,
          borderRadius: 5,
          backgroundColor: '#007aff',
          position: 'absolute',
          bottom: 60,
          left: width / 2 - 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>{notes.length} Records</Text>
      </View>
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
  itemStyle: {
    borderBottomWidth: 0.5,
    paddingVertical: 5,
    margin: 5,
    height: 50,
  },
  headerStyle: {
    borderBottomWidth: 0.5,

    paddingVertical: 5,
    margin: 5,
  },
});

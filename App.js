import 'react-native-reanimated';
import Realm from 'realm';

global.__reanimatedWorkletInit = () => {};
const BSON = Realm.BSON;

import React, {useEffect} from 'react';
import MainStack from './app/stacks/MainStack';
import {LogBox} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import 'react-native-reanimated';
import store from './app/store/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
LogBox.ignoreLogs([
  'new NativeEventEmitter',
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreAllLogs();

// const BSON = Realm.BSON;
// const da = [
//   {
//     _id: 0,
//     name: 'go grocery shopping',
//     status: 'Open',
//   },
//   {
//     _id: 1,
//     name: 'go grocery shopping',
//     status: 'Open',
//   },
// ];

// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

// LogBox.ignoreLogs([
//   'new NativeEventEmitter',
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
// ]);
// LogBox.ignoreAllLogs();

// const App = () => {
//   const getData = async () => {
//     const TaskSchema = {
//       name: 'Task',
//       properties: {
//         _id: 'int',
//         name: 'string',
//         status: 'string?',
//       },
//       primaryKey: '_id',
//     };
//     const realm = Realm.open({
//       schema: [TaskSchema],
//     });
//     const cats = realm.objects('Task');
//     console.log(cats, 'fsdaf', realm);

//     realm.write(() => {
//       const cats = realm.objects('Task');
//       console.log(cats, 'fsdaf', realm);

//       // da.map((item, i) => {
//       //   realm.create('Task', {
//       //     _id: i,
//       //     name: item.name,
//       //     status: item.status,
//       //   });
//       //   console.log('first');
//       // });
//     });
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <BottomSheetModalProvider>
//         <Provider store={store}>
//           <NativeBaseProvider>
//             <PaperProvider>
//               <MainStack />
//             </PaperProvider>
//           </NativeBaseProvider>
//         </Provider>
//       </BottomSheetModalProvider>
//     </GestureHandlerRootView>
//   );
// };

// export default App;

import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect} from 'react';

const App = () => {
  //   (async()=>{

  // const tasks = realm.objects("Task");
  // console.log(tasks,'tasks')
  // console.log(`The lists of tasks are: ${tasks.map((task) => task.name)} `);
  //   })()

  const saveData = async () => {
    const TaskSchema = {
      name: 'Task',
      properties: {
        _id: 'int',
        name: 'string',
        status: 'string?',
      },
      primaryKey: '_id',
    };
    const realm = await Realm.open({
      schema: [TaskSchema],
    });
    let task1, task2;
    // realm.write(() => {
    //   const da = [
    //     {
    //       _id: 0,
    //       name: 'go grocery shopping',
    //       status: 'Open',
    //     },
    //     {
    //       _id: 1,
    //       name: 'go grocery shopping',
    //       status: 'Open',
    //     },
    //   ];
    // da.map((item, i) => {
    //   realm.create('Task', {
    //     _id: i,
    //     name: item.name,
    //     status: item.status,
    //   });
    //   console.log('first');
    // });
    console.log('first');
    const cats = realm.objects('Task');
    console.log(cats);
    // console.log(cats[0]._id,cats[1]._id,'ca',new BSON.ObjectID());
    // task1 = realm.create("Task", {
    //   _id:new BSON.ObjectID(),
    //   name: "go grocery shopping",
    //   status: "Open",
    // });

    // task2 = realm.create("Task", {
    //   _id: new BSON.ObjectID(),
    //   name: "go exercise",
    //   status: "Open",
    // });
    // console.log(`created two tasks: ${task1.name} & ${task2.name}`);
    // });

    // const cats = Realm.objects("Task");
    // console.log(cats);
  };
  useEffect(() => {
    // saveData();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <Provider store={store}>
          <NativeBaseProvider>
            <PaperProvider>
              <MainStack />
            </PaperProvider>
          </NativeBaseProvider>
        </Provider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});

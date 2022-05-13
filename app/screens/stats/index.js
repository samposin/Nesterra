import {StyleSheet, Button, Text, View} from 'react-native';
import React from 'react';
import writeTask from './writeTask';
import getRealm from './realm';
import Realm from 'realm';
const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'int',
    name: 'string',
    status: 'string?',
  },
  primaryKey: '_id',
};
let firstTask;
const Stats = () => {
  const write = async () => {
    // firstTask = await writeTask({
    //   _id: 11,
    //   name: 'Record mada',
    //   status: 'Task 5',
    // });
    const dataone = {
      _id: 4,
      name: 'Record mada 12',
      status: 'Task 1',
    };
    Realm.open({
      path: 'madan',
      schema: [TaskSchema],
    })
      .then(realm => {
        realm.write(() => {
          const d = realm.create('Task', dataone);
          console.log(d);
        });
        realm.close();
      })
      .catch(err => console.log(err));
  };
  const getTasks = async () => {
    const TaskSchema = {
      name: 'Task',
      properties: {
        _id: 'int',
        name: 'string',
        status: 'string?',
      },
      primaryKey: '_id',
    };
    const datt = await Realm.open({
      schema: [TaskSchema],
    });
    const f = datt.objects('Task');

    console.log(f, 'ds');
    // datt.write(() => {

    // });
    // datt.close();
    // .then(realm => {
    //   const d = realm.objects('Task');
    //   console.log(d);
    // realm.write(() => {
    //   const d = realm.objects('Task');

    //   console.log(d, 'dd', realm);
    //   const dd = realm.objects('Task');

    //   console.log(dd, 'dd', realm);
    // });
    // });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Home</Text>
      <Button title="Write Tasks" onPress={write} />
      <Button title="Get Tasks" onPress={getTasks} />
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 20,
  },
});

//  import realm from './databases';
// import {
//   insertToHeartQueue,
//   deleteHeartQueue,
//   deleteAllHeartQueue,
//   getAllHeartQueue,
// } from './databases';

// export default class Stats extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: 'test',
//       time: 0,
//       testDB: '',
//       xxxz: [],
//     };
//   }

//   _readDB = () => {
//     getAllHeartQueue()
//       .then(allHeartsList => {
//         console.log('data', allHeartsList);
//         this.setState({
//           xxxz: allHeartsList,
//         });
//       })
//       .catch(err => {
//         alert(err);
//       });
//   };

//   render() {
//     console.log('state', this.state.xxxz);
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.welcome}>{this.state.time}</Text>
//         <View>
//           <Button
//             onPress={() => this._readDB()}
//             title="Ask for Data"
//             color="#cc77v"
//             accessibilityLabel="Learn more about this purple button"
//           />
//           <View></View>
//         </View>
//       </View>
//     );
//   }
// }

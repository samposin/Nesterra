import getRealm from './realm';

let createdTask;
let dadf;
const writeTask = async data => {
  console.log(data);
  const realm = await getRealm();

  realm.write(() => {
    createdTask = realm.create('Task', data);
    dadf = realm.objects('Task');
  });
  // console.log(dadf);
  realm.close();
  return createdTask;
};

export default writeTask;

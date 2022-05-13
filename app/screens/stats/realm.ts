import Realm from "realm";
import TaskSchema from "./Task";

const getRealm = async () =>
  await Realm.open({
    path: "myrealm",
    schema: [TaskSchema],
  });

export default getRealm;

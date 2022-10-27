import {GET_NOTES} from '../../actions/actionType/Notes';
import moment from 'moment/moment';

const initialState = {
  notes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      const subtypeData = action.payload.data.reduce(
        (acc, {Created, Notes, Location_ID, UserName}) => {
          console.log(acc);
          console.log(Created, Notes, Location_ID, UserName);
          const entry = acc.find(
            i =>
              moment(i.Created).format('YYYY-MM-DD') ===
              moment(Created).format('YYYY-MM-DD'),
          );
          if (!entry) {
            acc.push({
              Created,
              Notes,
              Location_ID,
              UserName,
            });
          } else {
            entry.Created = Created;
            entry.Notes = Notes;
            entry.Location_ID = Location_ID;
            entry.UserName = UserName;
          }
          return acc;
        },
        [],
      );

      // let finalObj = {};
      // action.payload.data.forEach(games => {
      //   const date = games.Created.split('T')[0];
      //   if (finalObj[date]) {
      //     finalObj[date].push(games);
      //   } else {
      //     finalObj[date] = [games];
      //   }
      // });
      // console.log(finalObj);
      // console.log(subtypeData);
      return {
        ...state,
        notes: action.payload.data,
      };

    default:
      return state;
  }
};

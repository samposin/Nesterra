import {
  GET_PHOTO_URL_FROM_MAP,
  GET_PHOTO_URL_FROM_SEARCH,
} from '../../actions/actionType/action.photoMapurl.type';

const initialState = {
  photo_url: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTO_URL_FROM_MAP:
      let photo = [];
      //  console.log(action.payload.data);
      let data1 = action.payload.data.map(item => {
        console.log(item);
        const pho = {
          photo_reference: item.photos
            ? item.photos[0].photo_reference
            : 'undefined',
        };
        photo.push(pho);
      });
      const photoo = photo.filter(item => item.url !== 'undefined');

      return {
        ...state,
        photo_url: photoo,
      };
    case GET_PHOTO_URL_FROM_SEARCH:
      return {
        ...state,
        photo_url: action.payload.data,
      };

    default:
      return state;
  }
};

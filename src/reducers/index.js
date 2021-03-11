//-Redux :
import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'song1', duration: '1.5min' },
    { title: 'song2', duration: '2.5min' },
    { title: 'song3', duration: '1min' },
    { title: 'song4', duration: '59s' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

// SECTION:

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

//-our combineReducers will be wired to the react-redux Provider => seting up our store :
//-<Provider store={createStore(reducers)} ></Provider>

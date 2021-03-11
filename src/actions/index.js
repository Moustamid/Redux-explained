//- Action Creator
export const selectSong = (song) => {
  //- Retuens an Action :
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};

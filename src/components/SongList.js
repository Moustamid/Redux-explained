import React, { Component } from 'react';
//-react-redux :
import { connect } from 'react-redux';
//- Action Creator
import { selectSong } from '../actions';

class SongList extends Component {
  //-helpers :
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    //. console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//-we need to 'connect' to our redux Provider to get the data .
//- state is all the data in our redux store .

const mapStateToProps = (state) => {
  //- inside of our component :
  //. this.props === { songs: state.songs }
  //. console.log(state);
  return { songs: state.songs };
};

//- our connect fct gets the 'mapStateToProps' : maps the sates to our component props
//- our connect fct gets the action Creator objec 'selectSong , ...' and maps the action to our component props
//. calling the action Creator , will 'automatically' take the return action and send it to redux dispatch fct ...
//- store.dispatch(selectSong(song)) , connect fct take cake of this implementation for us   ;

export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);

//- connect() is a fct by adding ()() we are calling a fct inside connect()

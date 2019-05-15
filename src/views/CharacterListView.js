import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getCharacters} from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      <h2>Fetching characters...</h2>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charaters,
  error: state.error,
  fetching: state.fetching
})

export default connect(
  mapStateToProps,
  {
    getCharacters
  }
)(CharacterListView);

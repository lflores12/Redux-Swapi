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
    console.log(this.props, 'clv props')
    if (this.props.fetching) {
      return <h2>Fetching characters...</h2>;
    }
    return (
      <div className="CharactersList_wrapper">
        { this.props.characters && <CharacterList characters={this.props.characters} />}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  console.log(state.charsReducer.characters, 'clv test')
  return {
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  fetching: state.charsReducer.fetching
  }
}
// const mapStateToProps = state => {
//   console.log(state)
// }

export default connect(
  mapStateToProps,
  {
    getCharacters
  }
)(CharacterListView);

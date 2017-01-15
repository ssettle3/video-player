import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  };

  onInputChanged(term) {
    this.setState({ term });
    this.props.onSearchVideo(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search for some videos"
          value={this.state.term}
          onChange={event => this.onInputChanged(event.target.value)} />
      </div>
    );
  };
}

export default SearchBar;

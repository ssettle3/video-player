import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyAwQk5CkLE54_onKaSZHTF-EgIv5J_xQtM";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      seletedVideo: null
    };

    this.searchVideo("deathstar");
  }

  searchVideo(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.searchVideo(term) }, 500);

    return (
      <div>
        <h1 className="header">YouTube - Except Not</h1>
        <SearchBar onSearchVideo={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onSelect={(selectedVideo) => { this.setState({ selectedVideo }) }}
          videos={this.state.videos} />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector(".container"));

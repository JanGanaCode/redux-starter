// import React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = '';

// create a new component which should produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    }

    YTSearch({key: API_KEY, term: 'blink182'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  };

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

// take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

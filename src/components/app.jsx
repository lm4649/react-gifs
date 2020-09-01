import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search-bar';
import Gif from './gif';
import GifList from './gif-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId : "pOZhmE42D1WrCWATLK",
      gifs: []
    };

    // this.search('disney');
  }

  search = (query) => {
    giphy('MvxQUzAfmZvFd3ZiLX3kk7dOyd2Ocahn').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ gifs: res.data });
    });
  }


  render() {
    // const gifs = [
    //     { id: "pOZhmE42D1WrCWATLK" },
    //     { id: "26AHONQ79FdWZhAI0" }
    //   ];

    return (
      <div>
        <div className='left-scene'>
          <SearchBar search={this.search} />
          <div className='selected-gif'>
          <div className='gif'>
            <Gif id={ this.state.selectedGifId } />
          </div>
          </div>
        </div>
        <div className='right-scene'>
          <div className="gif-list">
            <GifList gifs={this.state.gifs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

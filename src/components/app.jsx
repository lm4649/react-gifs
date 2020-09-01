import React, { Component } from 'react';
import SearchBar from './search-bar';
import Gif from './gif';
import GifList from './gif-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId : "pOZhmE42D1WrCWATLK"
    }
  }


  render() {
    const gifs = [
        { id: "pOZhmE42D1WrCWATLK" },
        { id: "26AHONQ79FdWZhAI0" }
      ];

    return (
      <div>
        <div className='left-scene'>
          <SearchBar />
          <div className='selected-gif'>
          <div className='gif'>
            <Gif id={ this.state.selectedGifId } />
          </div>
          </div>
        </div>
        <div className='right-scene'>
          <div className="gif-list">
            <GifList gifs={gifs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />);
  }
}


export default GifList;

import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  handleClick = (e, gifId) => this.props.select(gifId);

  render() {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} handleClick={this.handleClick} />);
  }
}


export default GifList;

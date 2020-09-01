import React, { Component } from 'react';


class Gif extends Component {
  render() {
    const url = `https://media4.giphy.com/media/${this.props.id}/200.gif`;
    return <img src={url} alt=""/>
  }
}


export default Gif;

import React, { Component } from 'react';


class Gif extends Component {
  render() {
    const url = `https://media4.giphy.com/media/${this.props.id}/200.gif`;
    return <img src={url} alt="" onClick={ this.props.handleClick ? e => this.props.handleClick(e, this.props.id) : null } />
  }
}


export default Gif;

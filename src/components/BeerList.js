import React, { Component } from 'react';
import API from '../utils/API';

class BeerList extends Component {
  state = {

  }
  componentDidMount() {
    this.getBeerList();
  }
  getBeerList = () => {
    API.getBeerList()
      .then(response => {
        console.log(response);
      }).catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <h1>Beer List!</h1>
    )
  }
}

export default BeerList
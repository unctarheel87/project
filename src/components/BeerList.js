import React, { Component } from 'react';
import API from '../utils/API';
import { setBeers } from '../actions';
import { connect } from 'react-redux';

class BeerList extends Component {
  componentDidMount() {
    this.getBeerList();
  }
  getBeerList = () => {
    API.getBeerList()
      .then(response => {
        console.log(response)
        this.props.getBeers(response.data);
        console.log(this.props)
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

const mapStateToProps = state => {
  return {
    beers: setBeers(state.beers)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBeers: (beers) => {
      dispatch(setBeers(beers))
    }
  }
}

const mapBeerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList);

export default mapBeerList;



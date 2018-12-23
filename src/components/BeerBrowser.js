import React, { Component } from 'react';
import API from '../utils/API';
import { setBeers } from '../actions';
import { connect } from 'react-redux';
import Beer from './Beer';
import AddBeer from './AddBeer';

const width = {
  width: "90%"
}

class BeerList extends Component {
  componentDidMount() {
    this.getBeerList();
  }
  getBeerList = () => {
    API.getBeerList()
      .then(response => {
        this.props.getBeers(response.data);
        console.log(this.props)
      }).catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div>
        <h1>Beer List!</h1>
        <AddBeer />
        <table style={ width }>
          <thead>
            <tr>
              <th>Brewery Name</th>
              <th>Beer Name</th>
              <th>Beer Style</th>
              <th>ABV</th>
              <th>IBU</th>
            </tr>
          </thead>
          <tbody>
            {this.props.beers.map(beer => (
              <Beer key={beer._id} {...beer}/>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers
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
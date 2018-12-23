import React from 'react';
import { connect } from 'react-redux';
import Beer from './Beer';
import AddBeer from './AddBeer';

const width = {
  width: "90%"
}

const BeerBrowser = props => (
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
        {props.beers.map(beer => (
          <Beer key={beer._id} {...beer}/>
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => {
  return {
    beers: state.beers
  }
}

const mapBeerBrowser = connect(mapStateToProps)(BeerBrowser);

export default mapBeerBrowser;
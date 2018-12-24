import React from 'react';
import { sortByBeerName, sortByBreweryName } from '../actions';
import { connect } from 'react-redux';

const handleChange = props => e => {
  if (e.target.value === "beer_name") {
    props.sortByBeerName();
  } else if (e.target.value === "brewery_name") {
    props.sortByBreweryName();
  }
};

const SortBeers = props => (
  <form className="uk-width-1-6 uk-margin">
    <select className="uk-select" value={props.filters.sortBy} onChange={ handleChange(props) }>
      <option value="">filter</option>
      <option value="beer_name">Beer Name</option>
      <option value="brewery_name">Brewery Name</option>
      <option value="">ABV (highest)</option>
      <option value="">ABV (lowest)</option>
    </select>
  </form>
)   

const mapStateToProps = state => {
  return {
    filters: state.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sortByBeerName: () => dispatch(sortByBeerName()),
    sortByBreweryName: () => dispatch(sortByBreweryName())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBeers);
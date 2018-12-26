import React from 'react';
import { sortByBreweryName, sortByBeerName, sortByABV } from '../actions';
import { connect } from 'react-redux';

const handleChange = props => e => {
  if (e.target.value === "brewery_name") {
    props.sortByBreweryName();
  } else if (e.target.value === "beer_name") {
    props.sortByBeerName();
  } else if (e.target.value === "abv") {
    props.sortByABV();
  }
};

const SortBeers = props => (
  <form className="uk-width-1-6 uk-margin">
    <select className="uk-select" value={props.filters.sortBy} onChange={ handleChange(props) }>
      <option value="">filter</option>
      <option value="brewery_name">Brewery Name</option>
      <option value="beer_name">Beer Name</option>
      <option value="abv">ABV</option>
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
    sortByBreweryName: () => dispatch(sortByBreweryName()),
    sortByBeerName: () => dispatch(sortByBeerName()),
    sortByABV: () => dispatch(sortByABV())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBeers);
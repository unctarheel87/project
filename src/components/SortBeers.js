import React from 'react';
import { beerNameAsc, beerNameDesc, abvHigh, abvLow } from '../actions';
import { connect } from 'react-redux';

const handleChange = props => () => {
  props[event.target.value]();
};

const SortBeers = (props) => (
  <form className="uk-width-1-6 uk-margin">
    <select className="uk-select" onChange={ handleChange(props) }>
      <option value=''>filter</option>
      <option value={'beer_name_asc'}>Beer Name (ascending)</option>
      <option value={'beer_name_desc'}>Beer Name (descending)</option>
      <option value={'abv_high'}>ABV (highest)</option>
      <option value={'abv_low'}>ABV (lowest)</option>
    </select>
  </form>
)   

const mapDispatchToProps = dispatch => {
  return {
    beer_name_asc: () => {
      dispatch(beerNameAsc())
    },
    beer_name_desc: () => {
      dispatch(beerNameDesc())
    },
    abv_high: () => {
      dispatch(abvHigh())
    },
    abv_low: () => {
      dispatch(abvLow())
    }
  }
}

export default connect(null, mapDispatchToProps)(SortBeers);
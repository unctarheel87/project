import React from 'react';
import API from '../utils/API';
import { connect } from 'react-redux';
import { remove_Beer } from '../actions'

const removeBeer = (id, dispatch) => () => {
  API.removeBeer(id)
    .then(response => {
      console.log(response);
      dispatch(remove_Beer(id));
    }).catch(err => {
      console.log(err);
    })
}

const Beer = ({
  dispatch, 
  "Brewery Name": brewery_name, 
  "Beer Name": beer_name, 
  "Beer Style": beer_style, 
  ABV, 
  IBU,
  _id, 
}) => (
    <tr>
      <td>{brewery_name}</td>
      <td>{beer_name}</td>
      <td>{beer_style}</td>
      <td>{ABV}</td>
      <td>{IBU}</td>
      <td><button onClick={removeBeer(_id, dispatch)}>X</button></td>
    </tr>
);

export default connect()(Beer);

import React, { Component } from 'react';
import API from '../utils/API';
import { add_Beer } from '../actions'
import { connect } from 'react-redux';

class AddBeer extends Component {
  state = {
    brewery_name: '',
    beer_name: '',
    beer_style: '',
    ABV: '',
    IBU: ''
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const newBeer = {
      "Brewery Name": this.state.brewery_name,
      "Beer Name": this.state.beer_name,
      "Beer Style": this.state.beer_style,
      ABV: this.state.ABV,
      IBU: this.state.IBU
    }
    API.addBeer(newBeer)
      .then(response => {
        console.log(response);
        this.props.addBeer(newBeer)
      }).catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.brewery_name} onChange={this.handleChange('brewery_name')} />
        <input type="text" value={this.state.beer_name} onChange={this.handleChange('beer_name')} />
        <input type="text" value={this.state.beer_style} onChange={this.handleChange('beer_style')} />
        <input type="text" value={this.state.ABV} onChange={this.handleChange('ABV')} />
        <input type="text" value={this.state.IBU} onChange={this.handleChange('IBU')} />
        <button type="submit">Add</button>
      </form>
    )   
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBeer: beer => {
      dispatch(add_Beer(beer))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddBeer);
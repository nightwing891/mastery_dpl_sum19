import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';

class NavSearch extends Component {
  state = { 
    query: '',
    results: [],
   }

toggle = () => {
  this.setState({results: []})
}

getInfo = () => {
     axios.get(`/api/courses`)
    .then( data  => {
      this.setState({
        results: data.data
      })
    })
    .catch( err => {
      console.log(err)
    })
}

handleInputChange = () => {
  this.setState({
    query: this.search.value
  }, () => {
    if (this.state.query && this.state.query.length > 0) {
      this.getInfo()
    }
    else {this.toggle()}
  })
}

  render() {
    const { course, filter } = this.state;
    return (
      <form style={{ marginLeft: '30%'}}>
        <input 
          required placeholder="Search" 
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          style={{ 
            height: '30px',
            width: '400px'
            
        }}
        />
        <Suggestions toggle={this.toggle} results={this.state.results} query={this.state.query} />
      </form>
    )
  }
}

export default NavSearch;


//add a form
// add a filter to the form (from the first day of React)

// condense search form into a magnifying glass icon
// get the form to work when user presses search button
// autopopulate the dropdown when a user types
// search courses inside of the database... maybe lessons also but double-check with Will

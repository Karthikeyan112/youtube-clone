import React, { Component } from 'react';

import { Paper, TextField } from '@material-ui/core'

class Searchbar extends Component {
  state = {
    searchTerm: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    return (
      <Paper elevation={6} style={{ padding: '25px' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="search..." onChange={this.handleChange} />
        </form>
      </Paper>
    )
  }
}

export default Searchbar;
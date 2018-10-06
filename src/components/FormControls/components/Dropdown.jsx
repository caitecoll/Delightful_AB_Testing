import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import styles from './Dropdown.module.scss';

export default class RadioButtons extends React.Component {
  state = {
    value: 4,
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <FormControl className={styles.formControl}>
        <InputLabel htmlFor="dropdown">Favorite Star Wars Movie?</InputLabel>
        <Select
          value={this.state.value}
          onChange={this.handleChange}
          inputProps={{
            name: 'dropdown',
            id: 'dropdown',
          }}
        >
          <MenuItem value={1}>The Phantom Menace</MenuItem>
          <MenuItem value={2}>Attack of the Clones</MenuItem>
          <MenuItem value={3}>Revenge of the Sith</MenuItem>
          <MenuItem value={4}>A New Hope</MenuItem>
          <MenuItem value={5}>The Empire Strikes Back</MenuItem>
          <MenuItem value={6}>Return of the Jedi</MenuItem>
          <MenuItem value={7}>The Force Awakens</MenuItem>
          <MenuItem value={8}>The Last Jedi</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

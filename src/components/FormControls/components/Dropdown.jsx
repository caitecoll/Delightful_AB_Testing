import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import emitter from 'react-ab-test/lib/emitter';
import Experiment from 'react-ab-test/lib/Experiment';
import Variant from 'react-ab-test/lib/Variant';
import styles from './Dropdown.module.scss';

const starWarsMovies = [
  'The Phantom Menace',
  'Attack of the Clones',
  'Revenge of the Sith',
  'A New Hope',
  'The Empire Strikes Back',
  'Return of the Jedi',
  'The Force Awakens',
  'The Last Jedi',
];

const harryPotterMovies = [
  "Harry Potter and the Philosopher's Stone",
  'Harry Potter and the Chamber of Secrets',
  'Harry Potter and the Prisoner of Azkaban',
  'Harry Potter and the Goblet of Fire',
  'Harry Potter and the Order of the Phoenix',
  'Harry Potter and the Half-Blood Prince',
  'Harry Potter and the Deathly Hallows – Part 1',
  'Harry Potter and the Deathly Hallows – Part 2',
];

export default class RadioButtons extends React.Component {
  state = {
    value: 4,
  };

  constructor(props) {
    super(props);

    emitter.addPlayListener((experimentName, variantName) => {
      console.log(`Displaying experiment "${experimentName}"; variant "${variantName}"`);
    });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <FormControl className={styles.formControl}>
        <Experiment name="Favorite Movie">
          <Variant name="Star Wars">
            <InputLabel htmlFor="dropdown">Favorite Star Wars Movie?</InputLabel>
            <Select
              value={value}
              onChange={this.handleChange}
              inputProps={{
                name: 'dropdown',
                id: 'dropdown',
              }}
            >
              {starWarsMovies.map((title, index) => (
                <MenuItem value={index + 1}>{title}</MenuItem>
              ))}
            </Select>
          </Variant>
          <Variant name="Harry Potter">
            <InputLabel htmlFor="dropdown">Favorite Harry Potter Movie?</InputLabel>
            <Select
              value={value}
              onChange={this.handleChange}
              inputProps={{
                name: 'dropdown',
                id: 'dropdown',
              }}
            >
              {harryPotterMovies.map((title, index) => (
                <MenuItem value={index + 1}>{title}</MenuItem>
              ))}
            </Select>
          </Variant>
        </Experiment>
      </FormControl>
    );
  }
}

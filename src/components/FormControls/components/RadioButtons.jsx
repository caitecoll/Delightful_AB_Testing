import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';

export default class RadioButtons extends React.Component {
  state = {
    value: '1',
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Radios</FormLabel>
        <RadioGroup name="radios" value={value} onChange={this.handleChange}>
          <FormControlLabel value="1" control={<Radio />} label="Radio 1" />
          <FormControlLabel value="2" control={<Radio />} label="Radio 2" />
          <FormControlLabel value="3" control={<Radio />} label="Radio 3" />
          <FormControlLabel value="4" control={<Radio />} label="Radio 4" />
        </RadioGroup>
      </FormControl>
    );
  }
}

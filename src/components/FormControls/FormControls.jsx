import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import React from 'react';

const FormControls = () => (
  <form>
    <FormGroup row>
      <Button variant="contained" color="primary">
        Test Button
      </Button>
    </FormGroup>
    <FormGroup row>
      <FormControl component="fieldset">
        <FormLabel component="legend">Checkboxes</FormLabel>
        <FormControlLabel control={<Checkbox name="checkboxes" />} label="Check 1" />
        <FormControlLabel control={<Checkbox name="checkboxes" />} label="Check 2" />
        <FormControlLabel control={<Checkbox name="checkboxes" />} label="Check 3" />
        <FormControlLabel control={<Checkbox name="checkboxes" />} label="Check 4" />
      </FormControl>
    </FormGroup>
    <FormGroup row>
      <FormControl component="fieldset">
        <FormLabel component="legend">Radios</FormLabel>
        <RadioGroup name="radios" value="1">
          <FormControlLabel value="1" control={<Radio />} label="Radio 1" />
          <FormControlLabel value="2" control={<Radio />} label="Radio 2" />
          <FormControlLabel value="3" control={<Radio />} label="Radio 3" />
          <FormControlLabel value="4" control={<Radio />} label="Radio 4" />
        </RadioGroup>
      </FormControl>
    </FormGroup>
  </form>
);

export default FormControls;

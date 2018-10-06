import { Checkbox, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';
import React from 'react';

export default () => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Checkboxes</FormLabel>
    <FormControlLabel control={<Checkbox name="checkboxes" />} label="Check 1" />
    <FormControlLabel control={<Checkbox name="checkboxes" />} label="Check 2" />
    <FormControlLabel control={<Checkbox name="checkboxes" />} label="Check 3" />
    <FormControlLabel control={<Checkbox name="checkboxes" />} label="Check 4" />
  </FormControl>
);

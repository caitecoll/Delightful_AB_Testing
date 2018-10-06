import { FormGroup } from '@material-ui/core';
import React from 'react';
import Button from './components/Button';
import Checkboxes from './components/Checkboxes';
import Dropdown from './components/Dropdown';
import RadioButtons from './components/RadioButtons';
import styles from './FormControls.module.scss';

const FormControls = () => (
  <form className={styles.formControls}>
    <FormGroup row>
      <Button />
    </FormGroup>
    <FormGroup row>
      <Checkboxes />
    </FormGroup>
    <FormGroup row>
      <RadioButtons />
    </FormGroup>
    <FormGroup row>
      <Dropdown />
    </FormGroup>
  </form>
);

export default FormControls;

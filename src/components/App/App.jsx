import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import {
  createGenerateClassName,
  createMuiTheme,
  jssPreset,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import { create } from 'jss';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import FormControls from '../FormControls';
import './App.css';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
});

const App = () => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <FormControls />
      </div>
    </MuiThemeProvider>
  </JssProvider>
);

export default App;
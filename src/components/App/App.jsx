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
import emitter from 'react-ab-test/lib/emitter';
import JssProvider from 'react-jss/lib/JssProvider';
import Router from '../Router';
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

emitter.addPlayListener((experimentName, variantName) => {
  console.log(`Displaying experiment "${experimentName}"; variant "${variantName}"`);
});

const App = () => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <Router />
      </div>
    </MuiThemeProvider>
  </JssProvider>
);

export default App;

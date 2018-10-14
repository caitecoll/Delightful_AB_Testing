import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';

export default class SearchForm extends React.Component {
  state = {
    type: 'md5',
    operator: 'is',
    value: '',
    messageOpen: false,
  };

  handleChange = (field) => (e) => {
    this.setState({ [field]: e.target.value });
  };

  handleClose = () => {
    this.setState({ messageOpen: false });
  };

  handleSearch = () => {
    this.setState({ messageOpen: true });
  };

  render() {
    const { type, operator, value, messageOpen } = this.state;
    return (
      <div>
        <form>
          <FormControl>
            <InputLabel htmlFor="dropdown">Filter Type</InputLabel>
            <Select
              value={type}
              onChange={this.handleChange('type')}
              inputProps={{
                name: 'type',
                id: 'type',
              }}
            >
              <MenuItem value="filename">Filename</MenuItem>
              <MenuItem value="filesize">File Size</MenuItem>
              <MenuItem value="md5">MD5 Hash</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="dropdown">Filter Operator</InputLabel>
            <Select
              value={operator}
              onChange={this.handleChange('operator')}
              inputProps={{
                name: 'operator',
                id: 'operator',
              }}
            >
              <MenuItem value="is">Is</MenuItem>
              <MenuItem value="isNot">Is Not</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="value"
            label="Filter Value"
            value={value}
            onChange={this.handleChange('value')}
          />
          <Button variant="contained" color="primary" onClick={this.handleSearch}>
            Search
          </Button>
        </form>
        <Typography>
          Would you like to see your organization&apos;s cloud data in the results?{' '}
          <a href="#">Sign up</a> for a cloud connector addon like Google Drive or OneDrive today!
        </Typography>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={messageOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message="Would you like to see your organization&apos;s cloud data in the results? Sign up for a cloud connector addon like Google Drive or OneDrive."
          action={[
            <Button color="secondary" size="small">
              Sign up
            </Button>,
          ]}
        />
      </div>
    );
  }
}

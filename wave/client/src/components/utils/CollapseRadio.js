import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/fontawesome-free-solid';

import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Radio,
  RadioGroup,
  FormControlLabel
} from '@material-ui/core';

class CollapseRadio extends Component {
  state = {
    open: false,
    value: '0'
  };

  componentDidMount() {
    if (this.props.initState) {
      this.setState({
        open: this.props.initState
      });
    }
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleAngle = () =>
    this.state.open ? (
      <FontAwesomeIcon className="icon" icon={faAngleUp} />
    ) : (
      <FontAwesomeIcon className="icon" icon={faAngleDown} />
    );

  renderList = () =>
    this.props.list
      ? this.props.list.map(value => (
          <FormControlLabel
            key={value._id}
            value={`${value._id}`}
            control={<Radio />}
            label={value.name}
          />
        ))
      : null;

  handleChange = event => {
    this.props.handleFilters(event.target.value);

    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div>
        <List style={{ borderBottom: '1px solid #dbdbdb' }}>
          <ListItem
            onClick={this.handleClick}
            style={{ padding: '10px 23px 10px 0' }}
          >
            <ListItemText
              className="collapse_title"
              primary={this.props.title}
            />
            {this.handleAngle()}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <RadioGroup
                aria-label="prices"
                name="prices"
                value={this.state.value}
                onChange={this.handleChange}
              >
                {this.renderList()}
              </RadioGroup>
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

export default CollapseRadio;

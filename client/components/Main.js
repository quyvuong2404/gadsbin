"use strict";
import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{React.cloneElement(this.props.children, this.props)}</div>
    );
  }
}
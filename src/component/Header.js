import React, { PureComponent } from 'react';

import logo from '../logo.png';

export default class Footer extends PureComponent {
  render() {
    return (
      <header className="logo-area">
        <img src={logo} alt="Learn JavaScript" />
        <h3>Learn JavaScript with Zonayed</h3>
      </header>
    )
  }
}

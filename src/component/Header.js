import React, { PureComponent } from 'react';

import logo from '../logo.png';

export default class Footer extends PureComponent {
  render() {
    return (
      <header className="logo-area">
        <img src={logo} alt="Practical JavaScript" />
        <h3>হাতেকলমে জাভাস্ক্রিপ্ট</h3>
        <p>সম্পূর্ণ বাংলায় জাভাস্ক্রিপ্ট শিখুন</p>
      </header>
    )
  }
}

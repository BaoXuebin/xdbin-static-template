import React, { Component } from 'react';

import Page from './base/Page';
import ThemeContext from '../context/ThemeContext';

import './styles/Index.css'

class Index extends Component {

  theme = this.context.theme

  render() {
    if (this.context.theme !== this.theme) {
      this.theme = this.context.theme
      console.log(this.theme)
    }

    return (
      <div className="index-page">
        主页
      </div>
    );
  }
}

Index.contextType = ThemeContext

export default Page(Index);

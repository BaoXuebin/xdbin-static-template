import React, { Component } from 'react';

import Page from './base/Page';
import ThemeContext from '../context/ThemeContext';
import TextButton from '../components/TextButton';
import Loader from '../components/Loader';

import './styles/Index.css'

class Index extends Component {

  theme = this.context.theme

  render() {
    if (this.context.theme !== this.theme) {
      this.theme = this.context.theme
    }

    return (
      <div className="index-page page">
        <h2>组件列表：</h2>
        <div>
          <strong>1. 加载中提示</strong>
          <br /><br />
          <Loader />
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <strong>2. 文字按钮</strong>
          <br /><br />
          <TextButton onClick={() => { console.log('点击文字按钮') }} value="文字按钮" />
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <strong>3. 文本输入框</strong>
          <br /><br />
          <input type="text" placeholder="文本输入框~" />
        </div>
      </div>
    );
  }
}

Index.contextType = ThemeContext

export default Page(Index);

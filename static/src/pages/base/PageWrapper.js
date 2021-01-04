import React, { Component } from 'react';

import ThemeToggle from '../../components/ThemeToggle';
import ThemeContext from '../../context/ThemeContext';

import './styles/PageWrapper.css';
import LogoImage from '../../assets/logo.png'
import Config from '../../config/Config';

class PageWrapper extends Component {

  render() {
    let { theme } = this.context;
    return (
      <div className={`${theme}-theme`}>
        <div className="wrapper">
          <header>
            <nav className="navbar">
              <div className="container">
                <div className="navbar-header header-logo" to="/">
                  <img src={LogoImage} width="16" height="16" />
                  {Config.title}
                </div>
                <div className="menu navbar-right">
                  <a href="/" target="_blank">主页</a>
                  <a href="/about" target="_blank">关于</a>
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </header>
          <div className="main">
            <div className="main-wrap">
              {this.props.children}
            </div>
          </div>
          <footer className="footer">
            <div className="copyright">
              <a href="https:xdbin.com">@{Config.author}</a>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

PageWrapper.contextType = ThemeContext;

export default PageWrapper;
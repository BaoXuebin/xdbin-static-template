import React, { Component } from 'react';
import { HashRouter as Router } from "react-router-dom";

import PageWrapper from './pages/base/PageWrapper';
import RouteMap from './pages/base/RouteMap';
import ThemeContext from './context/ThemeContext'

import './App.css';

class App extends Component {

  state = {
    theme: localStorage.getItem('theme') || 'light'
  }

  toggleTheme = (theme) => {
    this.setState({ theme })
  }

  autoToggleTheme = () => {
    let currentTheme = window.localStorage && window.localStorage.getItem('theme');
    if (window.matchMedia) {
      const browserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      currentTheme = browserTheme
      if (currentTheme == 'dark') {
        document.getElementsByTagName('body')[0].classList.add('dark-theme');
        document.getElementsByTagName('body')[0].style.backgroundColor = '#292a2d';
        document.getElementsByTagName('body')[0].style.color = '#a9a9b3';
      } else {
        document.getElementsByTagName('body')[0].classList.remove('dark-theme');
        document.getElementsByTagName('body')[0].style.backgroundColor = '#fff';
        document.getElementsByTagName('body')[0].style.color = '#161209';
      }
      window.localStorage.setItem('theme', currentTheme)
      this.toggleTheme(currentTheme)
    }
  }

  componentDidMount() {
    // tab 切换刷新主题
    document.addEventListener('visibilitychange', () => {
      this.autoToggleTheme();
    })
  }

  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
          <Router>
            <PageWrapper>
              <RouteMap />
            </PageWrapper>
          </Router>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;

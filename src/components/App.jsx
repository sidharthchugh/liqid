import React, { Component } from 'react';

import IntroContainer from './IntroContainer';
import SurveyContainer from './SurveyContainer';
import ResultsContainer from './ResultsContainer';

import './App.scss';
import logo from './logo.svg';

export default class App extends Component {
  render() {
    const stateMock = 'intro';
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <div className="app-container">
          <h1>Employee Engagement Survey</h1>
          {{
            intro: <IntroContainer />,
            survey: <SurveyContainer />,
            results: <ResultsContainer />,
          }[stateMock]}
        </div>
      </div>
    )
  }
}

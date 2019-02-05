import React, { Component } from 'react';

import IntroContainer from './IntroContainer';
import SurveyContainer from './SurveyContainer';
import AnswersContainer from './AnswersContainer';

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

        <h2>Employee Engagement Survey</h2>

        <div className="app-container">
          {{
            intro: <IntroContainer />,
            survey: <SurveyContainer />,
            results: <AnswersContainer />,
          }[stateMock]}
        </div>
      </div>
    )
  }
}

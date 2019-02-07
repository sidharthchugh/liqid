import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as SurveyActions from "../actions";

import IntroContainer from './IntroContainer';
import SurveyContainer from './SurveyContainer';
import AnswersContainer from './AnswersContainer';

import './App.scss';
import logo from './logo.svg';

class App extends Component {
  render() {
    const view = this.props.state.view;
    const questions = this.props.state.questions;
    const answers = this.props.state.answers;

    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>

        <h2>Employee Engagement Survey</h2>

        <div className="app-container">
          {{
            1: <IntroContainer onStart={ this.props.startSurvey } />,
            2: <SurveyContainer onRestart={ this.props.restartSurvey } />,
            3: <AnswersContainer questions={ questions } answers={ answers } onRestart={ this.props.restartSurvey } />,
          }[view]}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SurveyActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

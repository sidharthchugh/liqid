import React, { Component } from 'react';

import ProgressBar from './ProgressBar';
import RestartButton from './RestartButton';

export default class SurveyContainer extends Component {
  render() {
    return (
      <div className="survey-container">
        <h1>SurveyContainer</h1>
        <ProgressBar/>
        <RestartButton/>
      </div>
    )
  }
}

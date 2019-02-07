import React, { Component } from 'react';
import { Form, Button, CardColumns, Card, ProgressBar } from 'react-bootstrap';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as SurveyActions from "../actions";

import RestartButtonContainer from './RestartButtonContainer';

export class SurveyContainer extends Component {
  state = {
    answer: this.props.answers[this.props.questions.currentQuestion] || "",
    currentQuestion: this.props.questions.currentQuestion
  };

  handleChange = (e) => {
    this.setState({answer: e.target.value});
  };

  handleSubmit = (nextQuestion) => {
    const question = this.state.currentQuestion;
    const answer = this.state.answer;

    this.props.submitAnswer(nextQuestion, question, answer);
  };

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if(oldProps.questions.currentQuestion !== newProps.questions.currentQuestion) {
      this.setState({
        answer: this.props.answers[this.props.questions.currentQuestion] || "",
        currentQuestion: this.props.questions.currentQuestion
      });
    }
  }

  render() {

    const questions = this.props.questions;
    const currentQuestionIndex = this.state.currentQuestion;
    const currentQuestion = questions.allQuestions[currentQuestionIndex];
    const progressPerc = (100 * currentQuestionIndex) / questions.allQuestions.length;

    let inputField;

    if (currentQuestion.inputType === 1) {
      const options = currentQuestion.options.map((option, i) => (
        <option key={i} value={i} >{ option }</option>
      ));

      inputField = 
        <Form.Control required as="select" value={ this.state.answer } onChange={this.handleChange}>
          <option value="" disabled> -- select an option -- </option>
          { options }
        </Form.Control>;

    } else if(currentQuestion.inputType === 2) {
        const checks = currentQuestion.options.map((option, i) => (
          <Card key={i}>
            <Card.Body>
              <Card.Subtitle>{ option }</Card.Subtitle>
              <Form.Check
                checked={this.state.answer === i.toString()}
                type="radio"
                value={ i }
                name={`question ${currentQuestionIndex}`}
                onChange={ this.handleChange }
              />
            </Card.Body>
          </Card>
        ));
        inputField = 
          <CardColumns>
            { checks }
          </CardColumns>;

    } else {
      inputField = 
        <Form.Control 
          as="textarea" value={ this.state.answer }
          onChange={ this.handleChange } />;
    }

    return (
      <div className="survey-container">
        <ProgressBar now={ progressPerc } />

        <RestartButtonContainer onClick={ this.props.onRestart } />

        <Form>
  				<Form.Group controlId="exampleForm.ControlTextarea1">
  				  <Form.Label><h4>{ currentQuestion.question }</h4></Form.Label>
            <div className="input-container">
              { inputField }
            </div>
  				</Form.Group>

  				<div className="survey-buttons">
  					<Button type="button" variant="secondary" 
              onClick={ () => this.handleSubmit(currentQuestionIndex - 1) }  
              disabled={!currentQuestionIndex}>
  					  Back
  					</Button>
  					<Button type="button" variant="primary" 
              onClick={ () => this.handleSubmit(currentQuestionIndex + 1) }
              disabled={!this.state.answer}>
              { currentQuestionIndex < (questions.allQuestions.length - 1)
                ? 'Next'
                : 'Finish'
              }
  					</Button>
  				</div>
				</Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  answers: state.answers,
  questions: state.questions
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SurveyActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);

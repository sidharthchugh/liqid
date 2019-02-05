import React, { Component } from 'react';
import { Form, Button, CardColumns, Card } from 'react-bootstrap';

import ProgressBarContainer from './ProgressBarContainer';
import RestartButtonContainer from './RestartButtonContainer';

export default class SurveyContainer extends Component {
  render() {
    return (
      <div className="survey-container">
        <ProgressBarContainer />
        <RestartButtonContainer />
        <Form>
  				<Form.Group controlId="exampleForm.ControlTextarea1">
  				  <Form.Label><h4>Do you like your job?</h4></Form.Label>
  				  <Form.Control as="textarea" />
{/*						<Form.Control required as="select">
              <option disabled selected value> -- select an option -- </option>
    				  <option>Yes</option>
    				  <option>No</option>
    				  <option>Sometimes</option>
    				</Form.Control>
*/}
{/*            <CardColumns>
              <Card>
                <Card.Body>
                  <Card.Subtitle>Yes</Card.Subtitle>
                  <Form.Check
                    type="radio"
                    name="question"
                  />
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Subtitle>No</Card.Subtitle>
                  <Form.Check
                    type="radio"
                    name="question"
                  />
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Subtitle>Sometimes</Card.Subtitle>
                  <Form.Check
                    type="radio"
                    name="question"
                  />
                </Card.Body>
              </Card>
            </CardColumns>*/}
  				</Form.Group>

  				<div className="survey-buttons">
  					<Button variant="secondary">
  					  Back
  					</Button>
  					<Button variant="primary">
  					  Next
  					</Button>
  				</div>
				</Form>
      </div>
    )
  }
}

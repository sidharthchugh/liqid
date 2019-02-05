import React from 'react';

import RestartButtonContainer from './RestartButtonContainer';

export default function AnswersContainer() {
  return (
    <div className="answers-container">
      <p className="text-secondary">Bellow you may read once again the questions from the survey and your answers.</p>
      <RestartButtonContainer />
      <div className="answers-list">
      	<div className="answers-item border-bottom">
					<h5>1. How old are you?</h5>
					<p>26</p>
      	</div>
				<div className="answers-item border-bottom">
					<h5>2. Do you like your job?</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at rutrum sapien. Suspendisse tincidunt mauris id ipsum venenatis, sit amet ornare ipsum varius. Aenean est massa, aliquet quis rutrum ut, sollicitudin vehicula dolor. Fusce at velit tempus, sagittis tellus id, maximus sem. Quisque vitae lacus eget elit imperdiet posuere. Duis ornare nunc sit amet enim posuere consequat. Vivamus vel pharetra mauris, sed vehicula lacus.</p>
      	</div>
      	<div className="answers-item">
					<h5>3. What's your name?</h5>
					<p>Débora</p>
      	</div>
      </div>
    </div>
  );
}

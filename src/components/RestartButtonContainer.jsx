import React from 'react';
import Button from 'react-bootstrap/Button';

export default function RestartButtonContainer(props) {
  return (
    <div className="restart-button-container">
      <Button variant="light" onClick={ props.onClick }>Restart Survey</Button>
    </div>
  );
}

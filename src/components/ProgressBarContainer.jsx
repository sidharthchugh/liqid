import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ProgressBarContainer() {
  return (
    <div className="progress-bar-container">
      <ProgressBar now={60} />
    </div>
  );
}

import React from 'react';
import Button from 'react-bootstrap/Button';

export default function IntroContainer() {
  return (
    <div className="intro-container">
      <p className="text-secondary">An organization’s success starts and ends with its employees–so we at Liqid want to find how you really feel about your job to get the feedback we need to make improvements to keep our team happy.</p>
      <Button variant="primary">Start Survey</Button>
    </div>
  );
}

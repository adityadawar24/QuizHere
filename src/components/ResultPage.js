import React from 'react';

const ResultPage = () => {
  const score = localStorage.getItem('score');
  const timeTaken = parseInt(localStorage.getItem('timeTaken'));
  const minutes = Math.floor(timeTaken / 60000);
  const seconds = ((timeTaken % 60000) / 1000).toFixed(0);

  return (
    <div>
      <h1>Quiz Completed!</h1>
      <h2>Your Score: {score} / 5</h2>
      <p>Total Time Taken: {minutes}m {seconds}s</p>
    </div>
  );
};

export default ResultPage;
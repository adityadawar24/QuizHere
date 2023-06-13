import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
  const username = localStorage.getItem('username');

  return (
    <div>
      <h1>Hello, {username}!</h1>
      <h2>Quiz Rules</h2>
      <ul>
        <li>There are 5 questions in total.</li>
        <li>All the questions are based on General Knowledge.</li>
        <li>Each question has 4 multiple choice answers.</li>
        <li>You have limited time to answer each question.</li>
        <li>The faster you answer the greater the reward.</li>
      </ul>
      <button onClick={() => navigate('/quiz')}>Start Quiz</button>
    </div>
  );
};

export default HomePage;
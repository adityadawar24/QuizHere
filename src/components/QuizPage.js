import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const questionsList = [
    {
      question: 'Who invented the telephone?',
      options: [
        'Alexander Graham Bell',
        'Thomas Edison',
        'Nikola Tesla',
        'Albert Einstein',
      ],
      answer: 'Alexander Graham Bell',
    },
    {
      question: 'Which continent is the largest by land area?',
      options: ['Asia', 'Africa', 'North America', 'Europe'],
      answer: 'Asia',
    },
    {
      question: 'Who is the current President of the United States (as of 2023)?',
      options: ['Joe Biden', 'Donald Trump', 'Kamala Harris', 'Barack Obama'],
      answer: 'Joe Biden',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Fe', 'Hg'],
      answer: 'Au',
    },
    {
      question: 'Which is the longest river in the world?',
      options: ['Nile', 'Amazon', 'Mississippi', 'Yangtze'],
      answer: 'Nile',
    },
  ];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const navigate = useNavigate();

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);


  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questionsList[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questionsList.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem('score', score);
      localStorage.setItem('timeTaken', Date.now() - startTime);
      navigate('/result');
    }
  };

  return (
    <div>
      <h2>{questionsList[currentQuestion].question}</h2>
      <p>Timer: {formatTime(timeElapsed)}</p>
      <ul>
        {questionsList[currentQuestion].options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizPage;
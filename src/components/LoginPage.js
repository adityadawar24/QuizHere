import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    navigate('/home');
  };

  return (
    <div>

      <h2>Login to Proceed!</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
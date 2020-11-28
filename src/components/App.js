import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import './App.css';

const App = () => {
  const { login } = useAuthContext();
  const handleClick = () => {
    const email = 'keith.k.charles@gmail.com';
    const pass = 'IXY]{)3Qg=RqZI6a<8)R';
    login(email, pass);
  };

  return (
    <main>
      <div className="app-container">
        <h1>Hello World!</h1>
        <p>This is a placeholder for our chain letter app.</p>
        <button type="button" onClick={handleClick}>
          Login
        </button>
      </div>
    </main>
  );
};

export default App;

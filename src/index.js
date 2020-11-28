import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/templates/App';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';

const Wrappers = () => (
  <AuthProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </AuthProvider>
);

ReactDOM.render(<Wrappers />, document.getElementById('root'));

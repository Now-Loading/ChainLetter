import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';

const Wrappers = () => (
  <AuthProvider>
    <Suspense fallback={<h3>Loading...</h3>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </AuthProvider>
);

ReactDOM.render(<Wrappers />, document.getElementById('root'));

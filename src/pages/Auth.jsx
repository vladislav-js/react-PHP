import React from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div>
      <h1>Auth Page</h1>
      <p>This is the authentication page.</p>
      <ul>
        <li><Link to="/">Go to Homepage</Link></li>
      </ul>
    </div>
  );
};

export default Auth;

import React from 'react';
import { useState } from 'react';
import styles from './Auth.css';
import { signInUser, signUpUser } from '../../services/user';
import { useUser } from '../../context/UserContext';
import { useHistory, useLocation } from 'react-router-dom';

export default function Auth() {
  const { login, signup } = useUser();
  const history = useHistory();
  const location = useLocation();

  const [isSignUp, setIsSignUp] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toggleAuth = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      const url = location.state.origin ? location.state.origin.pathname : '/';
      history.replace(url);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles['auth-page']}>
      <h1>Guestbook</h1>
      <div className={styles['auth-menu']}>
        <span
          className={`${styles['auth-toggle']} ${
            isSignUp ? '' : styles.selected
          }`}
          onClick={toggleAuth}
        >
          Sign In
        </span>
        <span
          className={`${styles['auth-toggle']} ${
            isSignUp ? styles.selected : ''
          }`}
          onClick={toggleAuth}
        >
          Sign Up
        </span>
      </div>
      {error && <p>{`${error}`}</p>}
      <form className={styles['auth']} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button>{isSignUp ? 'Sign up' : 'Sign in'}</button>
      </form>
    </div>
  );
}

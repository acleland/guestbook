import React from 'react';
import { useState } from 'react';
import styles from './Auth.css';
import { signInUser, signUpUser } from '../../services/user';
import { useUser } from '../../context/UserContext';
import { useHistory, useLocation } from 'react-router-dom';

export default function Auth() {
  const { login } = useUser();
  const history = useHistory;

  const [isSignUp, setIsSignUp] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toggleAuth = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch {
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
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>{isSignUp ? 'Sign up' : 'Sign in'}</button>
      </form>
    </div>
  );
}

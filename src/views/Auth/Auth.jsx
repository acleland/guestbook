import React from 'react';
import { useState } from 'react';
import styles from './Auth.css';
import { signInUser, signUpUser } from '../../services/user';

export default function Auth({ setCurrentUser }) {
  const [isSignUp, setIsSignUp] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toggleAuth = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      try {
        const resp = await signUpUser(email, password);
        setCurrentUser(resp.email);
      } catch (e) {
        setError(e.message);
      }
    } else {
      try {
        const resp = await signInUser(email, password);
        setCurrentUser(resp.email);
      } catch (e) {
        setError(e.message);
      }
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
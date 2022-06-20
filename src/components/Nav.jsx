import React from 'react';
import { useUser } from '../context/UserContext';
import styles from '../styles.css';

export default function Nav() {
  const { user, logout } = useUser();
  return (
    <nav>
      <h2>Guestbook</h2>
      {user.email ? (
        <span className={styles.login}>
          <p>{user.email}</p> <button onClick={() => logout()}>logout</button>
        </span>
      ) : (
        ''
      )}
    </nav>
  );
}

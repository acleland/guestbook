import React from 'react';
import styles from '../styles.css';

import { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { createEntry, getEntries } from '../services/entries';

export default function EntryList() {
  const [entries, setEntries] = useState([]);
  const { user } = useUser();
  const [error, setError] = useState('');
  const [newEntry, setNewEntry] = useState('');

  useEffect(() => {
    const getEntriesData = async () => {
      try {
        const resp = await getEntries();
        console.log('resp', resp);
        setEntries(resp);
      } catch (e) {
        setError(e.message);
      }
    };
    getEntriesData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('user id', user.id);
    const resp = await createEntry({ userId: user.id, content: newEntry });
    setEntries([resp, ...entries]);
    setNewEntry('');
  };

  return (
    <section>
      {error !== '' ? (
        <p>
          Uh oh, error. <br />
          {error}
        </p>
      ) : (
        <></>
      )}
      <form className={styles.entryForm} onSubmit={handleSubmit}>
        <textarea
          id="guestbookInput"
          rows="3"
          cols="20"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        ></textarea>
        <button>Add entry</button>
      </form>
      <h2>Latest Entries</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <div>
              <h3>{entry.content}</h3>
              <p>
                {user.email} <br />
                {'on ' + new Date(entry.created_at).toLocaleString('en-US')}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

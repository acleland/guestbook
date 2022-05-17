import React from 'react';
import styles from '../styles.css';

export default function EntryList() {
  return (
    <section>
      <form className={styles.entryForm}>
        <textarea id="guestbookInput" rows="5" cols="33"></textarea>
        <button>Add entry</button>
      </form>
      <h2>Latest Entries</h2>
    </section>
  );
}

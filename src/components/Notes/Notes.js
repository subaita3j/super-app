import React, { useState } from 'react';
import styles from './Notes.module.css';

const Notes = () => {
  const [text, setText] = useState(JSON.parse(localStorage.getItem('Notes')));
  const handleChange = (e) => {
    setText(e.target.value);
    localStorage.setItem('Notes', JSON.stringify(text));
  };
  //   console.log(text);
  return (
    <div className={styles.NotesContainer}>
      <h3 className={styles.Notesheading}> All Notes</h3>
      <textarea
        className={styles.NotesText}
        placeholder="Write Here"
        value={text}
        onChange={(e) => handleChange(e)}
      ></textarea>
    </div>
  );
};

export default Notes;

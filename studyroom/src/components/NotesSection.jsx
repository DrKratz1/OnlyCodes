import React, { useState } from 'react';
import '../styles/NotesSection.css';

function NoteTextbox() {
  const [note, setNote] = useState('');

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <div>
    <h2 className = "NoteHeader">Notes!</h2>

      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Awaiting your wisdom..."
        rows={15}
        cols={90} 
      />
    </div>
  );
}

export default NoteTextbox;
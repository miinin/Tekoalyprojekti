import React from 'react';
import { LATEST_UPDATE } from '../data/latestUpdate';

// Tuoreimman päivityksen muutoslista (sisältö: src/data/latestUpdate.js)
export default function UpdateNotes({ compact = false }) {
  return (
    <ul className={`update-notes${compact ? ' update-notes--compact' : ''}`}>
      {LATEST_UPDATE.items.map(({ icon, text }) => (
        <li key={text}>
          <span className="update-notes-icon">{React.createElement(icon, { size: compact ? 18 : 22 })}</span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

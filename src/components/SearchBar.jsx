import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ value, onChange }) {
  const [focus, setFocus] = useState(false);

  return (
    <div className={`search ${focus ? 'open' : ''}`}>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder="Search events..."
      />
      🔍
    </div>
  );
}
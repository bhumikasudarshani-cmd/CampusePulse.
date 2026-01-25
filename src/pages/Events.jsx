import { useState } from 'react';
import events from '../data/events';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';

export default function Events() {
  const [q, setQ] = useState('');

  const filtered = events.filter(e =>
    e.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <SearchBar value={q} onChange={setQ} />
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        {filtered.map(e => <EventCard key={e.id} {...e} />)}
      </div>
    </div>
  );
}
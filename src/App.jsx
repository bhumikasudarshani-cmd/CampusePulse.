import { useState } from 'react'; 
import './styles/global.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Events");

  const eventData = [
    { 
      id: 1, 
      category: "Hackathon", 
      title: "HackMatrix 2024: 48-Hour Innovation Challenge", 
      date: "Dec 28, 2024", 
      time: "9:00 AM - 5:00 PM", 
      location: "Computer Science Building, Lab 301", 
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 2, 
      category: "Music", 
      title: "Indie Night: Campus Music Festival", 
      date: "Dec 30, 2024", 
      time: "6:00 PM - 10:00 PM", 
      location: "Main Auditorium", 
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 3, 
      category: "Seminar", 
      title: "AI & Machine Learning Workshop Series", 
      date: "Jan 5, 2025", 
      time: "2:00 PM - 5:00 PM", 
      location: "Engineering Block, Seminar Hall", 
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=800&q=80" 
    }
  ];

  const filteredEvents = eventData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All Events" || event.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All Events", "Tech", "Music", "Sports", "Dance", "Seminar", "Hackathons"];

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon-box">
            <span className="logo-emoji">📅</span>
          </div>
          <div className="logo-text-group">
            <h1 className="logo-name">CampusPulse</h1>
            <span className="logo-tagline">All Events. One Place.</span>
          </div>
        </div>
        <div className="nav-links">
          <button className="nav-btn active">📅 Events</button>
          <button className="nav-btn">📍 Near Me</button>
          <button className="nav-btn">👤 Organizer</button>
        </div>
      </nav>

      <header className="hero">
        <h1 className="hero-title">Discover Campus Events</h1>
        <p className="hero-subtitle">Find and join exciting events happening around you</p>
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search events..." 
            className="main-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <button className="filter-icon-btn">≡</button>
        </div>
        <div className="category-list">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`category-pill ${cat.toLowerCase()} ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)} 
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* SECTION 1: RECOMMENDED */}
      <h2 className="section-title">✨ Recommended for You ({filteredEvents.length})</h2>
      <main className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="card-image-container">
                <img src={event.image} alt={event.title} />
                <span className={`badge ${event.category.toLowerCase()}`}>
                  {event.category}
                </span>
                <span className="ai-pick">
                  <span className="dot">●</span> AI Pick
                </span>
              </div>
              <div className="card-body">
                <h3>{event.title}</h3>
                <p>📅 {event.date}</p>
                <p>⏰ {event.time}</p>
                <p>📍 {event.location}</p>
                <button className="calendar-btn">+ Add to Calendar</button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>No events found matching "{searchTerm}"</h3>
            <p>Try searching for a different keyword or category.</p>
          </div>
        )}
      </main>

      {/* --- ALL EVENTS SECTION --- */}
      <div className="section-container">
        <h2 className="section-title">All Events</h2>
  
        {/* Ensure this div has the 'events-grid' class to force the 3-column row */}
        <main className="events-grid">
          {eventData.map((event) => (
            <div key={`all-row-${event.id}`} className="event-card">
              <div className="card-image-container">
                <img src={event.image} alt={event.title} />
                <span className={`badge ${event.category.toLowerCase()}`}>
                  {event.category}
                </span>
                <span className="ai-pick">
                  <span className="dot">●</span> AI Pick
                </span>
              </div>
              <div className="card-body">
                <h3>{event.title}</h3>
                <p><span className="icon-blue">📅</span> {event.date}</p>
                <p><span className="icon-purple">⏰</span> {event.time}</p>
                <p><span className="icon-pink">📍</span> {event.location}</p>
                <button className="calendar-btn">
                   <span className="plus-icon">+</span> Add to Calendar
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div> // Closing div for container
  );
}

export default App;
import './EventCard.css';

export default function EventCard({ title, date, description, category }) {
  return (
    <div className="card">
      <span className="tag">{category}</span>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  );
}
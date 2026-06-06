function StatsCard({ icon, title, value }) {
  return (
    <div className="card">
      <div className="card-icon">
        {icon}
      </div>

      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
}

export default StatsCard;
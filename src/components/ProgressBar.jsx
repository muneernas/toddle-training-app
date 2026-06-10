import './ProgressBar.css';

export default function ProgressBar({ percent, label }) {
  return (
    <div className="progress-bar-wrap">
      {label && <div className="progress-bar-label">{label}</div>}
      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${Math.min(100, percent)}%` }} />
      </div>
      <div className="progress-bar-percent">{percent}%</div>
    </div>
  );
}

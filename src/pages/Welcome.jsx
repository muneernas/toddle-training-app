import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, BookOpen, ArrowRight, MonitorPlay, BrainCircuit, Trophy } from 'lucide-react';
import { useTeacher } from '../hooks/useTeacher';
import { mypSubjects } from '../data/mypSubjects';
import SchoolLogo from '../components/SchoolLogo';
import './Welcome.css';

const features = [
  { icon: BookOpen, text: '15 interactive lessons' },
  { icon: MonitorPlay, text: 'Screenshots & walkthrough videos' },
  { icon: BrainCircuit, text: 'Multi-style quiz' },
  { icon: Trophy, text: 'Leaderboard rankings' },
];

export default function Welcome() {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState(mypSubjects[0]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { registerTeacher, isRegistered, loading } = useTeacher();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && isRegistered) {
      navigate('/dashboard');
    }
  }, [loading, isRegistered, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      await registerTeacher(name.trim(), department);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="welcome">
      <div className="welcome-bg-pattern" />
      <div className="welcome-card card animate-in">
        <SchoolLogo variant="welcome" />
        <h1>Toddle MYP Teacher Training</h1>
        <p className="welcome-desc">
          Your interactive guide to mastering Toddle for the MYP classroom.
          Learn, practise, and test your knowledge — all in one place.
        </p>

        <div className="welcome-features">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.text} className="welcome-feature">
                <div className="welcome-feature-icon">
                  <Icon size={20} />
                </div>
                <span>{f.text}</span>
              </div>
            );
          })}
        </div>

        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">
              <User size={16} /> Full name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              autoFocus
            />
          </div>
          <div className="input-group">
            <label htmlFor="subject">
              <BookOpen size={16} /> Subject
            </label>
            <select
              id="subject"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              {mypSubjects.map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary welcome-btn" disabled={submitting}>
            {submitting ? 'Starting...' : (
              <>
                Start course <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

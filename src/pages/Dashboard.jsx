import { Link } from 'react-router-dom';
import {
  BookOpen,
  BrainCircuit,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Circle,
  Sparkles,
  LayoutDashboard,
} from 'lucide-react';
import { useTeacher } from '../hooks/useTeacher';
import { lessons, TOTAL_LESSONS } from '../data/lessons';
import { lessonIcons } from '../data/lessonIcons';
import { calculateOverallPercent, getQuizStatus } from '../utils/progress';
import ProgressRing from '../components/ProgressRing';
import ProgressBar from '../components/ProgressBar';
import './Dashboard.css';

export default function Dashboard() {
  const { teacher, loading } = useTeacher();

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner" />
        Loading your progress...
      </div>
    );
  }
  if (!teacher) return null;

  const overall = calculateOverallPercent(teacher);
  const lessonsDone = teacher.lessonsCompleted?.length || 0;
  const quizStatus = getQuizStatus(teacher);
  const nextLesson = lessons.find((l) => !teacher.lessonsCompleted?.includes(l.id));

  const quizLabel = {
    not_started: 'Not started',
    in_progress: `Best: ${teacher.quizBestScore}%`,
    passed: `Passed — ${teacher.quizBestScore}%`,
  }[quizStatus];

  const quickActions = [
    {
      to: nextLesson ? `/lessons/${nextLesson.id}` : '/lessons/intro',
      icon: BookOpen,
      title: nextLesson ? 'Continue learning' : 'Review lessons',
      desc: nextLesson ? nextLesson.title : 'All modules complete',
      color: 'gold',
    },
    {
      to: '/quiz',
      icon: BrainCircuit,
      title: 'Take the quiz',
      desc: quizLabel,
      color: 'warm',
    },
    {
      to: '/leaderboard',
      icon: Trophy,
      title: 'Leaderboard',
      desc: 'See how you rank',
      color: 'gold',
    },
  ];

  return (
    <div className="dashboard animate-in">
      <div className="page-header">
        <h2>
          <LayoutDashboard size={28} />
          Your Progress
        </h2>
        <p>Track your Toddle training journey</p>
      </div>

      <div className="dashboard-hero card">
        <ProgressRing percent={overall} />
        <div className="dashboard-hero-content">
          <h3>Overall completion</h3>
          <ProgressBar percent={overall} />
          <div className="dashboard-stats">
            <div className="stat-card">
              <div className="icon-box icon-box-sm"><BookOpen size={18} /></div>
              <div>
                <span className="stat-num">{lessonsDone}/{TOTAL_LESSONS}</span>
                <span className="stat-label">Lessons</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="icon-box icon-box-sm"><BrainCircuit size={18} /></div>
              <div>
                <span className="stat-num">{teacher.quizBestScore || 0}%</span>
                <span className="stat-label">Quiz best</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.to}
              to={action.to}
              className={`quick-action card card-interactive quick-action--${action.color}`}
            >
              <div className="quick-action-icon">
                <Icon size={24} />
              </div>
              <div className="quick-action-text">
                <strong>{action.title}</strong>
                <span>{action.desc}</span>
              </div>
              <ArrowRight size={18} className="quick-action-arrow" />
            </Link>
          );
        })}
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3><BookOpen size={20} /> Lesson checklist</h3>
          <ul className="checklist">
            {lessons.map((l) => {
              const done = teacher.lessonsCompleted?.includes(l.id);
              const Icon = lessonIcons[l.id] || BookOpen;
              return (
                <li key={l.id} className={done ? 'done' : ''}>
                  <span className="checklist-icon">
                    {done ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                  </span>
                  <span className="checklist-lesson-icon"><Icon size={16} /></span>
                  <Link to={`/lessons/${l.id}`}>{l.number}. {l.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="card status-card">
          <h3><Sparkles size={20} /> Your status</h3>
          <div className="status-item">
            <div className="status-item-left">
              <BrainCircuit size={20} />
              <span>Quiz</span>
            </div>
            <span className={`badge ${quizStatus === 'passed' ? 'badge-done' : 'badge-pending'}`}>
              {quizLabel}
            </span>
          </div>
          <div className="status-item">
            <div className="status-item-left">
              <Trophy size={20} />
              <span>Quiz attempts</span>
            </div>
            <span className="status-value">{teacher.quizAttempts || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

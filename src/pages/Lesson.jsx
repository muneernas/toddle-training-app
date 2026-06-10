import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Lightbulb,
  Camera,
  ExternalLink,
} from 'lucide-react';
import { lessons } from '../data/lessons';
import { lessonIcons } from '../data/lessonIcons';
import { useTeacher } from '../hooks/useTeacher';
import LessonSidebar from '../components/LessonSidebar';
import './Lesson.css';

export default function Lesson() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { teacher, markLessonComplete, loading } = useTeacher();
  const [keyPointsOpen, setKeyPointsOpen] = useState(true);
  const [marking, setMarking] = useState(false);

  const lesson = lessons.find((l) => l.id === lessonId);
  const index = lessons.findIndex((l) => l.id === lessonId);
  const LessonIcon = lesson ? lessonIcons[lesson.id] : null;

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner" />
        Loading...
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="card">
        <p>Lesson not found.</p>
        <Link to="/dashboard">Back to dashboard</Link>
      </div>
    );
  }

  const isComplete = teacher?.lessonsCompleted?.includes(lesson.id);
  const nextLesson = lessons[index + 1];

  const handleMarkComplete = async () => {
    setMarking(true);
    try {
      await markLessonComplete(lesson.id);
    } finally {
      setMarking(false);
    }
  };

  const handleNext = () => {
    if (nextLesson) {
      navigate(`/lessons/${nextLesson.id}`);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="lesson-page animate-in">
      <LessonSidebar
        currentId={lesson.id}
        completedIds={teacher?.lessonsCompleted || []}
      />
      <article className="lesson-content card">
        <div className="lesson-header">
          <div className="lesson-header-left">
            {LessonIcon && (
              <div className="lesson-header-icon">
                <LessonIcon size={24} />
              </div>
            )}
            <div>
              <span className="lesson-badge">Module {lesson.number}</span>
              <h2>{lesson.title}</h2>
            </div>
          </div>
          {isComplete && (
            <span className="badge badge-done">
              <CheckCircle2 size={14} /> Complete
            </span>
          )}
        </div>

        <div className="lesson-body">
          {lesson.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="key-points">
          <button
            type="button"
            className="key-points-toggle"
            onClick={() => setKeyPointsOpen(!keyPointsOpen)}
          >
            <Lightbulb size={18} />
            Key points
            {keyPointsOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>
          {keyPointsOpen && (
            <ul>
              {lesson.keyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>

        {lesson.uploadTask && (
          <div className="callout callout-practice">
            <Camera size={20} />
            <div>
              <strong>Practice task</strong>
              <p>
                Upload a screenshot of your {lesson.uploadTask.replace(/-/g, ' ')} on the{' '}
                <Link to="/uploads">Uploads page</Link>.
              </p>
            </div>
          </div>
        )}

        <div className="callout callout-toddle">
          <ExternalLink size={20} />
          <div>
            <strong>Try in Toddle</strong>
            <p>Use the testing class created for this training session to explore hands-on.</p>
          </div>
        </div>

        <div className="lesson-actions">
          {!isComplete ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleMarkComplete}
              disabled={marking}
            >
              <CheckCircle2 size={18} />
              {marking ? 'Saving...' : 'Mark as complete'}
            </button>
          ) : (
            <span className="success-msg">
              <CheckCircle2 size={18} /> You completed this module.
            </span>
          )}
          <button type="button" className="btn btn-secondary" onClick={handleNext}>
            {nextLesson ? 'Next lesson' : 'Back to dashboard'}
            <ArrowRight size={18} />
          </button>
        </div>
      </article>
    </div>
  );
}

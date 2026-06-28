import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Lightbulb,
  ExternalLink,
} from 'lucide-react';
import { lessons } from '../data/lessons';
import { lessonIcons } from '../data/lessonIcons';
import { assignmentTypes, LMT_EMAILS, TODDLE_WEB_URL } from '../data/toddleLinks';
import { useTeacher } from '../hooks/useTeacher';
import LessonSidebar from '../components/LessonSidebar';
import './Lesson.css';

function mediaUrl(src) {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${src.replace(/^\//, '')}`;
}

function renderRichText(text) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(...renderBoldSegments(text.slice(lastIndex, match.index), `pre-${match.index}`));
    }
    parts.push(
      <a key={`link-${match.index}`} href={match[2]} target="_blank" rel="noopener noreferrer">
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(...renderBoldSegments(text.slice(lastIndex), `tail-${lastIndex}`));
  }

  return parts.length > 0 ? parts : renderBoldSegments(text, 'full');
}

function renderBoldSegments(text, keyPrefix) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${keyPrefix}-b-${i}`}>{part.slice(2, -2)}</strong>;
    }
    return part ? <span key={`${keyPrefix}-t-${i}`}>{part}</span> : null;
  });
}

function LessonVideo({ src, alt }) {
  const url = mediaUrl(src);

  return (
    <video
      key={url}
      controls
      preload="metadata"
      playsInline
      aria-label={alt || 'Lesson video'}
    >
      <source src={url} type="video/mp4" />
      Your browser does not support embedded video.
    </video>
  );
}

export default function Lesson() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { teacher, markLessonComplete, loading } = useTeacher();
  const [keyPointsOpen, setKeyPointsOpen] = useState(true);
  const [marking, setMarking] = useState(false);

  const lesson = lessons.find((l) => l.id === lessonId);
  const index = lessons.findIndex((l) => l.id === lessonId);
  const LessonIcon = lesson ? lessonIcons[lesson.id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

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
            <p key={i}>{renderRichText(p)}</p>
          ))}
        </div>

        {lesson.assignmentTypes && (
          <div className="lesson-table-wrap">
            <h3 className="lesson-media-heading">Assignment types</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Where it is used</th>
                  <th>Tips</th>
                </tr>
              </thead>
              <tbody>
                {assignmentTypes.map((row) => (
                  <tr key={row.type}>
                    <td><strong>{row.type}</strong></td>
                    <td>{row.usedFor}</td>
                    <td>{row.tips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {lesson.media?.length > 0 && (
          <div className="lesson-media">
            <h3 className="lesson-media-heading">
              {lesson.media.some((item) => item.step) ? 'Step-by-step guide' : 'Screenshots & walkthroughs'}
            </h3>
            <div className={`lesson-media-grid${lesson.media.some((item) => item.step) ? ' lesson-media-grid--steps' : ''}`}>
              {lesson.media.map((item, i) => (
                <figure
                  key={`${lesson.id}-${item.src}-${i}`}
                  className={`lesson-media-item lesson-media-${item.type}${item.step ? ' lesson-media-item--step' : ''}`}
                >
                  {item.step && (
                    <div className="lesson-media-step-header">
                      <span className="lesson-media-step-num">Step {item.step}</span>
                      {item.title && <strong className="lesson-media-step-title">{item.title}</strong>}
                    </div>
                  )}
                  {item.type === 'video' ? (
                    <LessonVideo src={item.src} alt={item.alt} />
                  ) : (
                    <img src={mediaUrl(item.src)} alt={item.alt || item.title || ''} loading="lazy" />
                  )}
                  {(item.description || item.alt) && (
                    <figcaption>{item.description || item.alt}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}

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
                <li key={i}>{renderRichText(point)}</li>
              ))}
            </ul>
          )}
        </div>

        {lesson.showTryInToddle && (
          <div className="callout callout-toddle">
            <ExternalLink size={20} />
            <div>
              <strong>Try in Toddle</strong>
              <p>
                Open{' '}
                <a href={TODDLE_WEB_URL} target="_blank" rel="noopener noreferrer">
                  Toddle in your browser
                </a>{' '}
                and sign in using <strong>Microsoft</strong> with your school account to explore hands-on.
              </p>
            </div>
          </div>
        )}

        {lesson.showLmtContacts && LMT_EMAILS.length > 0 && (
          <div className="callout callout-lmt">
            <div>
              <strong>Learning Management Team</strong>
              <ul className="lmt-email-list">
                {LMT_EMAILS.map((email) => (
                  <li key={email}>
                    <a href={`mailto:${email}`}>{email}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

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

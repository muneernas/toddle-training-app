import { Link } from 'react-router-dom';
import { CheckCircle2, Circle } from 'lucide-react';
import { lessons } from '../data/lessons';
import { lessonIcons } from '../data/lessonIcons';
import './LessonSidebar.css';

export default function LessonSidebar({ currentId, completedIds }) {
  const doneCount = completedIds.length;

  return (
    <aside className="lesson-sidebar">
      <div className="lesson-sidebar-header">
        <h3>Modules</h3>
        <span className="lesson-sidebar-count">{doneCount}/{lessons.length}</span>
      </div>
      <ul className="lesson-list">
        {lessons.map((lesson) => {
          const done = completedIds.includes(lesson.id);
          const active = lesson.id === currentId;
          const Icon = lessonIcons[lesson.id];
          return (
            <li key={lesson.id}>
              <Link
                to={`/lessons/${lesson.id}`}
                className={`lesson-item ${active ? 'active' : ''} ${done ? 'done' : ''}`}
              >
                <span className="lesson-icon-wrap">
                  {Icon && <Icon size={16} />}
                </span>
                <span className="lesson-info">
                  <span className="lesson-num">Module {lesson.number}</span>
                  <span className="lesson-title">{lesson.title}</span>
                </span>
                <span className="lesson-status">
                  {done ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

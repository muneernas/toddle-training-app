import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Trophy, Medal, User, BookOpen, BrainCircuit } from 'lucide-react';
import { db, isFirebaseConfigured } from '../firebase';
import { useTeacher } from '../hooks/useTeacher';
import { TOTAL_LESSONS } from '../data/lessons';
import './Leaderboard.css';

export default function Leaderboard() {
  const { teacher, teacherId, loading: teacherLoading } = useTeacher();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);

      try {
        if (!isFirebaseConfigured) {
          const local = localStorage.getItem('toddleTeacherData');
          const list = local && teacherId
            ? [{ id: teacherId, ...JSON.parse(local) }]
            : [];
          setEntries(rankEntries(list));
          setLoading(false);
          return;
        }

        const snap = await getDocs(collection(db, 'teachers'));
        const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setEntries(rankEntries(list));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (!teacherLoading) load();
  }, [teacherLoading, teacherId]);

  if (teacherLoading || loading) {
    return (
      <div className="loading">
        <div className="loading-spinner" />
        Loading leaderboard...
      </div>
    );
  }

  const top10 = entries.slice(0, 10);
  const myEntry = entries.find((e) => e.id === teacherId);
  const myInTop10 = top10.some((e) => e.id === teacherId);

  return (
    <div className="leaderboard-page animate-in">
      <div className="page-header">
        <h2><Trophy size={28} /> Leaderboard</h2>
        <p>Ranked by best quiz score, then lessons completed</p>
      </div>

      {error && <div className="error-msg">{error}</div>}

      {!isFirebaseConfigured && (
        <div className="leaderboard-notice card">
          <p>
            <strong>Shared leaderboard is not enabled on this site.</strong> Progress is saved only in each
            person&apos;s browser, so you will not see other teachers here until Firebase is connected in
            GitHub Actions secrets and the site is rebuilt.
          </p>
        </div>
      )}

      {entries.length === 0 ? (
        <div className="card leaderboard-empty">
          <Trophy size={48} />
          <p>No entries yet. Complete the quiz to appear on the leaderboard!</p>
        </div>
      ) : (
        <>
          {top10.length >= 3 && (
            <div className="podium">
              {top10.slice(0, 3).map((entry, i) => {
                const order = [1, 0, 2];
                const entry2 = top10[order[i]];
                const rank = order[i] + 1;
                return (
                  <div key={entry2.id} className={`podium-place podium-${rank}`}>
                    <div className="podium-medal">
                      {rank === 1 ? <Trophy size={28} /> : <Medal size={24} />}
                    </div>
                    <span className="podium-rank">#{rank}</span>
                    <strong>{entry2.name}</strong>
                    <span className="podium-dept">{entry2.department}</span>
                    <span className="podium-score">{entry2.quizBestScore || 0}%</span>
                  </div>
                );
              })}
            </div>
          )}

          <div className="leaderboard-table-wrap card">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th><User size={14} /> Name</th>
                  <th>Department</th>
                  <th><BrainCircuit size={14} /> Quiz</th>
                  <th><BookOpen size={14} /> Lessons</th>
                </tr>
              </thead>
              <tbody>
                {top10.map((entry, i) => (
                  <LeaderboardRow
                    key={entry.id}
                    rank={i + 1}
                    entry={entry}
                    isMe={entry.id === teacherId}
                    isTop3={i < 3}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {myEntry && !myInTop10 && (
            <div className="my-rank card">
              <h3><User size={18} /> Your rank</h3>
              <LeaderboardRow
                rank={entries.indexOf(myEntry) + 1}
                entry={myEntry}
                isMe
                isTop3={false}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

function rankEntries(list) {
  return [...list]
    .filter((e) => e.name)
    .sort((a, b) => {
      const scoreDiff = (b.quizBestScore || 0) - (a.quizBestScore || 0);
      if (scoreDiff !== 0) return scoreDiff;
      const lessonsDiff = (b.lessonsCompleted?.length || 0) - (a.lessonsCompleted?.length || 0);
      if (lessonsDiff !== 0) return lessonsDiff;
      return (b.overallPercent || 0) - (a.overallPercent || 0);
    })
    .map((e, i) => ({ ...e, rank: i + 1 }));
}

function LeaderboardRow({ rank, entry, isMe, isTop3 }) {
  const lessons = entry.lessonsCompleted?.length || 0;
  return (
    <tr className={`${isMe ? 'is-me' : ''} ${isTop3 ? 'top-3' : ''}`}>
      <td>
        <span className="rank-badge">{rank}</span>
      </td>
      <td>{entry.name}{isMe && <span className="you-tag">you</span>}</td>
      <td>{entry.department}</td>
      <td><strong>{entry.quizBestScore || 0}%</strong></td>
      <td>{lessons}/{TOTAL_LESSONS}</td>
    </tr>
  );
}

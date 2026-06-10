import { useMemo } from 'react';

export default function Matching({ question, answer = {}, onChange, disabled }) {
  const rightOptions = useMemo(() => {
    const rights = question.pairs.map((p) => p.right);
    return [...rights].sort(() => Math.random() - 0.5);
  }, [question.id]);

  const handleChange = (left, value) => {
    onChange({ ...answer, [left]: value });
  };

  return (
    <div className="quiz-matching">
      {question.pairs.map((pair) => (
        <div key={pair.left} className="match-row">
          <span className="match-left">{pair.left}</span>
          <select
            value={answer[pair.left] || ''}
            onChange={(e) => handleChange(pair.left, e.target.value)}
            disabled={disabled}
          >
            <option value="">Select...</option>
            {rightOptions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

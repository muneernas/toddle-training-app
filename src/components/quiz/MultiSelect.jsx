export default function MultiSelect({ question, answer = [], onChange, disabled }) {
  const toggle = (index) => {
    if (disabled) return;
    const next = answer.includes(index)
      ? answer.filter((i) => i !== index)
      : [...answer, index];
    onChange(next);
  };

  return (
    <div className="quiz-options">
      <p className="quiz-hint">Select all that apply</p>
      {question.options.map((opt, i) => (
        <label key={i} className={`quiz-option ${answer.includes(i) ? 'selected' : ''}`}>
          <input
            type="checkbox"
            checked={answer.includes(i)}
            onChange={() => toggle(i)}
            disabled={disabled}
          />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
}

export default function SingleChoice({ question, answer, onChange, disabled }) {
  return (
    <div className="quiz-options">
      {question.options.map((opt, i) => (
        <label key={i} className={`quiz-option ${answer === i ? 'selected' : ''}`}>
          <input
            type="radio"
            name={question.id}
            checked={answer === i}
            onChange={() => onChange(i)}
            disabled={disabled}
          />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
}

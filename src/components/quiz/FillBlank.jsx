export default function FillBlank({ answer = '', onChange, disabled }) {
  return (
    <div className="quiz-fill">
      <input
        type="text"
        value={answer}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your answer..."
        disabled={disabled}
        className="quiz-fill-input"
      />
    </div>
  );
}

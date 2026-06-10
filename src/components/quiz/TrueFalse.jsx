export default function TrueFalse({ answer, onChange, disabled }) {
  return (
    <div className="quiz-tf">
      {[true, false].map((val) => (
        <button
          key={String(val)}
          type="button"
          className={`btn quiz-tf-btn ${answer === val ? 'selected' : ''}`}
          onClick={() => onChange(val)}
          disabled={disabled}
        >
          {val ? 'True' : 'False'}
        </button>
      ))}
    </div>
  );
}

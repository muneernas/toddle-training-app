import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BrainCircuit,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Trophy,
  RotateCcw,
  LayoutDashboard,
  ListChecks,
  Target,
} from 'lucide-react';
import { quizQuestions, scoreAnswer, calculateScore } from '../data/quiz';
import { QUIZ_PASS_THRESHOLD } from '../data/lessons';
import { useTeacher } from '../hooks/useTeacher';
import SingleChoice from '../components/quiz/SingleChoice';
import TrueFalse from '../components/quiz/TrueFalse';
import MultiSelect from '../components/quiz/MultiSelect';
import FillBlank from '../components/quiz/FillBlank';
import Matching from '../components/quiz/Matching';
import ProgressBar from '../components/ProgressBar';
import './Quiz.css';

export default function Quiz() {
  const { teacher, saveQuizAttempt, loading } = useTeacher();
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [finished, setFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [saving, setSaving] = useState(false);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner" />
        Loading...
      </div>
    );
  }

  const question = quizQuestions[currentIndex];
  const total = quizQuestions.length;

  const setAnswer = (value) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
  };

  const canSubmit = () => {
    const ans = answers[question.id];
    if (ans === undefined || ans === null || ans === '') return false;
    if (question.type === 'multiselect' && (!Array.isArray(ans) || ans.length === 0)) return false;
    if (question.type === 'matching') {
      return question.pairs.every((p) => ans?.[p.left]);
    }
    return true;
  };

  const handleCheck = () => {
    setSubmitted((prev) => ({ ...prev, [question.id]: true }));
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleFinish = async () => {
    const score = calculateScore(answers);
    setFinalScore(score);
    setFinished(true);
    setSaving(true);
    try {
      await saveQuizAttempt(score, answers);
    } catch (err) {
      console.error(err);
      alert(
        'Your score could not be saved. If you are on the GitHub site, check that Firebase secrets are set and the site was redeployed. Error: ' +
          (err.message || 'Unknown error'),
      );
    } finally {
      setSaving(false);
    }
  };

  const handleRetake = () => {
    setStarted(true);
    setCurrentIndex(0);
    setAnswers({});
    setSubmitted({});
    setFinished(false);
    setFinalScore(0);
  };

  const isCorrect = submitted[question.id] ? scoreAnswer(question, answers[question.id]) : null;

  if (!started && !finished) {
    return (
      <div className="quiz-intro card animate-in">
        <div className="quiz-intro-icon">
          <BrainCircuit size={40} />
        </div>
        <h2>End-of-Course Quiz</h2>
        <p>
          Test your knowledge of Toddle with {total} questions covering all training modules.
        </p>
        <div className="quiz-intro-features">
          <div className="quiz-intro-feature">
            <ListChecks size={18} />
            <span>Instant feedback per question</span>
          </div>
          <div className="quiz-intro-feature">
            <Target size={18} />
            <span>Pass threshold: {QUIZ_PASS_THRESHOLD}%</span>
          </div>
          <div className="quiz-intro-feature">
            <Trophy size={18} />
            <span>Unlimited retakes — best score counts</span>
          </div>
        </div>
        {teacher?.quizBestScore > 0 && (
          <p className="quiz-best">Your current best: <strong>{teacher.quizBestScore}%</strong></p>
        )}
        <button type="button" className="btn btn-primary" onClick={() => setStarted(true)}>
          {teacher?.quizBestScore > 0 ? (
            <><RotateCcw size={18} /> Retake quiz</>
          ) : (
            <><BrainCircuit size={18} /> Start quiz</>
          )}
        </button>
      </div>
    );
  }

  if (finished) {
    const passed = finalScore >= QUIZ_PASS_THRESHOLD;
    return (
      <div className="quiz-results card animate-in">
        <h2>Quiz Complete!</h2>
        <div className={`quiz-score-circle ${passed ? 'passed' : ''}`}>
          {finalScore}%
        </div>
        <p className={passed ? 'success-msg' : 'error-msg'}>
          {passed ? (
            <><CheckCircle2 size={18} /> Congratulations! You passed the quiz.</>
          ) : (
            <><XCircle size={18} /> You need {QUIZ_PASS_THRESHOLD}% to pass. Keep practising!</>
          )}
        </p>
        {saving && <p>Saving your score...</p>}
        <div className="quiz-results-actions">
          <button type="button" className="btn btn-primary" onClick={handleRetake}>
            <RotateCcw size={18} /> Retake quiz
          </button>
          <Link to="/leaderboard" className="btn btn-primary">
            <Trophy size={18} /> View leaderboard
          </Link>
          <Link to="/dashboard" className="btn btn-secondary">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page animate-in">
      <ProgressBar
        percent={Math.round(((currentIndex + 1) / total) * 100)}
        label={`Question ${currentIndex + 1} of ${total}`}
      />

      <div className="quiz-card card">
        <span className="quiz-type-badge">{question.type.replace('multiselect', 'multi-select')}</span>
        <h3>{question.question}</h3>

        {question.type === 'single' && (
          <SingleChoice question={question} answer={answers[question.id]} onChange={setAnswer} disabled={submitted[question.id]} />
        )}
        {question.type === 'truefalse' && (
          <TrueFalse answer={answers[question.id]} onChange={setAnswer} disabled={submitted[question.id]} />
        )}
        {question.type === 'multiselect' && (
          <MultiSelect question={question} answer={answers[question.id]} onChange={setAnswer} disabled={submitted[question.id]} />
        )}
        {question.type === 'fillblank' && (
          <FillBlank answer={answers[question.id]} onChange={setAnswer} disabled={submitted[question.id]} />
        )}
        {question.type === 'matching' && (
          <Matching question={question} answer={answers[question.id]} onChange={setAnswer} disabled={submitted[question.id]} />
        )}

        {submitted[question.id] && (
          <div className={`quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? (
              <><CheckCircle2 size={18} /> Correct!</>
            ) : (
              <><XCircle size={18} /> Incorrect.</>
            )}
            <p>{question.explanation}</p>
          </div>
        )}

        <div className="quiz-nav">
          {!submitted[question.id] ? (
            <button type="button" className="btn btn-primary" onClick={handleCheck} disabled={!canSubmit()}>
              Check answer
            </button>
          ) : currentIndex < total - 1 ? (
            <button type="button" className="btn btn-primary" onClick={handleNext}>
              Next question <ArrowRight size={18} />
            </button>
          ) : (
            <button type="button" className="btn btn-primary" onClick={handleFinish}>
              Finish quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

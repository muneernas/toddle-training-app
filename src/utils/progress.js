import { TOTAL_LESSONS, QUIZ_PASS_THRESHOLD } from '../data/lessons';

export function calculateOverallPercent(teacher) {
  if (!teacher) return 0;

  const lessonsDone = (teacher.lessonsCompleted || []).length;
  const quizScore = teacher.quizBestScore || 0;

  const lessonPercent = (lessonsDone / TOTAL_LESSONS) * 75;
  const quizPercent = (quizScore / 100) * 25;

  return Math.round(lessonPercent + quizPercent);
}

export function getQuizStatus(teacher) {
  if (!teacher?.quizBestScore) return 'not_started';
  if (teacher.quizBestScore >= QUIZ_PASS_THRESHOLD) return 'passed';
  return 'in_progress';
}

export function getOrCreateTeacherId() {
  let id = localStorage.getItem('toddleTeacherId');
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem('toddleTeacherId', id);
  }
  return id;
}

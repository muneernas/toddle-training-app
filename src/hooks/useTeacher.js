import { createContext, useContext, useState, useEffect, useCallback, createElement } from 'react';
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  collection,
  addDoc,
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebase';
import { getOrCreateTeacherId, calculateOverallPercent } from '../utils/progress';

const defaultTeacher = {
  name: '',
  department: '',
  lessonsCompleted: [],
  quizBestScore: 0,
  quizAttempts: 0,
  overallPercent: 0,
};

const TeacherContext = createContext(null);

export function TeacherProvider({ children }) {
  const [teacherId] = useState(getOrCreateTeacherId);
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTeacher = useCallback(async () => {
    setLoading(true);
    setError(null);

    if (!isFirebaseConfigured) {
      const local = localStorage.getItem('toddleTeacherData');
      if (local) {
        setTeacher({ id: teacherId, ...JSON.parse(local) });
      }
      setLoading(false);
      return;
    }

    try {
      const ref = doc(db, 'teachers', teacherId);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setTeacher({ id: teacherId, ...snap.data() });
      } else {
        setTeacher(null);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [teacherId]);

  useEffect(() => {
    loadTeacher();
  }, [loadTeacher]);

  const saveTeacher = async (data) => {
    const overallPercent = calculateOverallPercent(data);
    const payload = { ...data, overallPercent, lastActive: new Date().toISOString() };

    if (!isFirebaseConfigured) {
      localStorage.setItem('toddleTeacherData', JSON.stringify(payload));
      setTeacher({ id: teacherId, ...payload });
      return;
    }

    const ref = doc(db, 'teachers', teacherId);
    await setDoc(ref, { ...payload, lastActive: serverTimestamp() }, { merge: true });
    setTeacher({ id: teacherId, ...payload });
  };

  const updateTeacher = async (updates) => {
    let base = teacher || {};

    if (isFirebaseConfigured) {
      const ref = doc(db, 'teachers', teacherId);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        base = { ...snap.data(), ...base };
      }
    }

    const merged = { ...base, ...updates };
    const overallPercent = calculateOverallPercent(merged);
    const payload = { ...merged, overallPercent, lastActive: new Date().toISOString() };

    if (!isFirebaseConfigured) {
      localStorage.setItem('toddleTeacherData', JSON.stringify(payload));
      setTeacher({ id: teacherId, ...payload });
      return;
    }

    const ref = doc(db, 'teachers', teacherId);
    await setDoc(
      ref,
      {
        quizAttempts: payload.quizAttempts ?? 0,
        quizBestScore: payload.quizBestScore ?? 0,
        lessonsCompleted: payload.lessonsCompleted ?? [],
        name: payload.name,
        department: payload.department,
        overallPercent,
        lastActive: serverTimestamp(),
      },
      { merge: true },
    );
    setTeacher({ id: teacherId, ...payload });
  };

  const markLessonComplete = async (lessonId) => {
    const completed = teacher?.lessonsCompleted || [];
    if (completed.includes(lessonId)) return;
    await updateTeacher({ lessonsCompleted: [...completed, lessonId] });
  };

  const saveQuizAttempt = async (score, answers) => {
    const numericScore = Number(score) || 0;
    const attempts = (teacher?.quizAttempts || 0) + 1;
    const bestScore = Math.max(teacher?.quizBestScore || 0, numericScore);

    await updateTeacher({ quizAttempts: attempts, quizBestScore: bestScore });

    if (!isFirebaseConfigured) return;

    try {
      await addDoc(collection(db, 'teachers', teacherId, 'quizAttempts'), {
        score: numericScore,
        answers: JSON.parse(JSON.stringify(answers)),
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.error('Could not log quiz attempt details:', err);
    }
  };

  const registerTeacher = async (name, department) => {
    await saveTeacher({
      ...defaultTeacher,
      name,
      department,
      lessonsCompleted: [],
      quizBestScore: 0,
      quizAttempts: 0,
    });
  };

  const logout = () => {
    localStorage.removeItem('toddleTeacherData');
    localStorage.removeItem('toddleTeacherId');
    setTeacher(null);
  };

  const value = {
    teacherId,
    teacher,
    loading,
    error,
    isRegistered: !!teacher?.name,
    registerTeacher,
    markLessonComplete,
    updateTeacher,
    logout,
    reload: loadTeacher,
    saveQuizAttempt,
  };

  return createElement(TeacherContext.Provider, { value }, children);
}

export function useTeacher() {
  const context = useContext(TeacherContext);
  if (!context) {
    throw new Error('useTeacher must be used within TeacherProvider');
  }
  return context;
}

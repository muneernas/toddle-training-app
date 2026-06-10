import { useState, useEffect, useCallback } from 'react';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
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
  uploadsCompleted: [],
  quizBestScore: 0,
  quizAttempts: 0,
  overallPercent: 0,
};

export function useTeacher() {
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
    const merged = { ...teacher, ...updates };
    const overallPercent = calculateOverallPercent(merged);
    const payload = { ...merged, overallPercent, lastActive: new Date().toISOString() };

    if (!isFirebaseConfigured) {
      localStorage.setItem('toddleTeacherData', JSON.stringify(payload));
      setTeacher({ id: teacherId, ...payload });
      return;
    }

    const ref = doc(db, 'teachers', teacherId);
    await updateDoc(ref, { ...updates, overallPercent, lastActive: serverTimestamp() });
    setTeacher({ id: teacherId, ...payload });
  };

  const markLessonComplete = async (lessonId) => {
    const completed = teacher?.lessonsCompleted || [];
    if (completed.includes(lessonId)) return;
    await updateTeacher({ lessonsCompleted: [...completed, lessonId] });
  };

  const markUploadComplete = async (taskId, uploadMeta) => {
    const completed = teacher?.uploadsCompleted || [];
    if (!completed.includes(taskId)) {
      await updateTeacher({ uploadsCompleted: [...completed, taskId] });
    }

    if (isFirebaseConfigured && uploadMeta) {
      const uploadRef = doc(db, 'teachers', teacherId, 'uploads', taskId);
      await setDoc(uploadRef, { ...uploadMeta, uploadedAt: serverTimestamp() }, { merge: true });
    }
  };

  const saveQuizAttempt = async (score, answers) => {
    const attempts = (teacher?.quizAttempts || 0) + 1;
    const bestScore = Math.max(teacher?.quizBestScore || 0, score);

    if (isFirebaseConfigured) {
      await addDoc(collection(db, 'teachers', teacherId, 'quizAttempts'), {
        score,
        answers,
        timestamp: serverTimestamp(),
      });
    }

    await updateTeacher({ quizAttempts: attempts, quizBestScore: bestScore });
  };

  const registerTeacher = async (name, department) => {
    await saveTeacher({
      ...defaultTeacher,
      name,
      department,
      lessonsCompleted: [],
      uploadsCompleted: [],
      quizBestScore: 0,
      quizAttempts: 0,
    });
  };

  return {
    teacherId,
    teacher,
    loading,
    error,
    isRegistered: !!teacher?.name,
    registerTeacher,
    markLessonComplete,
    markUploadComplete,
    updateTeacher,
    reload: loadTeacher,
  };
}

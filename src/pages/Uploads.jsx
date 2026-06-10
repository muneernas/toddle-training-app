import { useState, useRef } from 'react';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { ImageUp, Upload, Trash2, CheckCircle2 } from 'lucide-react';
import { storage, isFirebaseConfigured } from '../firebase';
import { useTeacher } from '../hooks/useTeacher';
import { uploadTasks } from '../data/lessons';
import './Uploads.css';

const MAX_SIZE = 5 * 1024 * 1024;

export default function Uploads() {
  const { teacher, teacherId, markUploadComplete, updateTeacher, loading } = useTeacher();
  const [uploading, setUploading] = useState(null);
  const [error, setError] = useState(null);
  const [previews, setPreviews] = useState(() => {
    const saved = localStorage.getItem(`toddleUploads_${teacherId}`);
    return saved ? JSON.parse(saved) : {};
  });

  const handleFile = async (taskId, file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (PNG or JPG).');
      return;
    }
    if (file.size > MAX_SIZE) {
      setError('File must be under 5 MB.');
      return;
    }

    setUploading(taskId);
    setError(null);

    try {
      let url;
      if (isFirebaseConfigured) {
        const storageRef = ref(storage, `uploads/${teacherId}/${taskId}`);
        await uploadBytes(storageRef, file);
        url = await getDownloadURL(storageRef);
      } else {
        url = URL.createObjectURL(file);
      }

      const meta = { storageUrl: url, fileName: file.name };
      const newPreviews = { ...previews, [taskId]: meta };
      setPreviews(newPreviews);
      localStorage.setItem(`toddleUploads_${teacherId}`, JSON.stringify(newPreviews));
      await markUploadComplete(taskId, meta);
    } catch (err) {
      setError(err.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(null);
    }
  };

  const handleRemove = async (taskId) => {
    if (isFirebaseConfigured) {
      try {
        const storageRef = ref(storage, `uploads/${teacherId}/${taskId}`);
        await deleteObject(storageRef);
      } catch {
        // file may not exist
      }
    }

    const newPreviews = { ...previews };
    delete newPreviews[taskId];
    setPreviews(newPreviews);
    localStorage.setItem(`toddleUploads_${teacherId}`, JSON.stringify(newPreviews));

    const completed = (teacher?.uploadsCompleted || []).filter((id) => id !== taskId);
    await updateTeacher({ uploadsCompleted: completed });
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner" />
        Loading...
      </div>
    );
  }

  return (
    <div className="uploads-page animate-in">
      <div className="page-header">
        <h2><ImageUp size={28} /> Practice Uploads</h2>
        <p>
          Upload screenshots from the Toddle testing class to show your practice work.
          Each upload counts toward your course progress.
        </p>
      </div>

      {error && <div className="error-msg">{error}</div>}

      <div className="upload-grid">
        {uploadTasks.map((task) => (
          <UploadSlot
            key={task.id}
            task={task}
            preview={previews[task.id]}
            isDone={teacher?.uploadsCompleted?.includes(task.id)}
            isUploading={uploading === task.id}
            onFile={(file) => handleFile(task.id, file)}
            onRemove={() => handleRemove(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

function UploadSlot({ task, preview, isDone, isUploading, onFile, onRemove }) {
  const inputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    onFile(file);
  };

  return (
    <div className={`upload-slot card ${isDone ? 'done' : ''}`}>
      <h3>{task.label}</h3>
      {preview ? (
        <div className="upload-preview">
          <img src={preview.storageUrl} alt={task.label} />
          <div className="upload-preview-actions">
            <button type="button" className="btn btn-secondary" onClick={() => inputRef.current?.click()}>
              <Upload size={16} /> Replace
            </button>
            <button type="button" className="btn btn-secondary" onClick={onRemove}>
              <Trash2 size={16} /> Remove
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`upload-drop ${dragOver ? 'drag-over' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
        >
          {isUploading ? (
            <span>Uploading...</span>
          ) : (
            <>
              <div className="upload-icon"><ImageUp size={32} /></div>
              <span>Drop image here or click to browse</span>
              <span className="upload-hint">PNG or JPG, max 5 MB</span>
            </>
          )}
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg"
        style={{ display: 'none' }}
        onChange={(e) => onFile(e.target.files[0])}
      />
      {isDone && <span className="badge badge-done"><CheckCircle2 size={12} /> Uploaded</span>}
    </div>
  );
}

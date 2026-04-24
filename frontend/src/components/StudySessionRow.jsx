import { useState } from "react";

function StudySessionRow( { studySession, onDelete, onUpdate } ) {
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState ({
    sessionDate: studySession.sessionDate.slice(0, 10),
    durationMinutes: studySession.durationMinutes,
    focusRating: studySession.focusRating,
    topic: studySession.topic,
    studyMethod: studySession.studyMethod,
  });

  function handleEditChange(event) {
    const { name, value } = event.target;

    setEditFormData({
      ...editFormData,
      [name]: value,
    })
  }

  function handleSave() {
    onUpdate(studySession._id, editFormData);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <li>
        <input
          name="topic"
          value={editFormData.topic}
          onChange={handleEditChange}
        />

        <button onClick={handleSave}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </li>
    );
  }
  
  return (
    <div>
      <strong>{studySession.topic}</strong> - {studySession.durationMinutes} min - focus {studySession.focusRating}/5
      <button type="button" onClick={() => onDelete(studySession._id)}>
        Delete
      </button>
      <button onClick = {() => setIsEditing(true)}>
        Edit
      </button>
    </div>
  );
}

export default StudySessionRow;
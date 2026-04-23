function StudySessionRow( { studySession, onDelete } ) {
  return (
    <div>
      <strong>{studySession.topic}</strong> - {studySession.durationMinutes} min - focus {studySession.focusRating}/5
      <button type="button" onClick={() => onDelete(studySession._id)}>
        Delete
        </button>
    </div>
  );
}

export default StudySessionRow;
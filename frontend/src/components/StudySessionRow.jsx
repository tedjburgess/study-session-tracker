function StudySessionRow( { studySession } ) {
  return (
    <div>
      <strong>{studySession.topic}</strong> - {studySession.durationMinutes} min - focus {studySession.focusRating}/5
    </div>
  );
}

export default StudySessionRow;
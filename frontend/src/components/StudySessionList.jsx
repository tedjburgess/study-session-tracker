import StudySessionRow from "./StudySessionRow";

function StudySessionList({ studySessions, onDelete }) {
    console.log(studySessions);
  
    return (
    <section>
      <h2>Study Sessions</h2>
      <div>
        {studySessions.map((studySession) => (
            <StudySessionRow 
              key={studySession._id} 
              studySession={studySession} 
              onDelete={onDelete}
            />
        ))}
      </div>
    </section>
  );
}

export default StudySessionList;
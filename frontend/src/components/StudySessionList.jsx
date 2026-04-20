import StudySessionRow from "./StudySessionRow";

function StudySessionList({ studySessions }) {
    console.log(studySessions);
  
    return (
    <section>
      <h2>Study Sessions</h2>
      <div>
        {studySessions[0] && <StudySessionRow studySession={studySessions[0]} />}
      </div>
    </section>
  );
}

export default StudySessionList;
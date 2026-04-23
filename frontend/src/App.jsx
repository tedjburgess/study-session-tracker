import { useEffect, useState } from "react"; //useState = component remembers data; useEffect = Code after component is on the screen
import "./App.css";
import StudySessionForm from "./components/StudySessionForm";
import StudySessionList from "./components/StudySessionList";

function App() {
  const [studySessions, setStudySessions] = useState([]); //studySessions = stored data, setStudySessions = the function
  const [loading, setLoading] = useState(true); //Tracks whether the initial fetch is still running
  const [error, setError] = useState(""); //Stores error message if fetch fails

  useEffect(() => {
    async function fetchStudySessions() {
      try {
      const response = await fetch("http://localhost:5000/api/study-sessions");
      
      if (!response.ok) {
        throw new Error("Failed to fetch study sessions");
      }
      
      const data = await response.json();
      setStudySessions(data);        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }

    }

    fetchStudySessions();
  }, []);

  async function handleDeleteStudySession(id) {
    setError("");
    
    try {
      const response = await fetch(`http://localhost:5000/api/study-sessions/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete study session");
      }

      setStudySessions((currentSessions) => 
        currentSessions.filter((studySession) => studySession._id !== id)
      );      
    } catch (error) {
      setError(error.message);    
    }
  }

  if (loading) {
    return <p>Loading study sessions...</p>
  }

  if (error) {
    return <p>{error}</p>
  }
  
  return (
    <main>
      <h1>Study Session Tracker</h1>
      <StudySessionForm
        onStudySessionCreated={(newStudySession) => //onStudySessionCreated = prop
          setStudySessions((currentSessions) => [newStudySession, ...currentSessions])
        }
      />
      <StudySessionList 
        studySessions={studySessions}
        onDelete={handleDeleteStudySession}
        />
    </main>
  );
}

export default App;

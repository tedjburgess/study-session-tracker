import { useEffect, useState } from "react"; //useState = component remembers data; useEffect = Code after component is on the screen
import "./App.css";
import StudySessionForm from "./components/StudySessionForm";
import StudySessionList from "./components/StudySessionList";

function App() {
  const [studySessions, setStudySessions] = useState([]); //studySessions = stored data, setStudySessions = the function

  useEffect(() => {
    async function fetchStudySessions() {
      const response = await fetch("http://localhost:5000/api/study-sessions");
      const data = await response.json();
      setStudySessions(data);
    }

    fetchStudySessions();
  }, []);
  
  return (
    <main>
      <h1>Study Session Tracker</h1>
      <StudySessionForm />
      <StudySessionList studySessions={studySessions}/>
    </main>
  );
}

export default App;

import "./App.css";
import StudySessionForm from "./components/StudySessionForm";
import StudySessionList from "./components/StudySessionList";

function App() {
  return (
    <main>
      <h1>Study Session Tracker</h1>
      <StudySessionForm />
      <StudySessionList />
    </main>
  );
}

export default App;

import { useState } from "react";

function StudySessionForm( { onStudySessionCreated } ) {
  const [formData, setFormData] = useState({ //formData = object holding form values, setFormData = updates values from user input
    courseId: "",
    sessionDate: "",
    durationMinutes: "",
    focusRating: "",
    topic: "",
    studyMethod: "",
  });

  const [error, setError] = useState("");


  console.log(formData);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    
    try {
      const response = await fetch("http://localhost:5000/api/study-sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create study session");
      }

      const data = await response.json();
      onStudySessionCreated(data);
      setFormData({
        courseId: "",
        sessionDate: "",
        durationMinutes: "",
        focusRating: "",
        topic: "",
        studyMethod: "",
      });
      console.log(data);      
    } catch (error) {
      setError(error.message);      
    }

  }
  
  return (
    <section>
      <h2>Add Study Session</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="courseId">Course ID</label>
          <input
            id="courseId"
            name="courseId"
            type="text"
            value={formData.courseId}
            onChange={(event) =>
              setFormData({ ...formData, courseId: event.target.value })
            }
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <input id="topic" 
            name="topic" 
            type="text" 
            value={formData.topic}
            onChange={(event) =>
              setFormData({ ...formData, topic: event.target.value })
            }
            />         
        </div>
      
        <div className="form-group">
          <label htmlFor="durationMinutes">Duration (minutes)</label>
          <input
            id="durationMinutes"
            name="durationMinutes"
            type="number"
            value={formData.durationMinutes}
            onChange={(event) =>
              setFormData({ ...formData, durationMinutes: event.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="focusRating">Focus Rating</label>
          <input
            id="focusRating"
            name="focusRating"
            type="number"
            min="1"
            max="5"
            value={formData.focusRating}
            onChange={(event) =>
              setFormData({ ...formData, focusRating: event.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="studyMethod">Study Method</label>
          <input
            id="studyMethod"
            name="studyMethod"
            type="text"
            value={formData.studyMethod}
            onChange={(event) =>
              setFormData({ ...formData, studyMethod: event.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="sessionDate">Session Date</label>
          <input
            id="sessionDate"
            name="sessionDate"
            type="date"
            value={formData.sessionDate}
            onChange={(event) =>
              setFormData({ ...formData, sessionDate: event.target.value })
            }
          />
        </div>

        <button type="submit">Add Study Session</button>
      </form>
    </section>
  );
}

export default StudySessionForm;
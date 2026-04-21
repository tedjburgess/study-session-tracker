import { useState } from "react";

function StudySessionForm() {
  const [formData, setFormData] = useState({ //formData = object holding form values, setFormData = updates values from user input
    sessionDate: "",
    durationMinutes: "",
    focusRating: "",
    topic: "",
    studyMethod: "",
  });

  console.log(formData);
  
  return (
    <section>
      <h2>Add Study Session</h2>
      <form>
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
import { useState } from "react";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="taskName">Task</label>
        <input
          name="taskName"
          type="text"
          placeholder="Add task"
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="taskDate">Day & Time</label>
        <input
          name="taskDate"
          type="text"
          placeholder="Add time & day"
          value={day}
          onChange={({ target }) => setDay(target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="taskReminder">Set reminder</label>
        <input
          name="taskReminder"
          type="checkbox"
          value={reminder}
          onChange={({ target }) => setReminder(target.checked)}
        />
      </div>

      <input type="submit" value="Save task" className="btn btn-block" />
    </form>
  );
}

export default AddTask;

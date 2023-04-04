import React, { useState, useEffect } from 'react';
import { getTasks } from '../api';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(data => setTasks(data));
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

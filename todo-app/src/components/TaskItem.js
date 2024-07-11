import React from 'react';

const TaskItem = ({ task, deleteTask, editTask }) => {
  const handleEdit = () => {
    const newText = prompt('Edit Task', task.text);
    if (newText) {
      editTask({ ...task, text: newText });
    }
  };

  return (
    <li>
      <span>{task.text}</span>
      <button onClick={() => handleEdit(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;

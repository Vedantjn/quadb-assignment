import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;

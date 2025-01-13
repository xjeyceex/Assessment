'use client'
import { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, idx) => idx !== index));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-6 bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800">To-Do List</h2>

      <div className="flex space-x-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border border-gray-300 p-3 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Add a task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Task
        </button>
      </div>

      <ul className="space-y-4 w-full max-w-xl">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-4 bg-white rounded-md shadow-md hover:bg-gray-50 ${
              task.completed ? 'bg-green-50' : ''
            }`}
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-500"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <span
                className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}
              >
                {task.text}
              </span>
            </div>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

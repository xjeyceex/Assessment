"use client";

import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const TodoList = () => {
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [newTask, setNewTask] = useState('');
  const [isLoading, setIsLoading] = useState(false);  // Loading state for feedback

  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase.from('tasks').select('*');
      if (error) console.error('Error fetching tasks:', error);
      else setTasks(data || []);
    };
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (newTask.trim()) {
      setIsLoading(true);  // Start loading feedback

      // Insert task into Supabase
      const { data, error } = await supabase.from('tasks').insert([{ text: newTask, completed: false }]);

      if (error) {
        console.error('Error adding task:', error.message || error);
      } else {
        const newTaskData = data ? data[0] : null;
        if (newTaskData) {
          // Optimistically update the task list by directly appending the new task to the state
          setTasks((prev) => [...prev, newTaskData]);
        }
        setNewTask('');
      }

      // Refetch the tasks after adding the new one
      await refetchTasks();

      setIsLoading(false);  // End loading feedback
    }
  };

  const refetchTasks = async () => {
    const { data, error } = await supabase.from('tasks').select('*');
    if (error) {
      console.error('Error fetching tasks after adding:', error);
    } else {
      setTasks(data || []);
    }
  };

  const toggleTaskCompletion = async (id: number, completed: boolean) => {
    const { error } = await supabase.from('tasks').update({ completed: !completed }).eq('id', id);
    if (error) console.error('Error toggling task:', error);
    else setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !completed } : task)));
  };

  const removeTask = async (id: number) => {
    const { error } = await supabase.from('tasks').delete().eq('id', id);
    if (error) console.error('Error removing task:', error);
    else setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Todo List</h1>
      
      <div className="mt-6 flex items-center justify-between">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          className="p-2 w-full border-2 text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="ml-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isLoading ? 'Adding...' : 'Add Task'} {/* Show loading state */}
        </button>
      </div>
      
      <ul className="space-y-4 mt-6">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between p-3 bg-white shadow-lg rounded-lg hover:bg-gray-100">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id, task.completed)}
                className="h-5 w-5 mr-3 rounded-md border-gray-300 focus:ring-blue-500"
              />
              <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}>{task.text}</span>
            </div>
            <button
              onClick={() => removeTask(task.id)}
              className="ml-4 text-red-500 hover:text-red-700 transition-colors"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

import React, {useState} from 'react';

import {View} from 'react-native';
import ToDoForm from './components/ToDoForm';
import TodoList from './components/TodoList';

export default function App() {
  const [tasks, setTasks] = useState(['Do laundry']);

  const addTask = taskText => {
    if (taskText && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };
  return (
    <View>
      <TodoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </View>
  );
}

import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDark, setIsDark] = useState<boolean>(false)

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle) {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }
      setTasks(prevState => [...prevState, data])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      let newTasks: Task[] = [...tasks];
      newTasks[index].done = !newTasks[index].done;
      setTasks(newTasks)
    }
  }

  function handleRemoveTask(id: number) {
    setTasks(preState => preState.filter(task => task.id !== id))
  }

  return (
    <View style={[styles.container, isDark && {backgroundColor: 'rgba(31, 31, 31, 0.8)'}]}>
      <Header changeTheme={() => setIsDark(prevState => !prevState)} isDark={isDark} />

      <TodoInput addTask={handleAddTask} isDark={isDark} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask}
        isDark={isDark}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const data ={
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    setTasks(oldState =>[...oldState, data])
  }

  function handleToggleTaskDone(id: number) {
    const updateTasks = tasks.map(task => ({ ...task }))
    const foundTask = updateTasks.find (task => task.id === id)

    if(!foundTask)
      return;

    foundTask.done = !foundTask.done;
    setTasks(updateTasks);
    console.log(tasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks (oldState => oldState.filter(
      removeTask => removeTask.id !== id
    ));
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})
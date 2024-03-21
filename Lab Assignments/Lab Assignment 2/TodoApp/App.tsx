import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

interface Task {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editMode, setEditMode] = useState<{ id: string; text: string } | null>(null);

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask: Task = { id: String(Date.now()), text: task };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const removeTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setEditMode(null);
  };

  const editTask = () => {
    if (editMode) {
      const updatedTasks = tasks.map((task) =>
        task.id === editMode.id ? { ...task, text: editMode.text } : task
      );
      setTasks(updatedTasks);
      setEditMode(null);
    }
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      {editMode?.id === item.id ? (
        <TextInput
          style={styles.editInput}
          value={editMode.text}
          onChangeText={(text) => setEditMode({ ...editMode, text })}
        />
      ) : (
        <Text>{item.text}</Text>
      )}
      <View style={styles.buttonContainer}>
        {editMode?.id === item.id ? (
          <Button title="Save" onPress={editTask} />
        ) : (
          <TouchableOpacity onPress={() => setEditMode({ id: item.id, text: item.text })}>
            <Text style={styles.editButton}>Edit</Text>
          </TouchableOpacity>
        )}
        <Button title="Remove" onPress={() => removeTask(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        style={styles.list}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  list: {
    marginTop: 10,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  editInput: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    color: 'blue',
    marginRight: 10,
  },
});

export default App;

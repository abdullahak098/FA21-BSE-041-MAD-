import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [gpa, setGpa] = useState('');
  const [students, setStudents] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const addStudent = () => {
    if (!name || !gpa) {
      alert('Please fill in all fields');
      return;
    }
    const student = { name, gpa };
    setStudents([...students, student]);
    setName('');
    setGpa('');
    alert('Student record added successfully');
  };

  const searchStudent = () => {
    const result = students.find(student => student.name.toLowerCase() === searchText.toLowerCase());
    if (result) {
      setSearchResult(result);
      setModalVisible(true);
    } else {
      alert('Student not found');
    }
  };

  const deleteStudent = () => {
    const updatedStudents = students.filter(student => student.name.toLowerCase() !== searchText.toLowerCase());
    setStudents(updatedStudents);
    setSearchText('');
    setModalVisible(false);
    alert('Student record deleted successfully');
  };

  const clearAllRecords = () => {
    setStudents([]);
    setSearchText('');
    setModalVisible(false);
    alert('All student records cleared');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Records</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="GPA"
        value={gpa}
        onChangeText={text => setGpa(text)}
        keyboardType="numeric"
      />
      <Button title="Add Record" onPress={addStudent} />
      <TextInput
        style={styles.input}
        placeholder="Search by Name"
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <Button title="Search" onPress={searchStudent} />
      <Button title="Clear All Records" onPress={clearAllRecords} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Student Details</Text>
            {searchResult && (
              <>
                <Text>Name: {searchResult.name}</Text>
                <Text>GPA: {searchResult.gpa}</Text>
                <TouchableOpacity onPress={deleteStudent}>
                  <Text style={styles.deleteButton}>Delete Record</Text>
                </TouchableOpacity>
              </>
            )}
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Text style={styles.recordHeading}>Records View</Text>
      <FlatList
        data={students}
        renderItem={({ item }) => (
          <View style={styles.recordItem}>
            <Text>Name: {item.name}</Text>
            <Text>GPA: {item.gpa}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  deleteButton: {
    color: 'red',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  recordHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  recordItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default App;

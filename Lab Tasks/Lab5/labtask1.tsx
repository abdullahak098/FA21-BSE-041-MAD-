import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Game = () => {
  const [inputNumber, setInputNumber] = useState('');

  const handleInput = (number: string) => {
    setInputNumber((prevInput) => prevInput + number);
  };

  const handleClear = () => {
    setInputNumber('');
  };

  // Add any other logic or functions as needed

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number"
        value={inputNumber}
        editable={false}
      />
      <View style={styles.buttonsContainer}>
        {[...Array(10).keys()].map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.button}
            onPress={() => handleInput(number.toString())}
          >
            <Text style={styles.buttonText}>{number}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  clearButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 20,
  },
});

export default Game;

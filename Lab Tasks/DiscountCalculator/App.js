import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const DiscountCalculatorApp = () => {
  // State variables to store original price, discount percentage, calculated price, and history
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState('');
  const [history, setHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Function to handle calculation of price after discount
  const calculateDiscount = () => {
    // Parse original price and discount percentage to float
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    // Calculate the discounted price
    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;

    // Update the calculated price state
    setCalculatedPrice(finalPrice.toFixed(2));

    // Add the calculation to history
    const historyItem = `${price} - ${discount}% = ${finalPrice.toFixed(2)}`;
    setHistory([...history, historyItem]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Discount Calculator</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Original Price"
          keyboardType="numeric"
          value={originalPrice}
          onChangeText={text => setOriginalPrice(text.replace(/[^0-9.]/g, ''))}
        />
        <TextInput
          style={styles.input}
          placeholder="Discount Percentage"
          keyboardType="numeric"
          value={discountPercentage}
          onChangeText={text => setDiscountPercentage(text.replace(/[^0-9.]/g, ''))}
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>You Save: ${((originalPrice * discountPercentage) / 100).toFixed(2)}</Text>
        <Text style={styles.resultText}>Final Price: ${calculatedPrice}</Text>
      </View>
      <Button title="Calculate" onPress={calculateDiscount} />
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.historyButton}>View History</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>History</Text>
            <FlatList
              data={history}
              renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>}
              keyExtractor={(item, index) => index.toString()}
            />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  resultContainer: {
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
  historyButton: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 20,
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
    maxHeight: '80%',
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DiscountCalculatorApp;

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const products = [
  { id: 1, category: 'Electronics', name: 'Smartphone', price: 499 },
  { id: 2, category: 'Electronics', name: 'Laptop', price: 999 },
  { id: 3, category: 'Clothing', name: 'T-Shirt', price: 19.99 },
  { id: 4, category: 'Clothing', name: 'Jeans', price: 39.99 },
  { id: 5, category: 'Books', name: 'React Native Development', price: 29.99 },
  { id: 6, category: 'Books', name: 'JavaScript for Beginners', price: 19.99 },
];

const ProductListScreen = ({ navigation }) => {
  const renderItem = ({ item, index }) => {
    let backgroundColor = index % 2 === 0 ? '#f8f8f8' : '#e6e6e6';

    return (
      <TouchableOpacity style={[styles.item, { backgroundColor }]} onPress={() => navigation.navigate('ProductDetails', { product: item })}>
        <Text>{item.name}</Text>
        <Text>{item.category}</Text>
        <Text>${item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
});

export default ProductListScreen;

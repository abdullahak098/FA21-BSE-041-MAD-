import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    setCartItems([...cartItems, product]);
    navigation.navigate('Notification', { message: 'Product added to cart' });
  };

  const buyProduct = () => {
    navigation.navigate('Notification', { message: 'Product bought' });
    // Add logic for purchasing the product
  };

  const submitReview = () => {
    setReviews([...reviews, review]);
    setReview('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
      
      <View style={styles.buttonsContainer}>
        <Button title="Add to Cart" onPress={addToCart} />
        <View style={styles.buttonGap} />
        <Button title="Buy Now" onPress={buyProduct} />
      </View>
      
      <Text style={styles.sectionHeader}>Reviews:</Text>
      {reviews.map((item, index) => (
        <Text key={index} style={styles.review}>{item}</Text>
      ))}
      
      <TextInput
        style={styles.input}
        placeholder="Leave a review"
        value={review}
        onChangeText={setReview}
        multiline
      />
      <Button title="Submit Review" onPress={submitReview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  buttonGap: {
    width: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  review: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default ProductDetailsScreen;

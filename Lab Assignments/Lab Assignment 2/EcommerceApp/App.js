import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './ProductListScreen';
import ProductDetailsScreen from './ProductDetailsScreen';
import NotificationScreen from './NotificationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Products' }} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Product Details' }} />
        <Stack.Screen name="Notification" component={NotificationScreen} options={{ title: 'Notification' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

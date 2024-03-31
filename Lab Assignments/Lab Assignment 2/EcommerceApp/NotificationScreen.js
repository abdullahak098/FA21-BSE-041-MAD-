import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NotificationScreen = ({ route, navigation }) => {
  const { message } = route.params;

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NotificationScreen;

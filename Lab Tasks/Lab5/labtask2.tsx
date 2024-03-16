import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleUsernameChange = (text: string) => {
    setUsername(text);
    setIsButtonDisabled(text === '' || password === '');
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setIsButtonDisabled(text === '' || username === '');
  };

  const handleLogin = () => {
    if (username === 'cspeople' && password === 'computerscience') {
      Alert.alert('Success', 'Login Successful');
    } else {
      Alert.alert('Error', 'Incorrect username or password');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Username"
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 5 }}
        placeholder="Password"
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <Button
        title="Submit"
        onPress={handleLogin}
        disabled={isButtonDisabled}
      />
    </View>
  );
};

export default LoginScreen;

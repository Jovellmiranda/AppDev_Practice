// frontend/src/components/LoginForm.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
// import { login } from '../api/api';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      // Add additional logic here, such as navigating to a new screen on successful login
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error('Login failed:', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;

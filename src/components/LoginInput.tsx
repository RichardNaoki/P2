import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

interface LoginInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}


const LoginInput: React.FC<LoginInputProps> = ({ placeholder, value, onChangeText, secureTextEntry = false }) => {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        <View style={styles.underline} />
      </View>
    );
  };


const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 0,
    paddingHorizontal: 10,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  underline: {
    height: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
});

export default LoginInput;
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginTitle from '../components/LoginTitle';
import LoginInput from '../components/LoginInput';
import LoginButton from '../components/LoginButton';


interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <LoginTitle titleText="LOGIN /" subTitleText="Loja Varejo" />
      <LoginInput placeholder="Username" value={username} onChangeText={setUsername} />
      <LoginInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <View style={styles.buttonContainer}>
        <LoginButton onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 20,
  },
});

export default LoginScreen;
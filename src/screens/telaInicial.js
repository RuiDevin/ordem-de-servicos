import React from 'react';
import * as SecureStore from 'expo-secure-store';

import { useSetRecoilState } from 'recoil';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

import { userState } from '../recoils/atoms/auth';
import LoginApi from '../api/login';

const loginApi = new LoginApi();

export default function LoginScreen() {
  const setUser = useSetRecoilState(userState);

  const [cpf, setCpf] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [erro, setErro] = React.useState('');

  const handleLogin = async () => {
    try {
      const data = await loginApi.login(cpf, senha);
      setUser({
        loggedIn: true,
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      });
      await SecureStore.setItemAsync('access_token', data.access_token);
    } catch (error) {
      setUser({ loggedIn: false, access_token: null, refresh_token: null });
      await SecureStore.deleteItemAsync('access_token');
      setErro('Usuário ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  erro: {
    color: 'red',
    marginTop: 10,
  },
});

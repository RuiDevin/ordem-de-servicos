import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [Cpf, setCpf] = useState('');

  const handleCadastro = () => {
    if (nome === '') {
      Alert.alert('Erro', 'Por favor, insira seu nome.');
      return;
    }
  
    if (email === '') {
      Alert.alert('Erro', 'Por favor, insira seu email.');
      return;
    }
  
    if (senha === '') {
      Alert.alert('Erro', 'Por favor, insira sua senha.');
      return;
    }
  
    if (Cpf === '') {
      Alert.alert('Erro', 'Por favor, insira seu CPF.');
      return;
    }
  
  };

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
      />

      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
      />

      <Text>Senha:</Text>
      <TextInput
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Text>CPF:</Text>
      <TextInput
        value={Cpf}
        onChangeText={setCpf}
      />

      <Button
        title="Cadastrar"
        onPress={handleCadastro}
      />
    </View>
  );
};

export default Cadastro;

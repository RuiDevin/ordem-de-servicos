import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [Cpf, setCpf] = useState('');

  const handleCadastro = () => {
    // validar os campos aqui
    // enviar as informações para o servidor
    // mostrar uma mensagem de sucesso ao usuário
  };

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
      />

      <Text></Text>Email:</Text>
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

      <Text>Cpf</Text>
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

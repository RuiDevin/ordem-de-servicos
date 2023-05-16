import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const StatusScreen = () => {
  const [orderCode, setOrderCode] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const getOrderStatus = () => {
    if (orderCode === '12345') {
      setOrderStatus('Em andamento');
    } else {
      setOrderStatus('Código inválido');
    }
  };

  const handleOrderCodeChange = (code) => {
    setOrderCode(code);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleOrderCodeChange}
        value={orderCode}
        placeholder="Digite o código da ordem de serviço"
      />
      <Button
        title="Verificar status"
        onPress={getOrderStatus}
      />
      <Text>Status: {orderStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
});

export default Cliente;

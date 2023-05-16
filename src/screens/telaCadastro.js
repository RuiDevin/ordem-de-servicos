import {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';



const FreteScreen = () => {
  const [cep, setCep] = useState('');
  const [valorFrete, setValorFrete] = useState('');

  const tabelaFrete = {
    '01000-000': 10.0,
    '02000-000': 15.0,
    // adicione aqui os valores de frete para outros CEPs
  };

  const handleCalcularFrete = () => {
    if (tabelaFrete[cep]) {
      setValorFrete(tabelaFrete[cep]);
    } else {
      alert('CEP não encontrado na tabela de frete.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frete</Text>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={setCep}
        placeholder="Digite o CEP"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleCalcularFrete}>
        <Text style={styles.buttonText}>Calcular Frete</Text>
      </TouchableOpacity>
      {valorFrete ? (
        <Text style={styles.valorFrete}>Valor do Frete: R$ {valorFrete}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    width: '80%',
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  valorFrete: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FreteScreen;
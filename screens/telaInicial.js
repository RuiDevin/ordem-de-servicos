import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardScreen = () => {
  const [totalEntrada, setTotalEntrada] = useState(0);
  const [totalSaida, setTotalSaida] = useState(0);
  const [consertosClientes, setConsertosClientes] = useState([]);

  // Essas funções são apenas exemplos e devem ser substituídas pela lógica real da aplicação
  const calcularTotalEntrada = () => {
    // Lógica para calcular o total de dinheiro que entrou
    setTotalEntrada(5000);
  };

  const calcularTotalSaida = () => {
    // Lógica para calcular o total de dinheiro que saiu
    setTotalSaida(3000);
  };

  const buscarConsertosClientes = () => {
    // Lógica para buscar as informações dos consertos dos clientes
    setConsertosClientes([
      { id: 1, cliente: 'João', valor: 100 },
      { id: 2, cliente: 'Maria', valor: 200 },
      { id: 3, cliente: 'José', valor: 150 },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.infoTitle}>Total de Entrada</Text>
          <Text style={styles.infoValue}>R$ {totalEntrada.toFixed(2)}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoTitle}>Total de Saída</Text>
          <Text style={styles.infoValue}>R$ {totalSaida.toFixed(2)}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoTitle}>Saldo Atual</Text>
          <Text style={styles.infoValue}>R$ {(totalEntrada - totalSaida).toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.consertosContainer}>
        <Text style={styles.consertosTitle}>Consertos dos Clientes</Text>
        {consertosClientes.map((conserto) => (
          <View key={conserto.id} style={styles.conserto}>
            <Text style={styles.consertoCliente}>{conserto.cliente}</Text>
            <Text style={styles.consertoValor}>R$ {conserto.valor.toFixed(2)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  info: {
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  consertosContainer: {
    flex: 1,
  },
  consertosTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

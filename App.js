import { StyleSheet, Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Cadastro from './screens/telaCadastro';
import FreteScreen from './screens/telaFrete';
import  DashboardScreen from './screens/telaInicial';
import  Login from './screens/telaLogin';


const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ordens de Serviço</Text>
      <Text style={styles.subtitle}>Bem vindo a RvHardware.</Text>
      <Text style={styles.subtitle}>Em que podemos ser util?</Text>
      <Button title= "Ir Cadastro" onPress={() => navigation.navigate('Cadastro')}/>
      <Button title="Ir Login" onPress={() => navigation.navigate('Login')}/>
      <Button title="Ir para o Frete" onPress={() => navigation.navigate('Frete')}/>
    </View>
  );
};


function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Inicial" component={DashboardScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Frete" component={FreteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Home;

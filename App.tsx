import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './src/componentes/contador';
import Favorito from './src/componentes/favorito';

export default function App() {
  return (
    <View style={styles.container}>
      <Contador/>
      <Favorito/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

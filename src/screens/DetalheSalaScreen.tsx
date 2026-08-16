// O arquivo `DetalheSalaScreen.tsx` é um componente de tela do React Native que exibe os detalhes de uma sala específica. 
// Ele utiliza a navegação entre telas para receber os parâmetros da sala selecionada e renderizar as informações correspondentes.
// O componente é tipado com TypeScript, garantindo que os parâmetros recebidos estejam corretos e evitando erros de tipo durante o desenvolvimento.
// O componente `DetalheSalaScreen` é exportado como padrão, permitindo que seja importado e utilizado em outras partes do aplicativo.
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

// O tipo `Props` é definido como as propriedades esperadas para o componente `DetalheSalaScreen`, utilizando a tipagem `NativeStackScreenProps` para garantir que as props de navegação estejam corretas.
type Props = NativeStackScreenProps<RootStackParamList, 'DetalheSala'>;

// O componente `DetalheSalaScreen` é a tela que exibe os detalhes de uma sala específica. Ele recebe as props de navegação e os parâmetros da rota, que incluem o objeto `sala` com as informações da sala selecionada.
// prop significa "propriedades" e é um objeto que contém informações passadas para o componente, como parâmetros de navegação e dados da sala.
export default function DetalheSalaScreen({ route }: Props) {
  const { sala } = route.params;

  // O retorno do componente `DetalheSalaScreen` é a interface do usuário, que inclui o nome da sala, informações adicionais e um cartão com o caminho para chegar até a sala.
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{sala.nome}</Text>
      <Text style={styles.info}>{sala.modulo} · {sala.andar}º andar</Text>
    {/* O componente `View` é usado para criar um cartão com o caminho para chegar até a sala.*/}
      <View style={styles.card}>
        <Text style={styles.label}>Como chegar</Text>
        <Text style={styles.texto}>{sala.caminho}</Text>
      </View>
    </View>
  );
}

// O objeto `styles` é criado usando `StyleSheet.create`, que define os estilos para os diferentes componentes da interface do usuário, como o contêiner principal, nome da sala, informações adicionais e cartão de caminho.
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 16, backgroundColor: '#fff' },
  nome: { fontSize: 24, fontWeight: 'bold' },
  info: { fontSize: 14, color: '#666', marginBottom: 24 },
  card: { backgroundColor: '#f2f2f2', borderRadius: 8, padding: 16 },
  label: { fontSize: 12, color: '#888', marginBottom: 6, textTransform: 'uppercase' },
  texto: { fontSize: 16, lineHeight: 22 },
});
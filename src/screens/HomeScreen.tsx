// Os imports abaixo são necessários para o funcionamento do React Native e da navegação entre telas, sendo eles: 
// React (para criar componentes), 
// useState (para gerenciar estado), 
// View, Text, TextInput, FlatList, StyleSheet e Pressable (componentes de interface do usuário do React Native), 
// NativeStackScreenProps (para tipagem das props de navegação), 
// salas (dados das salas) e Sala, 
// RootStackParamList (tipos definidos para as salas e navegação).
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { salas } from '../data/salas';
import { Sala, RootStackParamList } from '../types';

// O tipo `Props` é definido como as propriedades esperadas para o componente `HomeScreen`, utilizando a tipagem `NativeStackScreenProps` para garantir que as props de navegação estejam corretas.
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

// O componente `HomeScreen` é a tela principal do aplicativo, que exibe uma lista de salas e permite ao usuário pesquisar por elas.
export default function HomeScreen({ navigation }: Props) {
  const [busca, setBusca] = useState('');
// A função `salasFiltradas` filtra a lista de salas com base na entrada do usuário. 
// Ela utiliza o método `filter` do array para criar um novo array contendo apenas as salas cujo nome inclui a string de busca, ignorando maiúsculas e minúsculas.
  const  salasFiltradas = salas.filter((sala)=>
    sala.nome.toLowerCase().includes(busca.toLowerCase())
  );
  // O retorno do componente `HomeScreen` é a interface do usuário, que inclui um título, um campo de entrada para pesquisa e uma lista de salas filtradas.
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>UNIMAPA</Text>

        {/* O componente `TextInput` permite ao usuário digitar sua pesquisa, atualizando o estado `busca` com cada mudança.
        onChangeText é uma função que é chamada sempre que o texto no campo de entrada muda, atualizando o estado `busca` com o novo valor. 
        Nesse caso, a função `setBusca` é usada para atualizar o estado `busca` com o valor digitado pelo usuário. */}
        <TextInput
            style={styles.input}
            placeholder="Buscar sala..."
            value={busca}
            onChangeText={setBusca}
        />

        {/* O componente `FlatList` exibe a lista de salas filtradas, criando um cartão para cada sala. */}
        <FlatList
            data={salasFiltradas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }: { item: Sala }) => (
                
                // O componente `Pressable` é usado para criar um item interativo na lista. Ele exibe o nome da sala e detalhes adicionais, como o módulo e o andar. 
                // Funciona assim: quando o usuário pressiona o cartão, a função `navigation.navigate` é chamada para navegar para a tela `DetalheSala`, passando o objeto `sala` como parâmetro.
                <Pressable 
                    style={styles.card}
                    onPress={() => navigation.navigate('DetalheSala', { sala: item })}
                >
                    {/* O componente `Pressable` é usado para criar um item interativo na lista. Ele exibe o nome da sala e detalhes adicionais, como o módulo e o andar. */}
                    <Text style={styles.nomeSala}>{item.nome}</Text>
                    <Text style={styles.detalhe}>{item.modulo} · {item.andar}º andar</Text>
                    <Text style={styles.nomeSala}>{item.nome}</Text>
                    <Text style={styles.detalhe}>{item.modulo} · {item.andar}º andar</Text>
                </Pressable>
            )}
        /> 
    </View>
  )
}

// O objeto `styles` é criado usando `StyleSheet.create`, que define os estilos para os diferentes componentes da interface do usuário, como o contêiner principal, título, campo de entrada e cartões de sala.
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 16, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 16 },
  card: { padding: 14, borderRadius: 8, backgroundColor: '#f2f2f2', marginBottom: 10 },
  nomeSala: { fontSize: 16, fontWeight: '600' },
  detalhe: { fontSize: 13, color: '#666', marginTop: 2 },
});

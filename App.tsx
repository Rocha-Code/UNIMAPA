// Aqui está o código completo do arquivo App.tsx, que é um componente React Native que exibe uma lista de salas e permite ao usuário pesquisar por elas. 
// O código utiliza hooks do React para gerenciar o estado da pesquisa e filtrar a lista de salas com base na entrada do usuário.
// Hooks são funções especiais do React que permitem que você use o estado e outros recursos do React em componentes funcionais. 
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Pressable } from 'react-native';
import { salas } from './src/data/salas';
import { Sala } from './src/types';

// O componente `App` é o componente principal do aplicativo. Ele mantém o estado da pesquisa (`busca`) e renderiza a interface do usuário.
export default function App() {
  const [busca, setBusca] = useState('');

  // A função `salasFiltradas` filtra a lista de salas com base na entrada do usuário. 
  // Ela utiliza o método `filter` do array para criar um novo array contendo apenas as salas cujo nome inclui a string de busca, ignorando maiúsculas e minúsculas.
  const salasFiltradas = salas.filter((sala) =>
    sala.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    // O componente `View` é um contêiner que agrupa outros componentes.
    // O componente `Text` exibe o título "Guia Campus".
    // O componente `TextInput` permite ao usuário digitar sua pesquisa, atualizando o estado `busca` com cada mudança.
    <View style={styles.container}>
       <Text style={styles.titulo}>UNIMAPA</Text>
    
    <TextInput
        // O componente `TextInput` é usado para capturar a entrada do usuário.
        style={styles.input}
        // O atributo `placeholder` exibe um texto de sugestão quando o campo está vazio.
        placeholder="Buscar sala..."
        // O atributo `value` vincula o valor do campo de entrada ao estado `busca`, garantindo que o campo exiba o valor atual da pesquisa.
        value={busca}
        // O atributo `onChangeText` é uma função que é chamada sempre que o texto no campo de entrada muda, atualizando o estado `busca` com o novo valor.
        onChangeText={setBusca}
      />

  {/* O componente `FlatList` é usado para renderizar a lista de salas filtradas.
       Ele recebe os dados filtrados, uma função para extrair a chave de cada item e uma função para renderizar cada item da lista.
       Cada item é renderizado como um `Pressable`, que é um componente que pode ser pressionado, exibindo o nome da sala e detalhes como bloco e andar.*/}
      <FlatList
        // O atributo `data` recebe o array de salas filtradas, que será renderizado na lista.
        data={salasFiltradas}
        // O atributo `keyExtractor` é uma função que retorna a chave única de cada item na lista, garantindo que o React possa identificar cada item de forma eficiente.
        keyExtractor={(item) => item.id}
        // O atributo `renderItem` é uma função que define como cada item da lista será renderizado.
        renderItem={({ item }: { item: Sala }) => (
          // O componente `Pressable` é usado para criar um item interativo na lista. Ele exibe o nome da sala e detalhes adicionais, como o módulo e o andar.
          <Pressable style={styles.card}>
            {/* O componente `Text` exibe o nome da sala, estilizado com a classe `nomeSala`. */}
            <Text style={styles.nomeSala}>{item.nome}</Text>
            {/* O componente `Text` exibe detalhes adicionais sobre a sala, como o módulo e o andar, estilizado com a classe `detalhe`. */}
            <Text style={styles.detalhe}>{item.modulo} · {item.andar}º andar</Text>
          </Pressable>
        )}
      />
    </View>
  );
} 
// O objeto `styles` é criado usando `StyleSheet.create`, que define os estilos para os diferentes componentes da interface do usuário, como o contêiner principal, título, campo de entrada e cartões de sala.
const styles = StyleSheet.create({
  // O estilo `container` define a aparência do contêiner principal, incluindo preenchimento, cor de fundo e flexibilidade.
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 16, backgroundColor: '#fff' },
  // O estilo `titulo` define a aparência do título, incluindo tamanho da fonte, peso da fonte e margem inferior.
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  // O estilo `input` define a aparência do campo de entrada, incluindo largura, altura, borda, preenchimento e margem inferior.
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  // O estilo `card` define a aparência de cada cartão de sala, incluindo preenchimento, borda arredondada, cor de fundo e margem inferior.
  card: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
  },
  // O estilo `nomeSala` define a aparência do nome da sala, incluindo tamanho da fonte e peso da fonte.
  nomeSala: { fontSize: 16, fontWeight: '600' },
  detalhe: { fontSize: 13, color: '#666', marginTop: 2 },
});
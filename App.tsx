import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetalheSalaScreen from './src/screens/DetalheSalaScreen';
import { RootStackParamList } from './src/types';

// O componente `App` é o ponto de entrada do aplicativo. Ele utiliza o `NavigationContainer` para gerenciar a navegação entre as telas e o `createNativeStackNavigator` para criar uma pilha de navegação.
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // O `NavigationContainer` é o componente que envolve toda a navegação do aplicativo, permitindo que as telas sejam renderizadas corretamente.
    <NavigationContainer>
      {/* O `Stack.Navigator` é o componente que define a pilha de navegação, permitindo que as telas sejam empilhadas e navegadas. */}
      <Stack.Navigator>
        {/* A tela inicial do aplicativo. Stack.Screen: significa uma tela na pilha de navegação. */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="DetalheSala"
          component={DetalheSalaScreen}
          options={{ title: 'Detalhes da Sala' }}
        />
      </Stack.Navigator>
      </NavigationContainer>
  )
}

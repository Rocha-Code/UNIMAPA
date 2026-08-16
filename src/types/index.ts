/* Isso é um arquivo de declaração de tipos TypeScript, que define a interface `Sala`. 
A interface `Sala` descreve a forma de um objeto que representa uma sala, com as seguintes propriedades:

   - export: A palavra-chave `export` indica que a interface `Sala` pode ser importada e utilizada em outros arquivos TypeScript.
   - interface: Define a estrutura de um objeto, especificando os tipos de suas propriedades.
*/
export interface Sala {
    id: string;
    nome: string;
    modulo: string;
    andar: number;
    caminho: string;
}

// O tipo `RootStackParamList` é um tipo de objeto que define os parâmetros esperados para cada rota na navegação do aplicativo.
//O que é isso: RootStackParamList é um "mapa" que diz ao TypeScript: "a tela Home não recebe nenhum parâmetro (undefined), já a tela DetalheSala espera receber um objeto { sala: Sala }". 
// Isso faz o editor te avisar se você esquecer de passar a sala ao navegar, ou se tentar acessar um campo que não existe.
export type RootStackParamList = {
    Home: undefined;
    DetalheSala: { sala: Sala };
};
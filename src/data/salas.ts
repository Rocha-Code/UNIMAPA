// Isso é um arquivo TypeScript que define um array de objetos do tipo `Sala`. 
// Cada objeto representa uma sala com suas propriedades específicas, como `id`, `nome`, `modulo`, `andar` e `caminho`. 
// O array `salas` é exportado para ser utilizado em outros arquivos do projeto.
import {Sala} from '../types';

export const salas: Sala[] = [
    {
        id: '1',
        nome: 'Sala 101',
        modulo: 'Módulo 1',
        andar: 1,
        caminho: 'Entrada principal, primeira porta à esquerda',
    },
    {
        id: '2',
        nome: 'Sala 102',
        modulo: 'Módulo 1',
        andar: 1,
        caminho: 'Entrada principal, segunda porta à esquerda',
    },
    {
        id: '3',
        nome: 'Sala 201',
        modulo: 'Módulo 2',
        andar: 2,
        caminho: 'Segunda porta à direita, segundo andar',
    },
    {
        id: '4',
        nome: 'Sala 202',
        modulo: 'Módulo 2',
        andar: 2,
        caminho: 'Segunda porta à direita, segundo andar',
    }
];

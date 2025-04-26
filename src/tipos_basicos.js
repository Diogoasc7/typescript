"use strict";
let estaChovendo = false;
estaChovendo = true;
let idade = 27;
let altura = 1.75;
// Não possui diferença de números com virgula para números inteiros
const nacionalidadde = 'brasileira';
//Duas formas de declarar arrays de strings:
const colegas = ['Lucas', 'Fernanda'];
const tecnologias = ['html', 'css', 'js'];
/*
Um array que não pode ser modificado depois de criado.
Impede métodos como push, pop, etc.
*/
const notas = [7, 9, 5, 8];
/*
Tupla
Um array com número fixo de elementos, com tipos e ordem definidos.
Aqui, lista contém um nome (string), um estado de estudo (boolean) e uma idade (number).
*/
const lista = ['gian', true, 27];
/*
Union Types
idadeDaAna pode ser do tipo number ou string.
Começa como número, depois vira string — útil quando o dado pode vir em formatos diferentes.
*/
let idadeDaAna = 25;
idadeDaAna = '25 anos';
/*
Any
O tipo any desativa a verificação de tipo.
Pode armazenar qualquer valor, mas deve ser evitado quando possível, pois perde a segurança da tipagem.
*/
let dadosDaApi;
dadosDaApi = 10;
dadosDaApi = [1, 2, 3];
dadosDaApi = true;
dadosDaApi = 'string';

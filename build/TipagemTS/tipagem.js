"use strict";
//Tipos primitivos
let nome = "João";
let idade = 30;
let altura = 1.89;
let valorLogico = true;
//tipos sem valor: null - undefined
let nulo;
let indefinido;
//Tipos abrangentes : any - void
let retorno;
let retornoQualquer;
//Objeto sem previsibilidade - sem tipagem previa
let pessoa = {
    nome: "Rogério",
    cidade: "São Paulo",
    idade: 25
};
let meuProduto = {
    nome: "tênis",
    preco: 123.09,
    categoria: "sapatos",
    unidades: 67
};
//Arrays - vetor
let frutas = ["banana", "maçã", "pera"];
let nomes = ["Felipe", "Ana", "Maria"];
// Array multi tipos
let infor = [1, 3, "maçã", "teresa"];
//Tuplas é um vetor de tipos múltiplos - a ordem dos tipos deve ser respeitada
let boleto = ["água", 199.9, 2345677];
/**
 * Datas
 */
let aniversario = new Date("2023-12-01 05:00");
console.log(aniversario.toString);

//Tipos primitivos
let nome: string = "João"
let idade: number = 30
let altura: number = 1.89
let valorLogico : boolean = true

//tipos sem valor: null - undefined
let nulo: null
let indefinido: undefined

//Tipos abrangentes : any - void
let retorno :void
let retornoQualquer: any

//Objeto sem previsibilidade - sem tipagem previa
let pessoa: object = {
    nome: "Rogério",
    cidade:"São Paulo",
    idade: 25
}
//Objeto tipado : como deve ser instanciado de acordo com as boas práticas
type produto = {
    nome: string,
    preco: number,
    categoria: string,
    unidades: number
}

let meuProduto: produto = {
    nome: "tênis",
    preco: 123.09,
    categoria: "sapatos",
    unidades: 67
}

//Arrays - vetor
let frutas: string [] = ["banana","maçã", "pera"];

let nomes: Array<string> = ["Felipe", "Ana", "Maria"]; 

// Array multi tipos
let infor : (string | number)[] = [1,3,"maçã", "teresa"]

//Tuplas é um vetor de tipos múltiplos - a ordem dos tipos deve ser respeitada
let boleto :[string, number, number] = ["água", 199.9, 2345677]

/**
 * Datas
 */

let aniversario: Date = new Date("2023-10-01 05:00");
console.log(aniversario.toString());



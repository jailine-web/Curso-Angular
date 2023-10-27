//Generics os ... indica que aceita diversos itens 

function concatenaArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}
const numArray = concatenaArray(<number[]>[1,5], [3]);
const strArray = concatenaArray(<string[]>["Ana", "júlia"], ["Teresa"]);

/*Não aceita mais essa atribuição
numArray.push("any x number");*/

console.log(numArray);
console.log(strArray);







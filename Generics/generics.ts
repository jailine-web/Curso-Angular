//Generics os ... indica que aceita diversos itens 

function concatenaArray(...itens: any[]): any[]{
    return new Array().concat(...itens);
}
const numArray = concatenaArray([1,5], [3]);
const strArray = concatenaArray(["Ana", "júlia"], ["Teresa"]);

numArray.push("any x number");

console.log(numArray);
console.log(strArray);







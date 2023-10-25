function somar(x: number, y:number): number{
    return x + y;
}

function addOla(nome: string):string{
    return ` Olá ${nome}`;
}

function fazerLigacao(phone: number | string) : number | string{
    return phone;
}

let soma: number = somar(4,7);

console.log(soma);
console.log(addOla("Ana"));
console.log(fazerLigacao("alô"));
console.log(fazerLigacao(5));

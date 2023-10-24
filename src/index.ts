type Heroi ={
    nome: string;
    vulgo: string
}
 function imprimirObjetos(pessoa: Heroi){
    console.log(pessoa);
 }

 imprimirObjetos({
    nome: "Bruce",
    vulgo: "Batman"
 })

console.log("Olá mundo!")
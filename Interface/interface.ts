//Interfaces: (type x interface)

//type - utilizado para tipar constantes/variáveis
type robo ={
    //readonly: não permite que os atributos marcados sejam alterados
    readonly id: number, //São aceitos os parâmetros --> number | string
    nome: string
};

//Interface - normalmente utilizado em classes
interface robo2{
    readonly id: number, //São aceitos os parâmetros --> number | string
    nome: string

    digaOla(): string;
}

const bot: robo = {
    id:1, 
    nome: "Ameca"
}

const bot2: robo2 = {
    id: 2,
    nome: "Ameca",
    digaOla(): string {
        return "Olá";
    }
}
//Não é permitido por conta do readonly
console.log(bot);
console.log(bot2);

class Robos implements robo2{

    id: number;
    nome: string;

    constructor( id:number, nome: string){
        this.id = id;
        this.nome = nome;
    }

    digaOla(): string{
        return `Olá ${this.nome}`;
    }
    
}
const r = new Robos(1, "Alcântara");
console.log(r);
console.log(r.digaOla());



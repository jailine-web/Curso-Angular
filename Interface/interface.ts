//Interfaces: (type x interface)

//type - utilizado para tipar objetos
type robo ={
    //readonly: não permite que os atributos marcados sejam alterados
    readonly id: number, //São aceitos os parâmetros --> number | string
    nome: string
};

//Interface - normalmente utilizado em classes
interface robo2{
    readonly id: number, //São aceitos os parâmetros --> number | string
    nome: string
}

const bot: robo = {
    id:1, 
    nome: "Ameca"
}

const bot2: robo2 = {
    id:2,
    nome: "Ameca"
}
//Não é permitido por conta do readonly
console.log(bot.id=2);

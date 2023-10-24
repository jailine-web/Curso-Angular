type Hero = {
    nome: string;
    vulgo: string;
    telefone: number;
}

function ligarPara(hero: Hero) : string{
    return "Ligando para: "+hero.telefone;
}
//Caso uma variável seja subtraida da para ver o erro em tempo de desenvolvimento
ligarPara({
    nome: "Steve",
    vulgo: "Capitão América",
    telefone: 1199999087,
})

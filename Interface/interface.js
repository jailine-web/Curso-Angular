//Interfaces: (type x interface)
var bot = {
    id: 1,
    nome: "Ameca"
};
var bot2 = {
    id: 2,
    nome: "Ameca",
    digaOla: function () {
        return "Olá";
    }
};
//Não é permitido por conta do readonly
console.log(bot);
console.log(bot2);
var Robos = /** @class */ (function () {
    function Robos(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    Robos.prototype.digaOla = function () {
        return "Ol\u00E1 ".concat(this.nome);
    };
    return Robos;
}());
var r = new Robos(1, "Alcântara");
console.log(r);
console.log(r.digaOla());

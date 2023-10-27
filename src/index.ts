//Decorators
function ExibirQuemChamou(target: any){
    console.log(target);
}

@ExibirQuemChamou
class Funcionario{

}
@ExibirQuemChamou
class Empregador{

}



//Sintaxe

function primeiraFuncao(){
    return new Promise((resolve) => 
    setTimeout(() =>{
        console.log('Esperou isso aqui');
        resolve()
    }, 1000)
    )
}

function segundaFuncao(){
    console.log('Iniciou');

    primeiraFuncao();

    console.log('Terminou')
}
segundaFuncao();
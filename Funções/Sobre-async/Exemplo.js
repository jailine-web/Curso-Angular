//Sintaxe

function primeiraFuncao(){
    return new Promise((resolve) => 
    setTimeout(() =>{
        console.log('Esperou isso aqui');
        resolve()
    }, 1000)
    )
}

async function segundaFuncao(){
    console.log('Iniciou');

     await primeiraFuncao();

    console.log('Terminou')
}
segundaFuncao();
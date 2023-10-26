/**
 * 
 * Exemplo e explicação do: Matheus Battisti - 
 * hora de codar
 */

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

/**
 * Exemplo prático
 */

function getUser(cep){

    //Acessando API externa via fetch
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((data) => data.json())
    .catch((err) => console.log(err))
}

async function mostrarNomeDoUsuario(cep){

    const user = await getUser(cep);
    
   console.log("Informações do cep: ", user);
    
}

mostrarNomeDoUsuario("01001-000");




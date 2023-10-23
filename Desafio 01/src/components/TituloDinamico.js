class TituloDinamico extends HTMLElement{

    constructor(){
        super();

        const arvore = this.attachShadow({mode: "open"});

        //Base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = "Felipe";
        //Estilizar o component
        const style = document.createElement("style");
        style.textContent = `

            h1{
                color: red;
            }`;

        //Enviar para a shadow
        arvore.appendChild(componentRoot);
        arvore.appendChild(style);
    } 
}

//Define o seletor do component
customElements.define('titulo-dinamico', TituloDinamico);
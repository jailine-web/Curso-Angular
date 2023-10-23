class CardNews extends HTMLElement{

    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "cardLeft")
        
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "cardRight")

        const autor = document.createElement("span");
        const titulo = document.createElement("a");
        const conteudo = document.createElement("p");

        const imagem = document.createElement("img");

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        cardLeft.appendChild(autor);
        cardLeft.appendChild(titulo);
        cardLeft.appendChild(conteudo);

        cardRight.appendChild(imagem);

        return componentRoot;
    }

    styles(){

    }
}

customElements.define("card-news", CardNews);
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
        autor.textContent = "Por: " + (this.getAttribute("autor") || "Anônimo");

        const titulo = document.createElement("a");
        titulo.textContent = this.getAttribute("titulo");
        titulo.href = this.getAttribute("url-titulo");

        const conteudo = document.createElement("p");
        conteudo.textContent = this.getAttribute("conteudo");

        const imagem = document.createElement("img");
        imagem.src = this.getAttribute("foto") || "assets/foto padrao.jpg";
        imagem.alt = "Foto do Darth Vader"

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
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
        const style = document.createElement("style");
        style.textContent =
        `
        h1{
            margin: 20px;
        }
        .container{
            margin: 18px;
        }
        .card {
            width: 850px;
            border: 1px solid gray;
            display: flex;
            padding: 3px;
            margin: 18px;
            flex-direction: row;
            margin-left: 23px;
            box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            justify-content: space-between;
           
        }
        
        .cardLeft > span{
            font-weight: 400;
        }
        
        .cardLeft{
            display: flex;
            flex-direction: column;
            justify-content: center; 
            padding-left: 10px; 
        }
        
        .cardLeft > a{
            margin-top: 15px;
            font-size: 30px;
            color: black;
            text-decoration: none;
            font-weight: 500;
        }
        .cardLeft > p{
            color: rgb(83, 83, 83);
        }
        .cardRight{
            padding-right: 2px;
            padding-top: 2px;
        }
        img{
            width: 275px;
        }`;
        return style;
    }
}

customElements.define("card-news", CardNews);
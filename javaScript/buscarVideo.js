import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const mensagemErro = document.querySelector("[data-erro]");
    mensagemErro.innerHTML = "";    

    const dadosPesquisados = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosPesquisados);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if(busca.length == 0) {
        mensagemErro.innerHTML =
     `<h1 class="alinhar">
        <span class="material-symbols-outlined">error</span>
        <p>Não existem vídeos com esse termo.<p>
     </h1>`;
    }
}

const botaoDePesquisa = document.querySelector("[data-botao_pesquisa]");

botaoDePesquisa.addEventListener("click", (evento) => buscarVideo(evento));
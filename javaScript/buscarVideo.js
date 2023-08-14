import { conectaApi } from "./conectaApi.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosPesquisados = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosPesquisados);

    console.log(busca);
}

const botaoDePesquisa = document.querySelector("[data-botao_pesquisa]");

botaoDePesquisa.addEventListener("click", (evento) => buscarVideo(evento));
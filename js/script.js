//-------Ativar links do menu---------
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if(url.includes(href)) {
    link.classList.add('ativo');
  };
}

links.forEach(ativarLink)

//-------Ativar itens do orcamento-------
const parametros =new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if(elemento){
    elemento.checked = true;
  }
  console.log(elemento);
}

parametros.forEach(ativarProduto);

//---------Perguntas Frequentes---------
const perguntas = document.querySelectorAll('.perguntas button'); //Item que quero selecionar

//O que vai ocorrer depois de clicar
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls")//pegar o id que está no aria-controls = id
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");//adiciona a classe "ativa"
  const ativa = resposta.classList.contains("ativa"); // Existe a classe ativa?
  pergunta.setAttribute("aria-expanded", ativa);//Mudando o que está false para true
  
}
//Ação para o botão
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);//evento de click
}
perguntas.forEach(eventosPerguntas); //qual evento eu quero selecionar

//--------Galeria de Bicicletas----------
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
  console.log(media);
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

//------Animação-----
if (window.SimpleAnime) {
  new SimpleAnime();
}
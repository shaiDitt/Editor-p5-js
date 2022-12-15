// tudo relacionado as imagens e carregamento

let imagemEstrada;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemAtor;
let imagemVidas;

let somColidiu;
let somPontos;
let somTrilha;

function preload(){
  imagemEstrada = loadImage ("imagens/estrada.png");
  imagemCarro1= loadImage ("imagens/carro-1.png");
  imagemCarro2= loadImage ("imagens/carro-2.png");
  imagemCarro3= loadImage ("imagens/carro-3.png");
  imagemCarros = [imagemCarro1,imagemCarro2,imagemCarro3,imagemCarro1,imagemCarro2,imagemCarro3];
  
  imagemAtor = loadImage ("imagens/ator-1.png");
  
  imagemVida1 = loadImage("imagens/vida.png")
  imagemVida2 = loadImage("imagens/vida.png")
  imagemVida3 = loadImage("imagens/vida.png")
  
  somColidiu = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
  somTrilha = loadSound("sons/trilha.mp3");
  
}
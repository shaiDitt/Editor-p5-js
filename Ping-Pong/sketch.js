//variáveis bola
let xBola=300;
let yBola=200;
let di=20;
let r=di/2;

//velocidade bola
vxBola=5
vyBola=5

//raquete1
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 90;

//Oponente
let xOponente = 585;
let yOponente = 150;
let wOponente = 10;
let hOponente = 90;

//velocidade oponente
let vyOponente;
let chanceDeErrar=0;

//placar
let meusPontos = 0;
let oponentePontos = 0;

//som
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
 trilha.loop();
}

function draw() {
  background(0);
  bola();
  posicaobola();
  borda ();
  raquete (xRaquete,yRaquete);
  moveRaquete();
  choqueRaquete();
  raquete (xOponente, yOponente);
  oponenteJoga();
  choqueOponente();
  placar();
  pontuacao();
  //voceOponente();
  calculaChanceDeErrar();
}
  
  function bola (){
    circle(xBola,yBola,di)
  }

  function posicaobola(){
  xBola +=vxBola
  yBola +=vyBola
  }
  
  function borda (){
  if (xBola+r>600 || xBola-r<0){
    vxBola *=-1;
  }
  if (yBola+r >400 || yBola-r<0){
    vyBola *= -1
  } 
  }

function raquete (x,y){
  rect (x, y, wRaquete, hRaquete);
}

function moveRaquete (){
  if (keyIsDown (DOWN_ARROW)){
    yRaquete +=5;
  }
  
  if (keyIsDown (UP_ARROW)){
    yRaquete -=5;
  }
}

function choqueRaquete(){
  if (xBola-r<xRaquete+wRaquete && yBola-r<yRaquete+hRaquete && yBola+r > yRaquete){
    vxBola *=-1;
    raquetada.play();
  } 
}


function oponenteJoga(){
  vyOponente = yBola - yOponente - hRaquete / 2 - 30;
  yOponente += vyOponente+chanceDeErrar;
  
}

function calculaChanceDeErrar (){
  if (oponentePontos>=meusPontos){
    chanceDeErrar +=300;
    if (chanceDeErrar >=39){
      chanceDeErrar = 40}
  
    }else {
      chanceDeErrar -=1
      if (chanceDeErrar<= 35){
        chanceDeErrar = 35}
      }
    }


function choqueOponente(){
  if (xBola+r>xOponente && yBola-r<yOponente+hOponente && yBola+r > yOponente){
    vxBola *=-1;
    raquetada.play();
  } 
}

function pontuacao(){
    if (xBola-r<-1){
    oponentePontos +=1
    ponto.play();
  }
  if (xBola+r>601){
    meusPontos +=1
    ponto.play();
  }
  }

function placar(){
  textSize(18);
  textAlign(CENTER);
  stroke(255);
  fill (color(255,140,0));
  rect(240,9,40,20);
  fill(255);
  text (meusPontos, 260, 25);
  fill (color(255,140,0));
  rect(320,9,40,20);
  fill(255);
  text(oponentePontos,340,25);
  
}

function voceOponente(){
   if (keyIsDown (87)){
    yOponente -=5;
  }
  
  if (keyIsDown (83)){
    yOponente +=5;
  }
  
}

 
  
let xAtor=90;
let yAtor=366;
let hit=false;
let pontos=0;
let xVidas=[410,440,470];


function mostraAtor(){
  image(imagemAtor, xAtor,yAtor, 30,30)
  }

function mostraAlgo(){
  circle (30, 30,30)
  
  
}

function moveAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -=3; 
  }
  if (keyIsDown(DOWN_ARROW)){
    if(yAtor<386){
    yAtor +=3; 
    } 
  }
}



function mostraVidas(){
  image (imagemVida1,xVidas[0],7,20,20)
  image (imagemVida2,xVidas[1],7,20,20)
  image (imagemVida3,xVidas[2],7,20,20)
}


function verificaColisao(){
  for (let i=0; i<imagemCarros.length;i++){
   hit= collideRectCircle(xCarros[i],yCarros[i],50,40,xAtor,yAtor,20);
    if (hit){
      houveColisao();
      somColidiu.play();
      if((xVidas[0]=410) && (xVidas[1]=440) && (xVidas[2]=470)){
         xVidas[0]=600;

         }
      }     
}  
}

//function vida1existe(){
  //xVidas[0]=410;
  


function houveColisao(){
  yAtor=366;
}

function incluiPontos(){
  textSize (21);
  textAlign(CENTER);
  fill (color(255,240,0));
  text (pontos,390 ,24);
}

function marcaPontos(){
  if (yAtor<5){
    somPontos.play();
    pontos+=1;
    yAtor=366;
  } 
}
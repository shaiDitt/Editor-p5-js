let xCarros=[600,600,600,600,600,600];
let yCarros=[40,96,150,210, 265,315];
let vCarros=[2,2.5,3,5,3.7,2.2];




function mostraCarro(){
    for (let i=0; i<imagemCarros.length; i++){
    image (imagemCarros[i],xCarros[i],yCarros[i],50,40);
    }
  }

function moveCarro(){
  for (let i=0; i<imagemCarros.length; i++){
  xCarros[i] -=vCarros[i];
  }
}
  
   
function voltaCarro(){
  for (let i=0; i<imagemCarros.length; i++){
    if (xCarros[i]<-50){
    xCarros[i]=600
    }
  }
}
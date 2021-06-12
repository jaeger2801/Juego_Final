//escenarios
let mapa1;
let mapa2;
let pantalla;
//personajes
let jugador;
let jugador2;
let enemigo;
let enemigo2;
let enemigo3;
//ajustes
let ancho;
let xPos;
let yPos;
let pCol;
let pFil;

function setup() {
  createCanvas(1000, 400);
  pantalla = 3;
  //escenarios
  mapa1 = new Terreno2D1();
  mapa1.arregloEscaque();
  mapa2 = new Terreno2();
  mapa2.arregloEscaque2();
  
  //personajes
  jugador = new Player(0,0);
  jugador2 = new Player2(0,0);
  enemigo = new Enemy(2,17);
  enemigo2 = new Enemy2(2,6);
  //Nivel 2
  enemigo3 = new Enemy3(6,9);
  //ajustes
  ancho = 20;
}

function draw() {
  background(20); 
  
  mapa1.mostrar();
  
  

  switch(pantalla){
      case 0:
          //espacio para poner la imagen inicial del juego
          noStroke();
          fill(255,0,255);
          rect(0,0,1000,400);

          fill(0);
          textSize(60);
          text("Aqui va el titulo del juego", 170, 150);
          //boton para seguir
          fill(0);
          rect(330,250,300,40);



          break;
//---------------------------------------------------------------------------------------
          case 1:
           background(242,159,5);
           noStroke();
	        fill(255);
	        rect(300, 250, ancho+5, 30, 8);
	
	
	if(frameCount%60 == 0) {
		ancho +=40;
		
		if(ancho>=340) {
			pantalla = 3;
			ancho = 0;
		}
	}
            break;
    case 2:
        
      mapa1.personalizarParedes(0);
      jugador.mostrarProtagonista(0,0);
      enemigo.show(3,0);
      enemigo.move(mapa1);
      enemigo2.show(2,6);
         enemigo2.move(mapa1);
      
      AtaqueEnemigo();
      AtaqueEnemigo2();

      
      /*for(let i = 0; i < enemigo.length; i++){
          enemigo[i].mostrarEnemigo();
          enemigo[i].moveEnemy(mapa1);
      }*/
      break;
//-------------------------------------------------------------
     case 3:
         mapa1.personalizarParedes2(0);
         jugador.mostrarProtagonista(0,0);
         enemigo3.show(6,9);
         enemigo3.move(mapa1);
         

      AtaqueEnemigo3();
         break;
  }
}
function keyPressed() {
  switch (key) {
      case 'a': // izquierda
          if (jugador.getPcol() - 1 >= 0) {
              
              if (mapa1.getLocacion(jugador.getPfil(), jugador.getPcol() - 1) === 0) {
                  jugador.setPcol(jugador.getPcol() - 1);
              
              }
          }
          break;
      case 'd': // derecha
          if (jugador.getPcol() + 1 < 20) {
              if (mapa1.getLocacion(jugador.getPfil(), jugador.getPcol() + 1) === 0) {
                  jugador.setPcol(jugador.getPcol() + 1);
                  
              }
          }
          break;
      case 'w': // arriba
          if (jugador.getPfil() - 1 >= 0) {
              if (mapa1.getLocacion(jugador.getPfil() - 1, jugador.getPcol()) === 0) {
                  jugador.setPfil(jugador.getPfil() - 1);
                  
              }
          }
          break;
      case 's': // abajo
          if (jugador.getPfil() + 1 < 20) {
              if (mapa1.getLocacion(jugador.getPfil() + 1, jugador.getPcol()) === 0) {
                  jugador.setPfil(jugador.getPfil() + 1);
                  console.log("se mueves POR FIIIIN :'v ");
              }
          }
          //------------------------------------------------------------------
          
          break;
          
  }
  
  function mousePressed(){
      switch(pantalla){
          case 0:
              //rect(330,250,300,40);
              if(mouseX > 330 && mouseX < 630 && mouseY > 250 && mouseY < 290){
                console.log("se cambió de pantalla");
                  pantalla = 1;    
              }
              break;
      }
      
  }
  jugador.updateLocation();
  
}
//aqui vamos a configurar el ataque del enemigo 1 que está en el nivel 1
function AtaqueEnemigo() {
    if (dist(jugador.getX(), jugador.getY(), enemigo.getX(), enemigo.getY()) < 5) {
        
        jugador.reset();
        enemigo.init();
        console.log("se la comió");
    }
    }
////aqui vamos a configurar el ataque del enemigo 2 que está en el nivel 1
function AtaqueEnemigo2() {
    if (dist(jugador.getX(), jugador.getY(), enemigo2.getX(), enemigo2.getY()) < 5) {
        
        jugador.reset();
        enemigo2.init();
        console.log("se la comió");
    }
    }

////aqui vamos a configurar el ataque del enemigo 2 que está en el nivel 1
function AtaqueEnemigo3() {
    if (dist(jugador.getX(), jugador.getY(), enemigo3.getX(), enemigo3.getY()) < 5) {
        
        jugador.reset();
        enemigo3.init();
        console.log("se la comió");
    }
    }


  

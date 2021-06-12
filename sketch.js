//escenarios
let mapa1;
let mapa2;
let pantalla;
//personajes
let jugador;
let enemigo;
//ajustes
let ancho;

function setup() {
  createCanvas(1000, 400);
  pantalla = 2;
  //escenarios
  mapa1 = new Terreno2D1();
  mapa1.arregloEscaque();
  mapa2 = new Terreno2();
  mapa2.arregloEscaque2();
  
  //personajes
  jugador = new Player(0,0);
  enemigo = new Enemy(2,17);
  enemigo2 = new Enemy2(2,6);
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
      /*for(let i = 0; i < enemigo.length; i++){
          enemigo[i].mostrarEnemigo();
          enemigo[i].moveEnemy(mapa1);
      }*/
      break;
//-------------------------------------------------------------
     case 3:
         mapa2.mostrar2();
         mapa2.personalizarParedes2(0);
         jugador.mostrarProtagonista(0,0);
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
//aqui vamos a configurar el ataque de los enemigos
function AtaqueEnemigo() {
    if (dist(jugador.getX(), jugador.getY(), enemigo.getX(), enemigo.getY()) < 10) {
        jugador.pvida();
        jugador.reset();
        enemigo.init();
        console.log("se la comió");
    }
}
  

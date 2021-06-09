//escenarios
let mapa1;
let pantalla;
//personajes
let jugador;
let enemigo;

function setup() {
  createCanvas(1000, 400);
  pantalla = 0;
  //escenarios
  mapa1 = new Terreno2D1();
  mapa1.arregloEscaque();
  //personajes
  jugador = new Player(0,0);
  enemigo = new Enemy(2,17);
  enemigo2 = new Enemy2(2,6);
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

          fill(0);
          rect(330,250,300,40);
          break;
    case 1:
      mapa1.personalizarParedes(0);
      jugador.mostrarProtagonista(0,0);
      enemigo.show(3,0);
      enemigo.move(mapa1);
      enemigo2.show(2,6);
      enemigo2.move(mapa1);
      /*for(let i = 0; i < enemigo.length; i++){
          enemigo[i].mostrarEnemigo();
          enemigo[i].moveEnemy(mapa1);
      }*/
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
          break;
  }
  }

  function MousePressed(){
      

  }
  jugador.updateLocation();
  //verifyItem();
  console.log(jugador.getVida());


   verifyEnemy() 
   {
    if (dist(Player.getX(), Player.getY(), Enemy.getX(), Enemy.getY()) < 5) {
        Player.pvida();
        Player.reset();
        Enemy.init();
    }
}


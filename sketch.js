  //escenarios
let mapa1;
let mapa2;
let pantalla;
//Moneda
let moneda;
//personajes
let jugador;
let jugador2;
let enemigo;
let enemigo2;
//---------------------
let enemigo3;
let enemigo4;
//---------------------
let enemigo5;
let enemigo6;
let enemigo7;
//---------------
let enemigo8;
let enemigo9;
let enemigo10;
let enemigo11;
//---------------------
let enemigo12;
let enemigo13;
let enemigo14;
let enemigo15;
let enemigo16;
let enemigo17;
//Cohete
let cohete;
let cohete2;
//ajustes
let ancho;
let xPos;
let yPos;
let pCol;
let pFil;
//Imagenes para el fondo
let ImgInicio;
let ImgCarga;
let ImgFondo1;
let ImgFondo2;
let ImgFondo3;
let ImgFondo4;
let ImgFondo5;


function preload(){
    //Imagenes del personaje
    //Imagenes fondos
    ImgCarga = new loadImage("data/IntroMilkyCargando.png")
    ImgInicio = new loadImage("data/IntroMilkyWar.png")
    ImgFondo1 = new loadImage("data/MapaNeptuno.png")
    ImgFondo2 = new loadImage("data/MapaUrano.png")
    ImgFondo3 = new loadImage("data/MapaSaturno.png")
    ImgFondo4 = new loadImage("data/MapaJupiter.png")
    ImgFondo5 = new loadImage("data/MapaMarte.png")

}

function setup() {
  createCanvas(1000, 400);
  pantalla = 0;
  
  
  
  //escenarios
  mapa1 = new Terreno2D1();
  mapa1.arregloEscaque();
  //Moneda
  moneda = new Moneda(2,1);
  //personajes
  jugador = new Player(0,0);
  jugador2 = new Player2(0,0);
  //Nivel1
  enemigo = new Enemy(2,17);
  enemigo2 = new Enemy2(2,6);
  //Nivel 2
  enemigo3 = new Enemy3(6,9);
  enemigo4 = new Enemy4(8,3);
  //Nivel 3
  enemigo5 = new Enemy5(6,9);
  enemigo6 = new Enemy6(6,9);
  enemigo7 = new Enemy7(6,9);
  //Nivel4
  enemigo8 = new Enemy8(6,11);
  enemigo9 = new Enemy9(5,8);
  enemigo10 = new Enemy10(2,8);
  enemigo11 = new Enemy11(7,4);
  //Nivel 5
  enemigo12 = new Enemy12(2,14);
  enemigo13 = new Enemy13(4,10);
  enemigo14 = new Enemy14(4,9);
  enemigo15 = new Enemy15(9,4);
  enemigo16 = new Enemy16(4,8);
  enemigo17 = new Enemy17(4,6);
  //cohete
  cohete = new Cohete(9,17);
  cohete2 = new Cohete2(1,15);

  //ajustes
  ancho = 20;
}

function draw() {
  background(20); 
  
  mapa1.mostrar();
  

  switch(pantalla){
      case 0:
        fill(0, 0, 0,);
        rect(773,300,170,60);
        imageMode(CORNER);
        image(ImgInicio, 0, 0, 1000, 400);
          
          break;
//---------------------------------------------------------------------------------------
          case 1:
              imageMode(CORNER);
              image(ImgCarga, 0, 0, 1000, 400);
          
	        fill(255);
            noStroke();
	        rect(300, 330, ancho+10, 10, 8);
	
	
	if(frameCount%50 == 0) {
		ancho +=40;
		
		if(ancho>=340) {
			pantalla = 2;
			ancho = 0;
		}
	}
            break;
 //-----------------------------------------------------
 //Primer Nivel Neptuno
    case 2:
       //Neptuno 
      imageMode(CORNER);
      image(ImgFondo1, 0, 0, 800, 400);
      mapa1.personalizarParedes(0);
      cohete.show(1,1);
      jugador.mostrarProtagonista(0,0);
      enemigo.show(3,0);
      enemigo.move(mapa1);
      enemigo2.show(2,6);
      enemigo2.move(mapa1);
      
 //llamamos la funcion del ataque del enemigo para hacer que el nivel se reinicie     
      AtaqueEnemigo();
      AtaqueEnemigo2();

//Llegada al cohete para pasar al siguente nivel
      mapa1.LlegadaCohete();

      break;
//-------------------------------------------------------------
//Nivel 2
     case 3: //Urano
     imageMode(CORNER);
     image(ImgFondo2, 0, 0, 800, 400);
     
         mapa1.personalizarParedes2(1);
         cohete.show(1,1);
         jugador.mostrarProtagonista(0,0);
         enemigo3.show(6,9);
         enemigo3.move(mapa1);
         enemigo4.show(6,9);
         enemigo4.move(mapa1);
         
//llamamos la funcion del ataque del enemigo para hacer que el nivel se reinicie
      AtaqueEnemigo3();
      AtaqueEnemigo4();

      //Llegada al cohete para pasar al siguente nivel
      mapa1.LlegadaCohete2();
         break;
//---------------------------------------------------------------
//Nivel 3
case 4://Saturno
imageMode(CORNER);
image(ImgFondo3, 0, 0, 800, 400);
    mapa1.personalizarParedes3(2);
    cohete.show(1,1);
    jugador.mostrarProtagonista(0,0);
    enemigo5.show(6,9);
    enemigo5.move(mapa1);
    enemigo6.show(6,9);
    enemigo6.move(mapa1);
    enemigo7.show(6,9);
    enemigo7.move(mapa1);

    

    //Enemigos de Saturno
    AtaqueEnemigo5();
    AtaqueEnemigo6();
    AtaqueEnemigo7();

    //Llegada al cohete para pasar al siguente nivel
    mapa1.LlegadaCohete3();

    break;
    //-----------------------------------------------------------
    //Nivel 4
    case 5://Jupiter
   imageMode(CORNER);
   image(ImgFondo4, 0, 0, 800, 400);
    mapa1.personalizarParedes4(3);
    cohete2.show(1,1);
    jugador.mostrarProtagonista(1,0);
    enemigo8.show(6,9);
    enemigo8.move(mapa1);
    enemigo9.show(9,9);
    enemigo9.move(mapa1)
    enemigo10.show(6,9);
    enemigo10.move(mapa1);
    enemigo11.show(6,9);
    enemigo11.move(mapa1);

    AtaqueEnemigo8();
    AtaqueEnemigo9();
    AtaqueEnemigo10();
    AtaqueEnemigo11();
    //Llegada al cohete para pasar al siguente nivel
    mapa1.LlegadaCohete4();

        break;
 //----------------------------------------------------------------
 //Nivel5
 case 6:
    imageMode(CORNER);
    image(ImgFondo5, 0, 0, 800, 400);
     mapa1.personalizarParedes5(4);
     cohete2.show(1,1);
     jugador.mostrarProtagonista(0,0);
     enemigo12.show(6,9);
     enemigo12.move(mapa1);
     enemigo13.show(3,9);
     enemigo13.move(mapa1)
     enemigo14.show(6,9);
     enemigo14.move(mapa1);
     enemigo15.show(6,9);
     enemigo15.move(mapa1);
     enemigo16.show(6,9);
     enemigo16.move(mapa1);
     enemigo17.show(6,9);
     enemigo17.move(mapa1);

     AtaqueEnemigo12();
     AtaqueEnemigo13();
     AtaqueEnemigo14();
     AtaqueEnemigo15();
     AtaqueEnemigo16();
     AtaqueEnemigo17();

     mapa1.LlegadaCohete5();
     
     break;
     case 7:
         background(20);
         fill(255);
         rect(1000, 400, 0, 0);

         fill(255);
         textSize(30);
         text("Gracias por jugar, eres genial :D", 250, 200);

         fill(255);
         textSize(20);
         text("Jugar de nuevo", 370, 270);

         noFill();
         stroke(255);
         strokeWeight(6);
         rect(300, 250, 330, 30, 6);

         

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
  jugador.updateLocation();
}
  
  function mousePressed(){
      switch(pantalla){
          case 0:
              // rect(773,300,170,60);
              if(mouseX > 773 && mouseX < 943 && mouseY > 300 && mouseY < 360){
                console.log("se cambió de pantalla");
                  pantalla = 1;    
              }
              break;
              case 2:
                //rect(820, 350, 160,20,7);
                if(mouseX > 820 && mouseX < 980 && mouseY > 350 && mouseY < 370 && pantalla === 2){
                    console.log(pantalla);
                      pantalla = 3;    
                  }

                  break;
                  case 7:
                      //rect(300, 250, 330, 30, 6);
                      if(mouseX > 300 && mouseX < 630 && mouseY > 250 && mouseY < 280 && pantalla === 7){
                        console.log(pantalla);
                          pantalla = 0; 
                      break;
      }
      
  }
}

  
  


//Funciones de Vida, moneda y respawn de Neptuno
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

    //Funciones de Vida, moneda y respawn de Urano
////aqui vamos a configurar el ataque del enemigo 3 que está en el nivel 2
function AtaqueEnemigo3() {
    if (dist(jugador.getX(), jugador.getY(), enemigo3.getX(), enemigo3.getY()) < 5) {
        
        jugador.reset();
        enemigo3.init();
        console.log("se la comió");
    }
    }

    ////aqui vamos a configurar el ataque del enemigo 4 que está en el nivel 2
function AtaqueEnemigo4() {
    if (dist(jugador.getX(), jugador.getY(), enemigo4.getX(), enemigo4.getY()) < 5) {
        
        jugador.reset();
        enemigo4.init();
        console.log("se la comió");
    }
    }

    //Funciones de Vida, moneda y respawn de Saturno
    function AtaqueEnemigo5() {
        if (dist(jugador.getX(), jugador.getY(), enemigo5.getX(), enemigo5.getY()) < 5) {
            
            jugador.reset();
            enemigo5.init();
            console.log("se la comió");
        }
        }
        function AtaqueEnemigo6() {
            if (dist(jugador.getX(), jugador.getY(), enemigo6.getX(), enemigo6.getY()) < 5) {
                
                jugador.reset();
                enemigo6.init();
                console.log("se la comió");
            }
            }
            function AtaqueEnemigo7() {
                if (dist(jugador.getX(), jugador.getY(), enemigo7.getX(), enemigo7.getY()) < 5) {
                    
                    jugador.reset();
                    enemigo7.init();
                    console.log("se la comió");
                }
                }
        function AtaqueEnemigo8() {
            if (dist(jugador.getX(), jugador.getY(), enemigo8.getX(), enemigo8.getY()) < 5) {
                
                jugador.reset();
                enemigo8.init();
                console.log("se la comió");
            }
            }
            function AtaqueEnemigo9() {
                if (dist(jugador.getX(), jugador.getY(), enemigo9.getX(), enemigo9.getY()) < 5) {
                    
                    jugador.reset();
                    enemigo9.init();
                    console.log("se la comió");
                }
                }
                function AtaqueEnemigo10() {
                    if (dist(jugador.getX(), jugador.getY(), enemigo10.getX(), enemigo10.getY()) < 5) {
                        
                        jugador.reset();
                        enemigo10.init();
                        console.log("se la comió");
                    }
                    }
                    function AtaqueEnemigo11() {
                        if (dist(jugador.getX(), jugador.getY(), enemigo11.getX(), enemigo11.getY()) < 5) {
                            
                            jugador.reset();
                            enemigo11.init();
                            console.log("se la comió");
                        }
                        }
                        function AtaqueEnemigo12() {
                            if (dist(jugador.getX(), jugador.getY(), enemigo12.getX(), enemigo12.getY()) < 5) {
                                
                               jugador.reset();
                                enemigo12.init();
                                console.log("se la comió");
                            }
                            }
                            function AtaqueEnemigo13() {
                                if (dist(jugador.getX(), jugador.getY(), enemigo13.getX(), enemigo13.getY()) < 5) {
                                    
                                    jugador.reset();
                                    enemigo13.init();
                                    console.log("se la comió");
                                }
                                }
                                function AtaqueEnemigo14() {
                                    if (dist(jugador.getX(), jugador.getY(), enemigo14.getX(), enemigo14.getY()) < 5) {
                                        
                                        jugador.reset();
                                        enemigo14.init();
                                        console.log("se la comió");
                                    }
                                    }
                                    function AtaqueEnemigo15() {
                                        if (dist(jugador.getX(), jugador.getY(), enemigo15.getX(), enemigo15.getY()) < 5) {
                                            
                                            jugador.reset();
                                            enemigo15.init();
                                            console.log("se la comió");
                                        }
                                        }
                                        function AtaqueEnemigo16() {
                                            if (dist(jugador.getX(), jugador.getY(), enemigo16.getX(), enemigo16.getY()) < 5) {
                                                
                                                jugador.reset();
                                                enemigo16.init();
                                                console.log("se la comió");
                                            }
                                            }
                                            function AtaqueEnemigo17() {
                                                if (dist(jugador.getX(), jugador.getY(), enemigo17.getX(), enemigo17.getY()) < 5) {
                                                    
                                                    jugador.reset();
                                                    enemigo17.init();
                                                    console.log("se la comió");
                                                }
                                                }
  
      
                                                                                 
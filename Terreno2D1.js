
class Terreno2D1 {
    constructor(){
        this.escaque = [];
        this.escaque2 = [];
        
    }

    arregloEscaque() {
        //crear arreglo de arreglos
        for (let index = 0; index < 20; index++) {
            this.escaque.push(new Array(20));
        }
        //Asignar valores iniciales
        for (let fil = 0; fil < 20; fil++) {
            for (let col = 0; col < 20; col++) {
                this.escaque[fil][col] = 0;
            }
        }
}
arregloEscaque2() {
    //crear arreglo de arreglos
    for (let index = 0; index < 20; index++) {
        this.escaque2.push(new Array(20));
    }
    //Asignar valores iniciales
    for (let fil = 0; fil < 20; fil++) {
        for (let col = 0; col < 20; col++) {
            this.escaque2[fil][col] = 0;
        }
    }
}
//aqui se programan las paredes que tendrá el primer nivel (Neptuno)
personalizarParedes(Nivel1) { //Programacion del plano de Neptunos
    

    for (let fil = 0; fil < 20; fil++) {
        for (let col = 0; col < 20; col++) {

            switch (Nivel1){
                case 0:
                    // seleccionamos algunos [fila][col] --> y, x
            //triangulos de entrada arriba 1
            this.escaque[0][1] = 1;
            this.escaque[0][2] = 1;
            this.escaque[0][3] = 1;
            this.escaque[1][3] = 1;
            this.escaque[2][0] = 1;
            this.escaque[2][1] = 1;
            this.escaque[3][1] = 1;
            this.escaque[3][3] = 1;
            this.escaque[4][4] = 1;
            this.escaque[5][3] = 1;
            this.escaque[5][1] = 1;
            this.escaque[7][0] = 1;
            this.escaque[8][2] = 1;
            this.escaque[7][4] = 1;
            this.escaque[6][5] = 1;
            this.escaque[0][5] = 1;
            this.escaque[1][6] = 1;
            this.escaque[2][7] = 1;
            this.escaque[0][8] = 1;
            this.escaque[1][8] = 1;
            this.escaque[1][10] = 1;
            this.escaque[0][13] = 1;
            this.escaque[1][15] = 1;
            this.escaque[1][16] = 1;
            this.escaque[1][17] = 1;
            this.escaque[2][16] = 1;
            this.escaque[3][15] = 1;
            this.escaque[4][14] = 1;
            this.escaque[2][18] = 1;
            this.escaque[4][18] = 1;
            this.escaque[3][18] = 1;
            this.escaque[4][17] = 1;
            this.escaque[5][18] = 1;
            this.escaque[7][6] = 1;
            this.escaque[8][7] = 1;
            this.escaque[8][8] = 1;
            this.escaque[6][9] = 1;
            this.escaque[5][6] = 1;
            this.escaque[3][8] = 1;
            this.escaque[4][9] = 1;
            this.escaque[4][10] = 1;
            this.escaque[4][8] = 1;
            this.escaque[3][12] = 1;
            this.escaque[5][13] = 1;
            this.escaque[6][13] = 1;
            this.escaque[7][13] = 1;
            this.escaque[6][11] = 1;
            this.escaque[6][12] = 1;
            this.escaque[6][14] = 1;
            this.escaque[8][11] = 1;
            this.escaque[6][16] = 1;
            this.escaque[7][16] = 1;
            this.escaque[8][16] = 1;
            this.escaque[8][15] = 1;
            this.escaque[7][17] = 1;
            this.escaque[4][19] = 1;
            this.escaque[7][19] = 1;
            this.escaque[9][1] = 1;
            this.escaque[9][3] = 1;
            this.escaque[9][7] = 1;
            this.escaque[9][9] = 1;
            this.escaque[9][11] = 1;
            this.escaque[9][15] = 1;
            this.escaque[9][18] = 1;
                       
            //---------------
            
            //franja de abajo
            this.escaque[10][0] = 1;
            this.escaque[10][1] = 1;
            this.escaque[10][2] = 1;
            this.escaque[10][3] = 1;
            this.escaque[10][4] = 1;
            this.escaque[10][5] = 1;
            this.escaque[10][6] = 1;
            this.escaque[10][7] = 1;
            this.escaque[10][8] = 1;
            this.escaque[10][10] = 1;
            this.escaque[10][10] = 1;
            this.escaque[10][11] = 1;
            this.escaque[10][12] = 1;
            this.escaque[10][13] = 1;
            this.escaque[10][14] = 1;
            this.escaque[10][15] = 1;
            this.escaque[10][16] = 1;
            this.escaque[10][17] = 1;
            this.escaque[10][18] = 1;
            this.escaque[10][19] = 1;

                    break;
            }
        }
    }
}
//------------------------------------------------------
//aqui se programan las paredes que tendrá el segundo  nivel (Urano)
personalizarParedes2(Nivel2) { //Programacion del plano de Urano

    this.escaque = [];
    this.arregloEscaque();
    this.escaque2 = [];
    this.arregloEscaque2();

    for (let fil = 0; fil < 20; fil++) {
        for (let col = 0; col < 20; col++) {

            switch (Nivel2){
                case 1:
                    // seleccionamos algunos [fila][col] --> y, x
            //triangulos de entrada arriba 1
            
            //triangulo de abajo
            // seleccionamos algunos [fila][col] --> y, x
            //triangulos de entrada arriba 1
            this.escaque[0][1] = 1;
            this.escaque[0][2] = 1;
            this.escaque[0][3] = 1;
            this.escaque[1][2] = 1;
            this.escaque[2][0] = 1;
            this.escaque[4][1] = 1;
            this.escaque[6][1] = 1;
            this.escaque[7][1] = 1;
            this.escaque[7][0] = 1;

            
            this.escaque[4][3] = 1;
            this.escaque[5][4] = 1;
            this.escaque[6][3] = 1;

            this.escaque[2][4] = 1;
            this.escaque[3][5] = 1;
            //--------------- franja de arriba 2
            this.escaque[2][6] = 1;
            this.escaque[4][6] = 1;
            this.escaque[8][3] = 1;
            //--------------- franja de arriba 3
            
            
            this.escaque[2][16] = 1;
            //---------------
            
            this.escaque[7][16] = 1;
           
            
            //triangulo de abajo
            
            this.escaque[8][6] = 1;
            this.escaque[7][7] = 1;
            this.escaque[7][9] = 1;
            this.escaque[8][8] = 1;
            this.escaque[8][10] = 1;
            this.escaque[6][8] = 1;
            this.escaque[5][8] = 1;
            this.escaque[5][9] = 1;
            this.escaque[5][10] = 1;
            this.escaque[0][7] = 1;
            this.escaque[1][7] = 1;
            this.escaque[1][8] = 1;
            this.escaque[0][11] = 1;
            this.escaque[1][11] = 1;
            this.escaque[3][11] = 1;
            this.escaque[3][12] = 1;
            this.escaque[3][13] = 1;
            this.escaque[3][14] = 1;
            this.escaque[1][13] = 1;
            this.escaque[2][13] = 1;
            this.escaque[4][13] = 1;
            this.escaque[3][9] = 1;
            this.escaque[6][12] = 1;
            this.escaque[6][15] = 1;
            this.escaque[0][15] = 1;
            this.escaque[1][15] = 1;
            this.escaque[1][16] = 1;
            this.escaque[2][16] = 1;
            this.escaque[3][16] = 1;
            this.escaque[2][17] = 1;
            this.escaque[8][15] = 1;
            this.escaque[8][16] = 1;
            this.escaque[8][17] = 1;
            this.escaque[8][19] = 1;
            this.escaque[0][18] = 1;
            this.escaque[5][17] = 1;
            this.escaque[4][18] = 1;
            this.escaque[5][19] = 1;
            this.escaque[5][18] = 1;
            this.escaque[6][18] = 1;
            this.escaque[7][18] = 0;

            this.escaque[9][1] = 1;
            this.escaque[9][2] = 1;
            this.escaque[9][3] = 1;
            this.escaque[9][5] = 1;
            this.escaque[9][13] = 1;
            
            //franja de abajo
            this.escaque[10][0] = 1;
            this.escaque[10][1] = 1;
            this.escaque[10][2] = 1;
            this.escaque[10][3] = 1;
            this.escaque[10][4] = 1;
            this.escaque[10][5] = 1;
            this.escaque[10][6] = 1;
            this.escaque[10][7] = 1;
            this.escaque[10][8] = 1;
            this.escaque[10][10] = 1;
            this.escaque[10][10] = 1;
            this.escaque[10][11] = 1;
            this.escaque[10][12] = 1;
            this.escaque[10][13] = 1;
            this.escaque[10][14] = 1;
            this.escaque[10][15] = 1;
            this.escaque[10][16] = 1;
            this.escaque[10][17] = 1;
            this.escaque[10][18] = 1;
            this.escaque[10][19] = 1;

                    break;
            }
        }
    }
}

//aqui se programan las paredes que tendrá el segundo  nivel (Saturno)
personalizarParedes3(Nivel3) {//Programacion del plano de Saturno

    for (let fil = 0; fil < 20; fil++) {
        for (let col = 0; col < 20; col++) {

            switch (Nivel3){
                case 0:
                    // seleccionamos algunos [fila][col] --> y, x
//Primera linea
            this.escaque[0][1] = 1;
            this.escaque[0][2] = 1;
            this.escaque[0][3] = 1;
            this.escaque[0][5] = 1;
            this.escaque[0][6] = 1;
            this.escaque[0][7] = 1;
            this.escaque[0][8] = 1;
            this.escaque[0][10] = 1;
            this.escaque[0][11] = 1;
            this.escaque[0][13] = 1;
            this.escaque[0][19] = 1;
//segunda linea
            this.escaque[1][6] = 1;
            this.escaque[1][7] = 1;
            this.escaque[1][8] = 1;
            this.escaque[1][10] = 1;
            this.escaque[1][15] = 1;
            this.escaque[1][16] = 1;
            this.escaque[1][17] = 1;
            this.escaque[1][19] = 1;
//tercera linea
            this.escaque[2][0] = 1;
            this.escaque[2][1] = 1;
            this.escaque[2][7] = 1;
            this.escaque[2][16] = 1;
            this.escaque[2][17] = 1;
            this.escaque[2][19] = 1;

//Cuarta linea
            this.escaque[3][1] = 1;
            this.escaque[3][3] = 1;
            this.escaque[3][8] = 1;
            this.escaque[3][12] = 1;
            this.escaque[3][15] = 1;
//Quinta linea
            this.escaque[4][4] = 1;
            this.escaque[4][8] = 1;
            this.escaque[4][17] = 1;
            this.escaque[4][18] = 1;
//Sexta linea
            this.escaque[5][1] = 1;
            this.escaque[5][2] = 1;
            this.escaque[5][3] = 1;
            this.escaque[5][12] = 1;
            this.escaque[5][13] = 1;
            this.escaque[5][18] = 1;
//Septima Linea

            this.escaque[6][9] = 1;
            this.escaque[6][14] = 1;
            this.escaque[6][13] = 1;
//Octava lionea
            this.escaque[7][0] = 1;
            this.escaque[7][6] = 1;
            this.escaque[7][13] = 1;
            this.escaque[7][17] = 1;
            this.escaque[7][16] = 1;
//Novena linea
this.escaque[8][2] = 1;
this.escaque[8][7] = 1;
this.escaque[8][8] = 1;
this.escaque[8][11] = 1;
this.escaque[8][13] = 1;
this.escaque[8][15] = 1;
this.escaque[8][16] = 1;
//Decima linea
this.escaque[9][2] = 1;
this.escaque[9][1] = 1;
this.escaque[9][3] = 1;
this.escaque[9][7] = 1;
this.escaque[9][11] = 1;
this.escaque[9][18] = 1;
this.escaque[9][19] = 1;

          
           
            //franja de abajo
            this.escaque[10][0] = 1;
            this.escaque[10][1] = 1;
            this.escaque[10][2] = 1;
            this.escaque[10][3] = 1;
            this.escaque[10][4] = 1;
            this.escaque[10][5] = 1;
            this.escaque[10][6] = 1;
            this.escaque[10][7] = 1;
            this.escaque[10][8] = 1;
            this.escaque[10][10] = 1;
            this.escaque[10][10] = 1;
            this.escaque[10][11] = 1;
            this.escaque[10][12] = 1;
            this.escaque[10][13] = 1;
            this.escaque[10][14] = 1;
            this.escaque[10][15] = 1;
            this.escaque[10][16] = 1;
            this.escaque[10][17] = 1;
            this.escaque[10][18] = 1;
            this.escaque[10][19] = 1;

                    break;
            }
        }
    }
}

//aqui se programan las paredes que tendrá el cuarto nivel (jupiter)
personalizarParedes4(Nivel4) {//Programacion del plano de Jupiter

    for (let fil = 0; fil < 20; fil++) {
        for (let col = 0; col < 20; col++) {

            switch (Nivel4){
                case 0:
                    // seleccionamos algunos [fila][col] --> y, x
//Primera linea
            this.escaque[0][0] = 1;
            this.escaque[0][7] = 1;
            this.escaque[0][9] = 1;
            this.escaque[0][3] = 1;
            this.escaque[0][11] = 1;
            this.escaque[0][14] = 1;
            this.escaque[0][15] = 1;
            this.escaque[0][16] = 1;
            this.escaque[0][17] = 1;
//segunda linea
            this.escaque[1][2] = 1;
            this.escaque[1][3] = 1;
            this.escaque[1][5] = 1;
            this.escaque[1][7] = 1;
            this.escaque[1][10] = 1;
            this.escaque[1][11] = 1;
            this.escaque[1][14] = 1;
            this.escaque[1][16] = 1;
//tercera linea
            this.escaque[2][1] = 1;
            this.escaque[2][2] = 1;
            this.escaque[2][5] = 1;
            this.escaque[2][12] = 1;
            this.escaque[2][14] = 1;
            this.escaque[2][18] = 1;
            this.escaque[2][19] = 1;

//Cuarta linea
            this.escaque[3][4] = 1;
            this.escaque[3][5] = 1;
            this.escaque[3][9] = 1;
            this.escaque[3][14] = 1;
            this.escaque[3][16] = 1;
            this.escaque[3][19] = 1;
//Quinta linea
            this.escaque[4][0] = 1;
            this.escaque[4][5] = 1;
            this.escaque[4][6] = 1;
            this.escaque[4][12] = 1;
            this.escaque[4][15] = 1;
            this.escaque[4][16] = 1;
            this.escaque[4][17] = 1;
//Sexta linea
            this.escaque[5][1] = 1;
            this.escaque[5][0] = 1;
            this.escaque[5][10] = 1;
            this.escaque[5][14] = 1;
//Septima Linea
            this.escaque[6][3] = 1;
            this.escaque[6][6] = 1;
            this.escaque[6][10] = 1;
            this.escaque[6][15] = 1;
            this.escaque[6][17] = 1;
//Octava lionea
            this.escaque[7][1] = 1;
            this.escaque[7][2] = 1;
            this.escaque[7][9] = 1;
            this.escaque[7][11] = 1;
            this.escaque[7][17] = 1;
            this.escaque[7][18] = 1;
            this.escaque[7][19] = 1;
//Novena linea
this.escaque[8][2] = 1;
this.escaque[8][1] = 1;
this.escaque[8][3] = 1;
this.escaque[8][8] = 1;
this.escaque[8][10] = 1;
this.escaque[8][11] = 1;
this.escaque[8][15] = 1;
//Decima linea
this.escaque[9][5] = 1;
this.escaque[9][7] = 1;
this.escaque[9][8] = 1;
this.escaque[9][10] = 1;
this.escaque[9][11] = 1;
this.escaque[9][13] = 1;
this.escaque[9][15] = 1;
this.escaque[9][16] = 1;
this.escaque[9][17] = 1;

          
           
            //franja de abajo
            this.escaque[10][0] = 1;
            this.escaque[10][1] = 1;
            this.escaque[10][2] = 1;
            this.escaque[10][3] = 1;
            this.escaque[10][4] = 1;
            this.escaque[10][5] = 1;
            this.escaque[10][6] = 1;
            this.escaque[10][7] = 1;
            this.escaque[10][8] = 1;
            this.escaque[10][10] = 1;
            this.escaque[10][10] = 1;
            this.escaque[10][11] = 1;
            this.escaque[10][12] = 1;
            this.escaque[10][13] = 1;
            this.escaque[10][14] = 1;
            this.escaque[10][15] = 1;
            this.escaque[10][16] = 1;
            this.escaque[10][17] = 1;
            this.escaque[10][18] = 1;
            this.escaque[10][19] = 1;

                    break;
            }
        }
    }
}

//aqui se programan las paredes que tendrá el cuarto nivel (marte)
personalizarParedes5(Nivel5) {//Programacion del plano de marte

    for (let fil = 0; fil < 20; fil++) {
        for (let col = 0; col < 20; col++) {

            switch (Nivel5){
                case 0:
                    // seleccionamos algunos [fila][col] --> y, x
//Primera linea
            this.escaque[0][5] = 1;
            this.escaque[0][10] = 1;
            this.escaque[0][13] = 1;
            this.escaque[0][15] = 1;
            this.escaque[0][16] = 1;
            this.escaque[0][17] = 1;
//segunda linea
            this.escaque[1][1] = 1;
            this.escaque[1][2] = 1;
            this.escaque[1][3] = 1;
            this.escaque[1][8] = 1;
            this.escaque[1][10] = 1;
            this.escaque[1][12] = 1;
            this.escaque[1][15] = 1;
//tercera linea
            this.escaque[2][0] = 1;
            this.escaque[2][2] = 1;
            this.escaque[2][9] = 1;
            this.escaque[2][11] = 1;
            this.escaque[2][17] = 1;
            this.escaque[2][18] = 1;
//Cuarta linea
            this.escaque[3][0] = 1;
            this.escaque[3][3] = 1;
            this.escaque[3][6] = 1;
            this.escaque[3][10] = 1;
            this.escaque[3][15] = 1;
            this.escaque[3][17] = 1;
//Quinta linea
            this.escaque[4][1] = 1;
            this.escaque[4][0] = 1;
            this.escaque[4][8] = 1;
            this.escaque[4][9] = 1;
            this.escaque[4][10] = 1;
            this.escaque[4][14] = 1;
//Sexta linea
            this.escaque[5][0] = 1;
            this.escaque[5][5] = 1;
            this.escaque[5][12] = 1;
            this.escaque[5][15] = 1;
            this.escaque[5][17] = 1;
//Septima Linea
            this.escaque[6][2] = 1;
            this.escaque[6][4] = 1;
            this.escaque[6][5] = 1;
            this.escaque[6][6] = 1;
            this.escaque[6][7] = 1;
            this.escaque[6][9] = 1;
            this.escaque[6][13] = 1;
            
            this.escaque[6][19] = 1;
//Octava lionea
this.escaque[7][1] = 1;
            this.escaque[7][2] = 1;
            
            this.escaque[7][5] = 1;
            this.escaque[7][12] = 1;
            this.escaque[7][14] = 1;
            this.escaque[7][18] = 1;
//Novena linea
this.escaque[8][2] = 1;
this.escaque[8][3] = 1;
this.escaque[8][5] = 1;
this.escaque[8][7] = 1;
this.escaque[8][10] = 1;
this.escaque[8][11] = 1;
this.escaque[8][16] = 1;
this.escaque[8][19] = 1;
//Decima linea
this.escaque[9][0] = 1;
this.escaque[9][3] = 1;
this.escaque[9][7] = 1;
this.escaque[9][9] = 1;
this.escaque[9][11] = 1;
this.escaque[9][15] = 1;
this.escaque[9][16] = 1;
this.escaque[9][17] = 1;
this.escaque[9][19] = 1;

          
           
            //franja de abajo
            this.escaque[10][0] = 1;
            this.escaque[10][1] = 1;
            this.escaque[10][2] = 1;
            this.escaque[10][3] = 1;
            this.escaque[10][4] = 1;
            this.escaque[10][5] = 1;
            this.escaque[10][6] = 1;
            this.escaque[10][7] = 1;
            this.escaque[10][8] = 1;
            this.escaque[10][10] = 1;
            this.escaque[10][10] = 1;
            this.escaque[10][11] = 1;
            this.escaque[10][12] = 1;
            this.escaque[10][13] = 1;
            this.escaque[10][14] = 1;
            this.escaque[10][15] = 1;
            this.escaque[10][16] = 1;
            this.escaque[10][17] = 1;
            this.escaque[10][18] = 1;
            this.escaque[10][19] = 1;

                    break;
            }
        }
    }
}

mostrar(pantalla1) {

     // pintamos basados en los valores de la matriz
    for (let fil = 0; fil < 20; fil++) {
        for (let col = 0; col < 20; col++) {
            if (this.escaque[fil][col] === 0) { //Zona para caminar
                fill(255);
            } else if (this.escaque[fil][col] === 1) { //Obstaculos
                fill(0);
            }
            stroke(0);
            rect(col * 40, fil * 40, 40, 40);

        }
    }

}

getLocacion(newFil, newCol){

    return this.escaque[newFil][newCol];

}
LlegadaCohete() {
    if (dist(jugador.getX(), jugador.getY(), cohete.getX(), cohete.getY()) < 5) {

       jugador.reset();
       pantalla = 3;
                                                  
    }
   }

}

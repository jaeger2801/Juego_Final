class Terreno2 {
    constructor(){
        this.escaque = [];
    }

    arregloEscaque2() {
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
//aqui se programan las paredes que tendrá el primer nivel
personalizarParedes2(pantalla2) {

    for (let fil = 0; fil < 20; fil++) {
        for (let col = 0; col < 20; col++) {

            switch (pantalla2){
                case 0:
                    // seleccionamos algunos [fila][col] --> y, x
            //triangulos de entrada arriba 1
            
            //---------------
            this.escaque[6][16] = 1;
            this.escaque[7][15] = 1;
            this.escaque[8][14] = 1;
            
            //triangulo de abajo
            this.escaque[8][4] = 1;
            this.escaque[8][5] = 1;
            this.escaque[8][6] = 1;
            this.escaque[7][6] = 1;
            this.escaque[7][5] = 1;
            this.escaque[6][6] = 1;
            this.escaque[7][7] = 1;
            this.escaque[8][7] = 1;
            this.escaque[8][8] = 1;

            //triangulo de arriba
            this.escaque[0][17] = 1;
            this.escaque[0][18] = 1;
            this.escaque[0][19] = 1;
            this.escaque[1][18] = 1;
            this.escaque[1][19] = 1;
            this.escaque[2][19] = 1;
           
            //franja de abajo
            this.escaque[9][0] = 1;
            this.escaque[9][1] = 1;
            this.escaque[9][2] = 1;
            this.escaque[9][3] = 1;
            this.escaque[9][4] = 1;
            this.escaque[9][5] = 1;
            this.escaque[9][6] = 1;
            this.escaque[9][7] = 1;
            this.escaque[9][8] = 1;
            this.escaque[9][9] = 1;
            this.escaque[9][10] = 1;
            this.escaque[9][11] = 1;
            this.escaque[9][12] = 1;
            this.escaque[9][13] = 1;
            this.escaque[9][14] = 1;
            this.escaque[9][15] = 1;
            this.escaque[9][16] = 1;
            this.escaque[9][17] = 1;
            this.escaque[9][18] = 1;
            this.escaque[9][19] = 1;


                    break;
            }
        }
    }
}
mostrar2() {

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

}
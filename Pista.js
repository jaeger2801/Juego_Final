class Pista {
    constructor(pistaFil, pistaCol){
    this.pistaPosX = (pistaCol * 40) + 20; // pixeles
    this.pistaPosY = (pistaFil * 40) + 20; // pixeles
    }


   
    //pista de Neptuno
    show () {
        
        imageMode(CENTER);
        image(ImgNave,this.pistaPosX, this.pistaPosY,40, 40);
    }
     
    getX () {
        return this.pistaPosX;
    }
    getY () {
        return this.pistaPosY;
    }
    verPista() {
        if (dist(jugador.getX(), jugador.getY(), pista.getX(), pista.getY()) < 5) {
            
            pantalla = 13;
            
            console.log("se la comió");
        }
        }
}
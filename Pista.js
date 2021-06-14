class Pista {
    constructor(pistaFil, pistaCol){
    this.pistaPosX = (pistaCol * 40) + 20; // pixeles
    this.pistaPosY = (pistaFil * 40) + 20; // pixeles
    }


   
    //pista de Neptuno
    show () {
        
        fill(20);
        ellipse(this.pistaPosX, this.pistaPosY,30, 30);
    }
     
    getX () {
        return this.pistaPosX;
    }
    getY () {
        return this.pistaPosY;
    }
    verPista() {
        if (dist(jugador.getX(), jugador.getY(), pista.getX(), pista.getY()) < 5) {
            
            
            fill(255);
            rect(830, 350, 140, 20, 6)

            
            
            console.log("se la comió");
        }
        }
}
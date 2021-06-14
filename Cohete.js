class Cohete {
    constructor(coheteFil, coheteCol){
    this.cohetePosX = (coheteCol * 40) + 20; // pixeles
    this.cohetePosY = (coheteFil * 40) + 20; // pixeles
    }


   
    //Cohete de Neptuno
    show () {
        fill(0, 255, 255);
        ellipse(this.cohetePosX, this.cohetePosY, 30, 30);
    }
    //Cohete de Urano
    show1 () {
        fill(0, 255, 255);
        ellipse(this.cohetePosX, this.cohetePosY, 30, 30);
    }
    //Cohete de saturno
    show2 () {
        fill(0, 255, 255);
        ellipse(this.cohetePosX, this.cohetePosY, 30, 30);
    }
    //Cohete de Jupiter
    show3 () {
        fill(0, 255, 255);
        ellipse(this.cohetePosX, this.cohetePosY, 30, 30);
    }
    //Cohete de marte
    show4 () {
        fill(0, 255, 255);
        ellipse(this.cohetePosX, this.cohetePosY, 30, 30);
    }
    
    
    getX () {
        return this.cohetePosX;
    }
    getY () {
        return this.cohetePosY;
    }
}
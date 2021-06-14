class Cohete {
    constructor(coheteFil, coheteCol){
    this.cohetePosX = (coheteCol * 40) + 20; // pixeles
    this.cohetePosY = (coheteFil * 40) + 20; // pixeles
    }


   
    //Cohete de Neptuno
    show () {
        
        imageMode(CENTER);
        image(ImgNave,this.cohetePosX, this.cohetePosY,40, 40);
    }
   
    
    
    getX () {
        return this.cohetePosX;
    }
    getY () {
        return this.cohetePosY;
    }
}
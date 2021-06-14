class Moneda {

    constructor(monedaFil, monedaCol, imgMoneda, tipoMoneda){
        this.monedaX = (monedaCol * 40) + 20;
        this.monedaY = (monedaFil * 40) + 20;
        this.monedaCol = monedaCol;
        this.monedaFil = monedaFil;
        this.imgMoneda = imgMoneda;
        this.tipoMoneda = tipoMoneda;
 
    }


    mostrarMonedas() {
        imageMode(CENTER);
        this.monedaX = (this.monedaCol * 40) + 20; 
        this.monedaY = (this.monedaFil * 100) + 50;
        fill(20);
        ellipse(this.monedaX, this.monedaY ,20, 20);
    }

    getMonedaCol(){
        return this.monedaCol;
    }

    getMonedaFil(){
        return this.monedaFil;
    }

    getTipoMoneda(){
        return this.tipoMoneda;
    }
}

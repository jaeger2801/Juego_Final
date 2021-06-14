class Premio {

    constructor(monedaFil, monedaCol, imgMoneda, tipoMoneda){
        this.monedaX = (monedaCol * 40) + 20;
        this.monedaY = (monedaFil * 40) + 20;
        this.monedaCol = monedaCol;
        this.monedaFil = monedaFil;
        this.imgMoneda = imgMoneda;
        this.tipoMoneda = tipoMoneda;
 
    }

    pintar() {
        imageMode(CENTER);
        this.premioX = (this.premioCol * 100) + 50; 
        this.premioY = (this.premioFil * 100) + 50;
        image(this.imgPremio, this.premioX, this.premioY);
    }

    getMonedaCol(){
        return this.premioCol;
    }

    getMonedaFil(){
        return this.monedaFil;
    }

    getTipoMoneda(){
        return this.tipoMoneda;
    }
}
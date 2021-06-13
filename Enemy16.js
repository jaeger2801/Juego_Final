class Enemy16 {
    constructor(enemyFil, enemyCol, enemyDir){
    this.enemyPosX = (enemyCol * 40) + 20; // pixeles
    this.enemyPosY = (enemyFil * 40) + 20; // pixeles
    this.enemyCol = enemyCol; // validamos el mapa en la matriz
    this.enemyFil = enemyFil; // validamos el mapa en la matriz
    this.enemyDir = enemyDir;
    }


    init () {
        this.enemyCol = 16; // validamos el mapa en la matriz
        this.enemyFil = 6; // validamos el mapa en la matriz
        this.enemyPosX = (this.enemyCol * 40) + 20; // pixeles
        this.enemyPosY = (this.enemyFil * 40) + 20; // pixeles
        this.enemyDir = 0; // 0L | 1R | 2U | 3D
    }
    
    show () {
        fill(255, 255, 0);
        ellipse(this.enemyPosX, this.enemyPosY, 30, 30);
    }
    move (mapa1) {
        if (frameCount % 10 == 0) {
            this.moveEnemy(mapa1);
        }
    }
    updateLocation () {
        this.enemyPosX = (this.enemyCol * 40) + 20; // pixeles
        this.enemyPosY = (this.enemyFil * 40) + 20; // pixeles
    }
    moveEnemy (mapa1) {
        let moving = false;
        switch (this.enemyDir) {
            case 0: // L
                if (this.enemyCol - 1 >= 0) {
                    if (mapa1.getLocacion(this.enemyFil, this.enemyCol - 1) === 0) {
                        this.enemyCol--; // validamos el mapa en la matriz  
                        moving = true;
                    }
                }
                break;
            case 1: // R
                if (this.enemyFil + 1 < 20) {
                    if (mapa1.getLocacion(this.enemyFil, this.enemyCol + 1) === 0) {
                        this.enemyCol += 1;
                        moving = true;
                    }
                }
                break;
            case 2: // U
                if (this.enemyFil - 1 >= 0) {
                    if (mapa1.getLocacion(this.enemyFil - 1, this.enemyCol) === 0) {
                        this.enemyFil -= 1;
                        moving = true;
                    }
                }
                break;
            case 3: // D
                if (this.enemyFil + 1 < 20) {
                    if (mapa1.getLocacion(this.enemyFil + 1, this.enemyCol) === 0) {
                        this.enemyFil += 1;
                        moving = true;
                    }
                }
                break;
        }

        if (!moving) {
            this.enemyDir = int(random(0, 4));
        }
        // 0L | 1R | 2U | 3D
        this.updateLocation();
    }
    getX () {
        return this.enemyPosX;
    }
    getY () {
        return this.enemyPosY;
    }
}
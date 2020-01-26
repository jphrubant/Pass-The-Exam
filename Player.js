"use strict"

function Player () {
    //this.canvas = canvas; 
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.img = null;

    this.booksRead = 0;
    
    this.x = 50;
    this.y = 50;

    this.direction = 0;
    this.speed = 5;
};

Player.prototype.create = function() {
    this.img = new Image(); 
    this.img.src = "https://img.favpng.com/8/17/23/emoji-apple-gender-neutrality-png-favpng-Z30CVYGeNpGaWikZnncZSrji7.jpg";
    this.ctx.drawImage(this.img, 50 , 50);

};

Player.prototype.setDirection = function (){
    if (direction === "left"){
        this.direction = -1;
    } else if (direction === "right"){
        this.direction = 1
    }
}



/*
player.prototype.bookCollision(){} */
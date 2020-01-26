"use strict"

function Player () {
    //this.canvas = canvas; 
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.booksRead = 0;
    
    //this.x = canvas.width / 2;
    //this.y = 50;
};

Player.prototype.create = function() {
    var img = new Image(); 
    img.src = "https://img.favpng.com/8/17/23/emoji-apple-gender-neutrality-png-favpng-Z30CVYGeNpGaWikZnncZSrji7.jpg";
    this.ctx.drawImage(img, 50 , 50);
};


/*
player.prototype.update(){}
player.prototype.movement(){}
player.prototype.screenCollision(){}
player.prototype.bookCollision(){} */
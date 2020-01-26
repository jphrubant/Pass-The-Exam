"use strict"

function Book(){
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.img = null;

};


Book.prototype.create = function() {
    this.img = new Image(); 
    this.img.src = "https://banner2.cleanpng.com/20180329/che/kisspng-emoji-putin-s-praetorians-book-text-messaging-stic-book-cover-5abd3bb40e18e9.5758978915223510280578.jpg";
    this.ctx.drawImage(this.img, 50 , 50);
 };


/*
book.prototype.update(){}
book.prototype.didCollide(){}
book.prototype.isInScreen(){} */
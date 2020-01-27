"use strict"

function Game(){
    this.canvas = null;
    this.ctx = null;
    this.book = null;
    this.booksArray = [];
    this.player = null; 
    this.img = null ;
    this.gameIsOver = false;
    this.booksRead = 0;
}

Game.prototype.start = function(){
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.maxWidth = "600px";
    this.canvas.style.maxHeight = "700px";
    this.canvas.style.border = "1px solid black";

    /*this.img = new Image(); 
    this.img.src = "https://www.fmirobcn.org/media/upload/cache/biblioteca_personal_joan_miro_1506610796_a1060338.jpg";
    this.ctx.drawImage(this.img, 250, 250); */

    this.player = new Player(this.canvas);
    
    this.movement = function (event) {
        if (event.key === "ArrowLeft") {
            this.player.setDirection("left");
        } else if (event.key === "ArrowRight") {
            this.player.setDirection("right");
        } else if (event.key === " "){
            this.player.setDirection("stop");
        }
      };
    
    window.addEventListener("keydown", this.movement.bind(this));

    this.startLoop();
};

Game.prototype.startLoop = function(){
    var loop = function(){
        this.player.wallCollision();
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.create();
        
        if(Math.random() > 0.99){
            var randomX = Math.random() * this.canvas.width;
            var newBook = new Book(this.canvas, randomX, 6);
            this.booksArray.push(newBook);
        }

        this.didCollide(this.booksArray);

        this.booksArray.forEach(function(book){
            book.create();
            book.updatePosition();
        });    

        this.booksArray = this.booksArray.filter(function(book){
            return book.isInScreen(); 
          });
        
        requestAnimationFrame(loop);
    }.bind(this);

    loop();
}

Game.prototype.didCollide = function(booksArray){
    
    var collision = false;

    var playerLeft =  this.player.x;
    var playerRight = this.player.x + this.player.size;
    var playerTop = this.player.y;
    var playerBottom = this.player.y + this.player.size;

    booksArray.forEach(function(book){

    var bookLeft = book.x;
    var bookRight = book.x + book.size;
    var bookTop = book.y;
    var bookBottom = book.y + book.size;

    var collideRight = bookLeft <= playerRight && bookRight >= playerLeft;
    var collideLeft = bookRight >= playerLeft && bookLeft <= playerRight;
    var collideTop = bookBottom >= playerTop && bookTop <= playerBottom;
    var collideBottom = bookBottom <= playerBottom && bookBottom >= playerTop;
  
    if ((collideLeft || collideRight) && (collideTop || collideBottom)){
        this.updateScore();
        book.x += 2000; // move them out of the screen;
        return collision =  true;
    } else {
        return collision = false;
    }
    }.bind(this));

    return collision;
};

Game.prototype.getScore = function () {
    return this.booksRead;
};

Game.prototype.updateScore = function () {
    this.booksRead ++;
    var score = document.querySelector('.score');
    score.innerHTML = this.booksRead;
    return this.booksRead;
};


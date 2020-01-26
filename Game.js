"use strict"

function Game(){
    this.canvas = null;
    this.ctx = null;
    this.book = null;
    this.booksArray = [];
    this.player = null; 
    this.img = null ;
    this.gameIsOver = false;
}

Game.prototype.start = function(){
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.maxWidth = "800px";
    this.canvas.style.maxHeight = "600px";

    this.img = new Image(); 
    this.img.src = "https://www.fmirobcn.org/media/upload/cache/biblioteca_personal_joan_miro_1506610796_a1060338.jpg";
    this.ctx.drawImage(this.img, 250, 250);

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

        this.booksArray.forEach(function(element){
            element.create();
            element.updatePosition();
        });    

        this.booksArray = this.booksArray.filter(function(element){
            return element.isInScreen(); 
          });
        
        requestAnimationFrame(loop);
    }.bind(this);

    loop();
}








//Game.prototype.startGame = function() {}
//game.prototype.updateScore(){}

// game.prototype.hasWon = function(){
  //  if(this.player.booksRead = 20){
    //buildWinScreen()
   // }

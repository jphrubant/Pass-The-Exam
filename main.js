"use strict"

var game;
var player;
var splashScreen;
var gameScreen;
var winScreen;
var divElement = document.createElement("div")

function buildDomElement(htmlStructure){ // Dom Element Builder 
    divElement.innerHTML = htmlStructure;
    return divElement;
};

function buildSplashScreen(){  // Splash Screen Dom Generator
    removePreviousScreen()
    
    splashScreen = buildDomElement(`
    <main>
        <h1>PASS THE EXAM</h1>
        <p>Help Taylor pass their exam by catching 20 books</p>
        <button type="button" class="start-button">Start Learning</button>
    </main>
    `)

    document.body.appendChild(splashScreen);

    var startButton = document.querySelector('button')

    startButton.addEventListener('click', buildGameScreen)
};

function buildGameScreen(){ // Build Game Screen
    removePreviousScreen()
    gameScreen = buildDomElement(`
    <main class="game-space">
        <h1>LIBRARY</h1>
        <div class="canvas-div"> 
            <canvas></canvas>
        </div>
    </main>
    `)
    document.body.appendChild(gameScreen);

    game = new Game();
    game.startGame();

    player = new Player();
    player.create();
};

function buildWinScreen(){
    removePreviousScreen()

    winScreen = builDomElement(`
    <main class="win-screen">
        <h1>YOU PASSED THE EXAM</h1>
    </main>
    `)

    document.body.appendChild(winScreen);
}

function removePreviousScreen(){ // DOM Element Remover
    divElement.remove();
};

window.addEventListener('load', buildSplashScreen);


//buildWinScreen(){}
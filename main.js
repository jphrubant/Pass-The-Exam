"use strict"

var game;
var splashScreen;
var gameScreen;
var divElement = document.createElement("div")


function buildDomElement(htmlStructure){ // Dom Element Builder 

    divElement.innerHTML = htmlStructure;

    return divElement;
};

function buildSplashScreen(){  // Splash Screen Dom Generator

    splashScreen = buildDomElement(`<h1>PASS THE EXAM</h1>
    <p>Help Taylor pass their exam by catching 20 books</p>
    <button type="button" class="start-button">Start Learning</button>`)

    document.body.appendChild(splashScreen);

    var startButton = document.querySelector('button')

    startButton.addEventListener('click', buildGameScreen)
};

function buildGameScreen(){ // Build Game Screen

    removePreviousScreen()

    game = new Game();

    gameScreen = buildDomElement(`
    <main class="game-space">
        <h1>LIBRARY</h1>
    
    
    <div class="canvas-div"> 
        <canvas></canvas>
    </div>
    </main>
    `)

    document.body.appendChild(gameScreen);
};

function removePreviousScreen(){ // DOM Element Remover
    divElement.remove();
};

window.addEventListener('load', buildSplashScreen);


//buildWinScreen(){}
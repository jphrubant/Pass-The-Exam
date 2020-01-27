"use strict"

var game;
var splashScreen;
var gameScreen;
var winScreen;
var divElement = document.createElement("div");


function buildDomElement(htmlStructure){ // Dom Element Builder 
    divElement.innerHTML = htmlStructure;
    return divElement;
};

function buildSplashScreen(){  // Splash Screen Dom Generator
    removePreviousScreen()
    
    splashScreen = buildDomElement(`
    <main>
        <h1>PASS THE EXAM</h1>
        <p>Help Taylor pass their exam by reading as many books as possible in 1 minute</p>
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
        <div>
            <p class="score"></p>
            <p class="countDown"></p>
        </div>
        <div class="canvas-div"> 
            <canvas></canvas>
        </div>
    </main>
    `)

    document.body.appendChild(gameScreen);

    var countDown = document.querySelector(".countDown");
    var countdownToWinScreen = 61;
    
    function printCounter(){
        countdownToWinScreen--;
        countDown.innerHTML = `Countdown: ${countdownToWinScreen}`;
        if (countdownToWinScreen !== 0){
        var timeoutID = setTimeout(printCounter, 1000);
            } else if (countdownToWinScreen === 0){
                clearTimeout(timeoutID)
                buildWinScreen();
            } 
        }
    printCounter(); 

    
    
    this.game = new Game();
    this.game.start();
};    

function buildWinScreen(){
    removePreviousScreen()

    winScreen = buildDomElement(`
    <main class="win-screen">
        <h1>YOU PASSED THE EXAM</h1>
    </main>
    `);

    document.body.appendChild(winScreen);
}

function removePreviousScreen(){ // DOM Element Remover
    divElement.remove();
};

window.addEventListener('load', buildSplashScreen);

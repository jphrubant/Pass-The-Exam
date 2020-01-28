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
    <main class="splash-screen-main">
        <div class="splash-screen-div">
            <h1 class="splash-h1">PASS THE EXAM</h1>
            <p>Prepare for your next exam by reading as many books as possible. <br><br> Be quick, you only have 60 seconds!</p>
            <button type="button" class="start-button">Start Learning</button>
        </div>
    </main>
    `)

    document.body.appendChild(splashScreen);

    var startButton = document.querySelector('button')

    startButton.addEventListener('click', buildGameScreen)
};

function buildGameScreen(){ // Build Game Screen
    removePreviousScreen()

    gameScreen = buildDomElement(`
    <main class="game-screen-main">
    
        <div class="game-div">
            <div class='counters-div'>
                <p>Books Read: <span class="score">0</span></p>
                <h1>LIBRARY</h1>
                <p class="countDown"></p> 
            </div>
        <div>
        <canvas></canvas>
    </main>
    `)

    document.body.appendChild(gameScreen);

    var countDown = document.querySelector(".countDown");
    var countdownToWinScreen = 10;
   
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
    
    game = new Game();
    game.start();
};    

function buildWinScreen(){
    removePreviousScreen()

    winScreen = buildDomElement(`
    <main class="win-screen-main">
        <div class="win-screen-div">
            <h1 class="win-h1">YOU PASSED THE EXAM!!!</h1>
            <p>WOW! You managed to read <span class="final-score">0</span></p>
            <button type="button" class="start-button">Go back to studyuing</button>
        </div>
    </main>
    `);

    document.body.appendChild(winScreen);
    
    var startButton = document.querySelector('button')
    startButton.addEventListener('click', buildGameScreen);

    var winScreenScore = document.querySelector('.final-score')
    winScreenScore.innerHTML = game.finalScore();

}

function removePreviousScreen(){ // DOM Element Remover
    divElement.remove();
};

window.addEventListener('load', buildSplashScreen);


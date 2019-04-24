/*
Goals:
    - Have function where people can input their scores (clicking, or another method)
        - Can figure this out on Tuesday evening if needed
        Time: 2-3 hours
    - Have way that users can acknowledge finishing the quiz
        Time: 1-2 hours
    - Put images and descriptions to appear once they have finished
        Time: 1-2 hours
*/

// images variables
var bangel;
var coal;
var litany;
var spring;
var coalimage;
var bangelimage;
var springimage;
var litanyimage;

// variables for keeping score
var scorebangel;
var scorecoal;
var scorelitany;
var scorespring;
var scoregroupone = [];
var scoregrouptwo = [];
var scoregroupthree = [];
var scoregroupfour = [];
var totalscore = [];

// variables for buttons
var buttonone;
var buttontwo;
var buttonthree;
var buttonfive;
var buttonsix;
var buttonseven;
var buttoneight;
var buttonnine;
var buttonten;
var buttontwelve;
var buttonthriteen;
var buttonfourteen;
var buttonfifteen;
var buttonseventeen;
var buttoneighteen;
var buttonnineteen;
var finishbutton;

function preload() {
    bangel = loadImage('images/blackangel.png');
    coal = loadImage('images/coal.png');
    litany = loadImage('images/litany.png');
    spring = loadImage('images/spring.png');
    coalimage = loadImage('images/coaltext.png');
    bangelimage = loadImage('images/bangeltext.png');
    litanyimage = loadImage('images/litanytext.png');
    springimage = loadImage('images/springtext.png');
}

function setup() {
    createCanvas(windowWidth,7.75*windowHeight);
    background(0);

    
}

function draw() {
    // Displaying result
    for(var i = 0; i < 4; i++){
        totalscore[i] = scoregroupone[i] + scoregrouptwo[i] + scoregroupthree[i] + scoregroupfour[i];
    }
    // console.log(totalscore);
    // console.log(Math.max.apply(Math, totalscore));

    image(coal,     5*windowWidth/8,    0, 500, 796);
    image(coalimage, 0, 0,700,700);

    image(litany,  0, 1.25*windowHeight, 500,923);
    image(litanyimage, 3*windowWidth/8, 1.25*windowHeight,700,700);

    image(bangel,   windowWidth/2,      2.75*windowHeight,612,500);
    image(bangelimage, 0, 2.75*windowHeight,600,600);

    image(spring,   windowWidth/2,      4*windowHeight,554,500);
    image(springimage, 0, 4*windowHeight,600,600);
}

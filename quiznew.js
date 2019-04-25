/*
Goals:
    - Have function where people can input their scores (clicking, or another method)
        - Can figure this out on Tuesday evening if needed
        Time: 2-3 hours

Thank you to Mikey316! I was having issues with the mousePressed() function regardless of what verison of p5.dom I
used, so instead I changed the format of the quiz to be more like what Mikey316 used here:
    https://editor.p5js.org/Mikey316/sketches/HJID_X7Wb 
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

// variables for quiz inputs
var labelone;
var labeltwo;
var labelthree;
var labelfour;
var labelconfirm;
var inputone;
var inputtwo;
var inputthree;
var inputfour;
var inputconfirm;

// variables for responses
var responseone;
var responsetwo;
var responsethree;
var responsefour;
var responseconfirm;

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

    // Text
{
    // One
{
    var oneone = 'I';
    var onetwo = 'is the total black, being spoken';
    var onethree = 'from the earths inside.';
    var onefour = 'There are many kinds of open';
    var onefive = 'how a diamond comes into a knot of flame';
    var onesix = 'how sounds comes into a word, coloured';
    var oneseven = 'by who pays what for speaking.';
}

// Two
{
    var twoone = 'Love is a word, another kind of open.';
    var twotwo = 'As the diamond comes into a knot of flame';
    var twothree = 'I am Black because I come from the earths inside';
    var twofour = 'now take my word for jewel in the open light';
}

// Three
{
    var threeone = 'For those of us who live at the shoreline';
    var threetwo = 'standing upon the constant edges of decision';
    var threethree = 'crucial and alone';
    var threefour = 'for those of us who cannot indulge';
    var threefive = 'the passing dreams of choice';
    var threesix = 'who love in doorways coming and going';
    var threeseven = 'in the hours between dawns';
    var threeeight = 'looking inward and outward';
    var threenine = 'at once before and after';
    var threeten = 'seeking a now that can breed';
    var threeeleven = 'futures';
    var threetwelve = 'like bread in our childrens mouths';
    var threethirteen = 'so their dreams will not reflect';
    var threefourteen = 'the death of ours;';
}

// Five
{
    var fiveone = 'And when the sun rises we are afraid';
    var fivetwo = 'it might not remain';
    var fivethree = 'when the sun sets we are afraid';
    var fivefour = 'it might not rise in the morning';
    var fivefive = 'when our stomachs are full we are afraid';
    var fivesix = 'of indigestion';
    var fiveseven = 'when our stomachs are empty we are afraid';
    var fiveeight = 'we may never eat again';
    var fivenine = 'when we are loved we are afraid';
    var fiveten = 'love will vanish';
    var fiveeleven = 'when we are alone we are afraid';
    var fivetwelve = 'love will never return';
    var fivethirteen = 'and when we speak we are afraid';
    var fivefourteen = 'our words will not be heard';
    var fivefifteen = 'nor welcomed';
    var fivesixteen = 'but when we are silent';
    var fiveseventeen = 'we are still afraid.';
}

// Six
{
    var sixone = 'So it is better to speak';
    var sixtwo = 'remembering';
    var sixthree = 'we were never meant to survive.';
}

// Seven
{
    var sevenone = 'Be who you are and will be';
    var seventwo = 'learn to cherish';
    var seventhree = 'that boisterous Black Angel that drives you';
    var sevenfour = 'up one day and down another';
    var sevenfive = 'protecting the place where your power rises';
    var sevensix = 'running like hot blood';
    var sevenseven = 'from the same source';
    var seveneight = 'as your pain.';
}

// Eight
{
    var eightone = 'When you are hungry';
    var eighttwo = 'learn to eat';
    var eightthree = 'whatever sustains you';
    var eightfour = 'until morning';
    var eightfive = 'but do not be misled by details';
    var eightsix = 'simply because you live them.';
}

// Nine
{
    var nineone = 'Do not let your head deny';
    var ninetwo = 'your hands';
    var ninethree = 'any memory of what passes through them';
    var ninefour = 'nor your eyes nor your heart';
    var ninefive = 'everything can be used';
    var ninesix = 'except what is wasteful';
    var nineseven = '(you will need to remember this';
    var nineeight = 'when you are accused of destruction).';
    var ninenine = 'Even when they are dangerous';
    var nineten = 'examine the heart of those machines';
    var nineeleven = 'which you hate';
    var ninetwelve = 'before you discard them';
    var ninethirteen = 'but do not mourn their lack of power';
    var ninefourteen = 'lest you be condemned';
    var ninefifteen = 'to relive them.';
}

// Ten
{
    var tenone = 'If you do not learn to hate';
    var tentwo = 'you will never be lonely';
    var tenthree = 'enough to love easily';
    var tenfour = 'nor will you always be brave';
    var tenfive = 'although it does not grow any easier.';
}

// Twelve
{
    var twelveone = 'Remember our sun';
    var twelvetwo = 'is not the most noteworthy star';
    var twelvethree = 'only the nearest';
}

// Thirteen
{
    var thirteenone = 'Respect whatever pain you bring back';
    var thirteentwo = 'from your dreaming';
    var thirteenthree = 'but do not look for new gods';
    var thirteenfour = 'in the sea';
    var thirteenfive = 'nor in any part of a rainbow.';
}

// Fourteen
{
    var fourteenone = 'Each time you love';
    var fourteentwo = 'love as deeply';
    var fourteenthree = 'as if it were';
    var fourteenfour = 'forever';
    var fourteenfive = 'only nothing is';
    var fourteensix = 'eternal.';
}

// Fifteen
{
    var fifteenone = 'Speak proudly to your children';
    var fifteentwo = 'where ever you may find them';
    var fifteenthree = 'tell them';
    var fifteenfour = 'you are the offspring of slaves';
    var fifteenfive = 'and your mother was';
    var fifteensix = 'a princess';
    var fifteenseven = 'in darkness.';
}

// Seventeen
{
    var seventeenone = 'At April and evening';
    var seventeentwo = 'I recall how we came';
    var seventeenthree = 'like new thunder';
    var seventeenfour = 'beating the earth';
    var seventeenfive = 'leaving the taste of rain and sunset';
    var seventeensix = 'all our young hungers';
    var seventeenseven = 'before us.';
}

// Eighteen
{
    var eighteenone = 'Away from peaceful half-truths';
    var eighteentwo = 'and springtime passing unsaid';
    var eighteenthree = 'we came in the touch of fire';
    var eighteenfour = 'came to the sun';
    var eighteenfive = 'lay with the wild earth';
    var eighteensix = 'until spent and knowing';
    var eighteenseven = 'we brought forth young.';
}

// Nineteen
{
    var nineteenone = 'Now insolent Aprils bedevil us';
    var nineteentwo = 'earthly conceits';
    var nineteenthree = 'reminding us';
    var nineteenfour = 'all else is forfeit';
    var nineteenfive = 'and only the blood-hungry children';
    var nineteensix = 'remember';
    var nineteenseven = 'what face we had';
    var nineteeneight = 'what startling eyes.';
}
}

// Displaying text
    // 1/4
    {
        // Two
        {
            textSize(20);
            fill(255);
            var twopushdown = 30;
            var twofurtherdown = 20;

            text(twoone,    10,     twopushdown);
            text(twotwo,    10,     twopushdown+(1*twofurtherdown));
            text(twothree,  10,     twopushdown+(2*twofurtherdown));
            text(twofour,   10,     twopushdown+(3*twofurtherdown)); 
        }

        // Seven
        {
            var sevenindent = windowWidth/4;
            var sevenpushdown = twopushdown+(3*twofurtherdown) + 60;
            text(sevenone,      sevenindent,    sevenpushdown);
            text(seventwo,      sevenindent,    sevenpushdown+(1*twofurtherdown));
            text(seventhree,    sevenindent,    sevenpushdown+(2*twofurtherdown));
            text(sevenfour,     sevenindent,    sevenpushdown+(3*twofurtherdown));
            text(sevenfive,     sevenindent,    sevenpushdown+(4*twofurtherdown));
            text(sevensix,      sevenindent,    sevenpushdown+(5*twofurtherdown));
            text(sevenseven,    sevenindent,    sevenpushdown+(6*twofurtherdown));
            text(seveneight,    sevenindent,    sevenpushdown+(7*twofurtherdown));
        }

        // Fifteen
        {
            var fifteenindent = windowWidth/2;
            var fifteenpushdown = sevenpushdown+(7*twofurtherdown) + 20;
            text(fifteenone,    fifteenindent,  fifteenpushdown);
            text(fifteentwo,    fifteenindent,  fifteenpushdown+(1*twofurtherdown));
            text(fifteenthree,  fifteenindent,  fifteenpushdown+(2*twofurtherdown));
            text(fifteenfour,   fifteenindent,  fifteenpushdown+(3*twofurtherdown));
            text(fifteenfive,   fifteenindent,  fifteenpushdown+(4*twofurtherdown));
            text(fifteensix,    fifteenindent,  fifteenpushdown+(5*twofurtherdown));
            text(fifteenseven,  fifteenindent,  fifteenpushdown+(6*twofurtherdown));
        }

        // Nineteen
        {
            var nineteenindent = 3*windowWidth/4;
            var nineteenpushdown = fifteenpushdown+(6*twofurtherdown) + 20;
            text(nineteenone,   nineteenindent, nineteenpushdown);
            text(nineteentwo,   nineteenindent, nineteenpushdown+(1*twofurtherdown));
            text(nineteenthree, nineteenindent, nineteenpushdown+(2*twofurtherdown));
            text(nineteenfour,  nineteenindent, nineteenpushdown+(3*twofurtherdown));
            text(nineteenfive,  nineteenindent, nineteenpushdown+(4*twofurtherdown));
            text(nineteensix,   nineteenindent, nineteenpushdown+(5*twofurtherdown));
            text(nineteenseven, nineteenindent, nineteenpushdown+(6*twofurtherdown));
            text(nineteeneight, nineteenindent, nineteenpushdown+(7*twofurtherdown));
        }
    }

    // 2/4
    {
        // Three
        {
            var threepushdown = 1.25*windowHeight;
            text(threeone,      10, threepushdown);
            text(threetwo,      10, threepushdown+(1*twofurtherdown));
            text(threethree,    10, threepushdown+(2*twofurtherdown));
            text(threefour,     10, threepushdown+(3*twofurtherdown));
            text(threefive,     10, threepushdown+(4*twofurtherdown));
            text(threesix,      10, threepushdown+(5*twofurtherdown));
            text(threeseven,    10, threepushdown+(6*twofurtherdown));
            text(threeeight,    10, threepushdown+(7*twofurtherdown));
            text(threenine,     10, threepushdown+(8*twofurtherdown));
            text(threeten,      10, threepushdown+(9*twofurtherdown));
            text(threeeleven,   10, threepushdown+(10*twofurtherdown));
            text(threetwelve,   10, threepushdown+(11*twofurtherdown));
            text(threethirteen, 10, threepushdown+(12*twofurtherdown));
            text(threefourteen, 10, threepushdown+(13*twofurtherdown));
        }

        // Five
        {
            var fiveindent = 5*windowWidth/16;
            var fivepushdown = threepushdown+(7*twofurtherdown) + 20;
            text(fiveone,       fiveindent, fivepushdown);
            text(fivetwo,       fiveindent, fivepushdown + (1*twofurtherdown));
            text(fivethree,     fiveindent, fivepushdown + (2*twofurtherdown));
            text(fivefour,      fiveindent, fivepushdown + (3*twofurtherdown));
            text(fivefive,      fiveindent, fivepushdown + (4*twofurtherdown));
            text(fivesix,       fiveindent, fivepushdown + (5*twofurtherdown));
            text(fiveseven,     fiveindent, fivepushdown + (6*twofurtherdown));
            text(fiveeight,     fiveindent, fivepushdown + (7*twofurtherdown));
            text(fivenine,      fiveindent, fivepushdown + (8*twofurtherdown));
            text(fiveten,       fiveindent, fivepushdown + (9*twofurtherdown));
            text(fiveeleven,    fiveindent, fivepushdown + (10*twofurtherdown));
            text(fivetwelve,    fiveindent, fivepushdown + (11*twofurtherdown));
            text(fivethirteen,  fiveindent, fivepushdown + (12*twofurtherdown));
            text(fivefourteen,  fiveindent, fivepushdown + (13*twofurtherdown));
            text(fivefifteen,   fiveindent, fivepushdown + (14*twofurtherdown));
            text(fivesixteen,   fiveindent, fivepushdown + (15*twofurtherdown));
            text(fiveseventeen, fiveindent, fivepushdown + (16*twofurtherdown));
        }

        // Fourteen
        {
            var fourteenindent = windowWidth/2;
            var fourteenpushdown = threepushdown-40;
            text(fourteenone,   fourteenindent, fourteenpushdown);
            text(fourteentwo,   fourteenindent, fourteenpushdown+(1*twofurtherdown));
            text(fourteenthree, fourteenindent, fourteenpushdown+(2*twofurtherdown));
            text(fourteenfour,  fourteenindent, fourteenpushdown+(3*twofurtherdown));
            text(fourteenfive,  fourteenindent, fourteenpushdown+(4*twofurtherdown));
            text(fourteensix,   fourteenindent, fourteenpushdown+(5*twofurtherdown));
        }

        // Seventeen
        {
            var seventeenindent = 3*windowWidth/4;
            var seventeenpushdown = fourteenpushdown+(5*twofurtherdown) + 20;
            text(seventeenone,      seventeenindent,    seventeenpushdown);
            text(seventeentwo,      seventeenindent,    seventeenpushdown+(1*twofurtherdown));
            text(seventeenthree,    seventeenindent,    seventeenpushdown+(2*twofurtherdown));
            text(seventeenfour,     seventeenindent,    seventeenpushdown+(3*twofurtherdown));
            text(seventeenfive,     seventeenindent,    seventeenpushdown+(4*twofurtherdown));
            text(seventeensix,      seventeenindent,    seventeenpushdown+(5*twofurtherdown));
            text(seventeenseven,    seventeenindent,    seventeenpushdown+(6*twofurtherdown));
        }
    }

    // 3/4
    {
        // One
        {
            var onepushdown = 2.5*windowHeight;
            text(oneone,    30, onepushdown);
            text(onetwo,    10, onepushdown+(1*twofurtherdown));
            text(onethree,  10, onepushdown+(2*twofurtherdown));
            text(onefour,   10, onepushdown+(3*twofurtherdown));
            text(onefive,   10, onepushdown+(4*twofurtherdown));
            text(onesix,    10, onepushdown+(5*twofurtherdown));
            text(oneseven,  10, onepushdown+(6*twofurtherdown));
        }

        // Six
        {
            var sixindent = windowWidth/4;
            var sixpushdown = onepushdown+(6*twofurtherdown) + 40;
            text(sixone,    sixindent,  sixpushdown);
            text(sixtwo,    sixindent,  sixpushdown+(1*twofurtherdown));
            text(sixthree,  sixindent,  sixpushdown+(2*twofurtherdown));
        }

        // Twelve
        {
            var twelveindent = windowWidth/2;
            var twelvepushdown = sixpushdown+(2*twofurtherdown) + 20;
            text(twelveone,     twelveindent,   twelvepushdown);
            text(twelvetwo,     twelveindent,   twelvepushdown+(1*twofurtherdown));
            text(twelvethree,   twelveindent,   twelvepushdown+(2*twofurtherdown));
        }

        // Thirteen
        {
            var thirteenindent = 23*windowWidth/32;
            var thirteenpushdown = twelvepushdown+(2*twofurtherdown) + 20;
            text(thirteenone,   thirteenindent, thirteenpushdown);
            text(thirteentwo,   thirteenindent, thirteenpushdown+(1*twofurtherdown));
            text(thirteenthree, thirteenindent, thirteenpushdown+(2*twofurtherdown));
            text(thirteenfour,  thirteenindent, thirteenpushdown+(3*twofurtherdown));
            text(thirteenfive,  thirteenindent, thirteenpushdown+(4*twofurtherdown));
        }
    }

    // 4/4
    {
        // Eight
        {
            var eightpushdown = 3.75*windowHeight;
            text(eightone,      10, eightpushdown);
            text(eighttwo,      10, eightpushdown+(1*twofurtherdown));
            text(eightthree,    10, eightpushdown+(2*twofurtherdown));
            text(eightfour,     10, eightpushdown+(3*twofurtherdown));
            text(eightfive,     10, eightpushdown+(4*twofurtherdown));
            text(eightsix,      10, eightpushdown+(5*twofurtherdown));
        }

        // Nine 
        {
            var nineindent = windowWidth/4;
            var ninepushdown = eightpushdown+(5*twofurtherdown) - 60;
            text(nineone,       nineindent, ninepushdown);
            text(ninetwo,       nineindent, ninepushdown+(1*twofurtherdown));
            text(ninethree,     nineindent, ninepushdown+(2*twofurtherdown));
            text(ninefour,      nineindent, ninepushdown+(3*twofurtherdown));
            text(ninefive,      nineindent, ninepushdown+(4*twofurtherdown));
            text(ninesix,       nineindent, ninepushdown+(5*twofurtherdown));
            text(nineseven,     nineindent, ninepushdown+(6*twofurtherdown));
            text(nineeight,     nineindent, ninepushdown+(7*twofurtherdown));
            text(ninenine,      nineindent, ninepushdown+(8*twofurtherdown));
            text(nineten,       nineindent, ninepushdown+(9*twofurtherdown));
            text(nineeleven,    nineindent, ninepushdown+(10*twofurtherdown));
            text(ninetwelve,    nineindent, ninepushdown+(11*twofurtherdown));
            text(ninethirteen,  nineindent, ninepushdown+(12*twofurtherdown));
            text(ninefourteen,  nineindent, ninepushdown+(13*twofurtherdown));
            text(ninefifteen,   nineindent, ninepushdown+(14*twofurtherdown));
        }

        // Ten
        {
            var tenindent = 15*windowWidth/32;
            var tenpushdown = ninepushdown+(14*twofurtherdown) + 20;
            text(tenone,    tenindent,  tenpushdown);
            text(tentwo,    tenindent,  tenpushdown+(1*twofurtherdown));
            text(tenthree,  tenindent,  tenpushdown+(2*twofurtherdown));
            text(tenfour,   tenindent,  tenpushdown+(3*twofurtherdown));
            text(tenfive,   tenindent,  tenpushdown+(4*twofurtherdown));
        }

        // Eighteen
        {
            var eighteenindent = 3*windowWidth/4;
            var eighteenpushdown = tenpushdown+(4*twofurtherdown) + 20;
            text(eighteenone,   eighteenindent, eighteenpushdown);
            text(eighteentwo,   eighteenindent, eighteenpushdown+(1*twofurtherdown));
            text(eighteenthree, eighteenindent, eighteenpushdown+(2*twofurtherdown));
            text(eighteenfour,  eighteenindent, eighteenpushdown+(3*twofurtherdown));
            text(eighteenfive,  eighteenindent, eighteenpushdown+(4*twofurtherdown));
            text(eighteensix,   eighteenindent, eighteenpushdown+(5*twofurtherdown));
            text(eighteenseven, eighteenindent, eighteenpushdown+(6*twofurtherdown));
        }
    }

    // insert answers
    {
        // group one
        {
            labelone = createA("https://thewestwinding.github.io/Afro-Pessimism-Afro-Futurism/","Which intrigues you most?");
            labelone.position(10, 2*windowHeight);
            inputone = createInput();
            inputone.position(10, 2*windowHeight + 30);
        }

        // group two
        {
            labeltwo = createA("https://thewestwinding.github.io/Afro-Pessimism-Afro-Futurism/","Which intrigues you most?");
            labeltwo.position(10, 3.4*windowHeight);
            inputtwo = createInput();
            inputtwo.position(10, 3.4*windowHeight + 30);
        }

        // group three
        {
            labelthree = createA("https://thewestwinding.github.io/Afro-Pessimism-Afro-Futurism/","Which intrigues you most?");
            labelthree.position(3*windowWidth/4, 4*windowHeight);
            inputthree = createInput();
            inputthree.position(3*windowWidth/4, 4*windowHeight + 30);
        }

        // group four
        {
            labelfour = createA("https://thewestwinding.github.io/Afro-Pessimism-Afro-Futurism/","Which intrigues you most?");
            labelfour.position(10, 5.7*windowHeight);
            inputfour = createInput();
            inputfour.position(10, 5.7*windowHeight + 30);
        }

        // confirm group
        {
            labelconfirm = createA("https://thewestwinding.github.io/Afro-Pessimism-Afro-Futurism/","Type 'Yes' without quotation marks and press Enter to see your answer! Refresh to take the test again.");
            labelconfirm.position((windowWidth/2) - 500, 6.25*windowHeight + 30);
            inputconfirm = createInput();
            inputconfirm.position((windowWidth/2) - 500, 6.25*windowHeight + 60);
        }
    }
}

function draw() {
    // console.log(totalscore);
}

function keyPressed() {
    if (keyCode === ENTER){
        coalscore = 2.184;
        litanyscore = 1.092;
        bangelscore = 1.074;
        springscore = 1.176;
        totalscore = [0,0,0,0];

        responseone = inputone.value();
        responsetwo = inputtwo.value();
        responsethree = inputthree.value();
        responsefour = inputfour.value();
        responseconfirm = inputconfirm.value();

        // response one
        if (responseone == "Love" || repsonseone == "love"){
            scoregroupone = [coalscore, litanyscore,    bangelscore,    springscore];
        } else if (responseone == "Be" || responseone == "be"){
            scoregroupone = [coalscore, litanyscore,    bangelscore,    springscore];
        } else if (responseone == "Speak" || responseone == "speak"){
            scoregroupone = [coalscore, litanyscore,    bangelscore,    springscore];
        } else if (responseone == "Now" || responseone == "now"){
            scoregroupone = [coalscore, 0,    0,    springscore];
        }

        // response two
        if (responsetwo == "For" || responsetwo == "for"){
            scoregrouptwo = [0*coalscore, litanyscore,    bangelscore,    0*springscore];
        } else if (responsetwo == "And" || responsetwo == "and"){
            scoregrouptwo = [0, litanyscore,    0,    springscore];
        } else if (responsetwo = "Each" || responsetwo == "each"){
            scoregrouptwo = [0, litanyscore,    bangelscore,    0];
        } else if (responsetwo == "At" || responsetwo == "at"){
            scoregrouptwo = [0*coalscore, litanyscore,    0*bangelscore,    springscore];
        }

        // response three
        if (responsethree == "I" || responsethree == "i"){
            scoregroupthree = [coalscore, litanyscore,    0*bangelscore,    springscore];
        } else if (responsethree == "So" || responsethree == "so"){
            scoregroupthree = [0*coalscore, litanyscore,    bangelscore,    springscore];
        } else if (responsethree == "Remember" || responsethree == "remember"){
            scoregroupthree = [coalscore, 0*litanyscore,    bangelscore,    springscore];
        } else if (responsethree == "Respect" || responsethree == "respect"){
            scoregroupthree = [0*coalscore, litanyscore,    bangelscore,    springscore];
        }

        // response four
        if (responsefour == "When" || responsefour == "when"){
            scoregroupfour = [0*coalscore, litanyscore,    bangelscore,    springscore];
        } else if (responsefour == "Do" || responsefour == "do"){
            scoregroupfour = [0*coalscore, litanyscore,    bangelscore,    springscore];
        } else if (responsefour == "If" || responsefour == "if"){
            scoregroupfour = [coalscore, litanyscore,    bangelscore,    0*springscore];
        } else if (responsefour == "Away" || responsefour == "away"){
            scoregroupfour = [0*coalscore, litanyscore,    bangelscore,    springscore];
        }

        // confirm group
        if (responseconfirm === "Yes" || responseconfirm === "yes"){
            // get total score
            for(var i = 0; i < 4; i++){
                totalscore[i] = scoregroupone[i] + scoregrouptwo[i] + scoregroupthree[i] + scoregroupfour[i];
            }

            // show result
            if( totalscore[0] === Math.max.apply(Math, totalscore)){
                image(coalimage, 0, 5*windowHeight,700,700);
                image(coal,     9*windowWidth/16,    5*windowHeight, 500, 796);
        
            } else if( totalscore[1] === Math.max.apply(Math, totalscore)){
                image(litanyimage, windowWidth/2 - 100, 5*windowHeight,700,700);
                image(litany,0, 5*windowHeight, 500,923);
        
            } else if( totalscore[2] === Math.max.apply(Math, totalscore)){
                image(bangelimage, 0, 5*windowHeight,600,600);
                image(bangel,   windowWidth/2,      5*windowHeight,612,500);
        
            } else if( totalscore[3] === Math.max.apply(Math, totalscore)){
                image(springimage, 0, 5*windowHeight,600,600);
                image(spring,   windowWidth/2,      5*windowHeight,554,500);
        
            }
        }
    }
}

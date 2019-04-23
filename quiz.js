/*
Current goal: display text (test with two)
*/

var bangel;
var coal;
var litany;
var spring;

function preload(){
    bangel = loadImage('MyProject/images/blackangel.jpg');
    coal = loadImage('MyProject/images/coal.png');
    litany = loadImage('MyProject/images/litany.png');
    spring = loadImage('MyProject/images/spring.png');
}

function setup(){
    var canvas = createCanvas(windowWidth,1.25*4*windowHeight);

    // move sketch to sketch-holder
    canvas.parent("sketch-holder");

    background(0);
}

function draw(){
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
            var nineight = 'when you are accused of destruction).';
            var nineten = 'Even when they are dangerous';
            var nineeleven = 'examine the heart of those machines';
            var ninetwelve = 'which you hate';
            var ninethirteen = 'before you discard them';
            var ninefourteen = 'but do not mourn their lack of power';
            var ninefifteen = 'lest you be condemned';
            var ninesixteen = 'to relive them.';
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
    textSize(32);
    fill(0,102,153);
    text(twoone,10,10);
    text(twotwo,10,20);
    text(twothree,10,30);
    text(twofour,10,40);
}
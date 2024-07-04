"use strict";
console.log("Hello!");
//Array
let p = {
    0: "What do you do?",
    1: "You are a young goblin boi, and it is a wonderfully dreary day in your moist cavern. Somehow, rays of light manage to reach the dark depths in which you slumber, prompting you to [wake up]. However, you are tired from the previous night, one full of debauchery, and you wish to keep [sleeping].",
    2: "Even though you'd much rather keep sleeping, you reluctantly get up. It takes a short while for you to fully gain your bearings, but once you do, you sigh exasperatedly at the chores you know await you.",
    3: "I don't have anything here.",
    4: "Your splitting headache makes you toss and turn, but you don't awaken. The day steadily moves on. Soon, your cavern is bathed in light as the sun reaches its zenith in the cloudless sky. Still you [rest], but deep in your subconcious you feel a sudden, urgent need to [wake up].",
    5: "Loud, echoing footsteps ring out through the main chamber, and you drowsily blink open your eyes. You're barely awake when you catch sight of a looming figure, looking down on you. Your mind tries to supply your body with a sense of urgency, but you're still far too groggy to register the danger you're in. The intruder, on the other hand, upon finding your prone, vulnerable body, makes a noise of confusion. He is perplexed at your carelessness, but without much thought pulls out his dagger. He walks up to you, looks down into your fatigued face, and your slowly opening eyes. With one swift movement, he effortlessly swipes his dagger across your bare throat. Blood wells up along the cut, gushing forth like a red water fountain. As you choke on your own blood, your last thought before succumbing to the fatal wound is how you should have just woken up earlier.",
    6: "You awaken with a loud groan. You stretch your short body, a few cracks here and there making you moan in relief. As you briefly register what time of day it is, you let out a slightly panicked screech. You don't have enough time to fully complete all of your chores! Well, surely this won't have any consequences.",
    7: "Nothing to see here yet."
};
//Functions
function GameStart() {
    let start = prompt(p[1], p[0]);
    if (start == "wake up") {
        WakeUp1();
    }
    else if (start == "sleeping") {
        Sleepy();
    }
    else {
        GameStart();
    }
}
function WakeUp1() {
    alert(p[2]);
    alert(p[3]);
}
function Sleepy() {
    let sleep = prompt(p[4], p[0]);
    if (sleep == "wake up") {
        WakeUp2();
    }
    else if (sleep == "rest") {
        Sleeby();
    }
    else {
        Sleepy();
    }
}
function Sleeby() {
    alert(p[5]);
    GameStart();
}
function WakeUp2() {
    alert(p[6]);
    alert(p[7]);
}
GameStart();

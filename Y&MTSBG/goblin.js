"use strict";
var GoblinBoi;
(function (GoblinBoi) {
    WakeUp();
    function WakeUp() {
        let start = prompt("You are a young goblin boi, and it is a wonderfully dreary day in your moist cavern. Somehow, rays of light manage to reach the dark depths in which you slumber, prompting you to [wake up]. However, you are tired from the previous night, one full of debauchery, and you wish to keep [sleeping].", "What do you do?");
        if (start == "wake up") {
            alert("Even though you'd much rather keep sleeping, you reluctantly get up. It takes a short while for you to fully gain your bearings, but once you do, you sigh exasperatedly at the chores you know await you.");
            ChooseTask();
        }
        else {
            WakeUpAgain();
        }
    }
    function WakeUpAgain() {
        let sleep = prompt("Your splitting headache makes you toss and turn, but you don't awaken. The day steadily moves on. Soon, your cavern is bathed in light as the sun reaches its zenith in the cloudless sky. Still you [rest], but deep in your subconcious you feel a sudden, urgent need to [wake up].", "What do you do?");
        if (sleep == "wake up") {
            alert("You awaken with a loud groan. You stretch your short body, a few cracks here and there making you moan in relief. As you briefly register what time of day it is, you let out a slightly panicked screech. You don't have enough time to fully complete all of your chores! Well, surely this won't have any consequences.");
            ChooseTask();
        }
        else
            alert("Loud, echoing footsteps ring out through the main chamber, and you drowsily blink open your eyes. You're barely awake when you catch sight of a looming figure, looking down on you. Your mind tries to supply your body with a sense of urgency, but you're still far too groggy to register the danger you're in. The intruder, on the other hand, upon finding your prone, vulnerable body, makes a noise of confusion. He is perplexed at your carelessness, but without much thought pulls out his dagger. He walks up to you, looks down into your fatigued face, and your slowly opening eyes. With one swift movement, he effortlessly swipes his dagger across your bare throat. Blood wells up along the cut, gushing forth like a red water fountain. As you choke on your own blood, your last thought before succumbing to the fatal wound is how you should have just woken up earlier.");
    }
    function ChooseTask() {
        let tasks = prompt("You have a long day ahead of you. Looking around your damp cave you notice a few things you need take care of. Your stockpile of [wood] for the firepit is running out, you are out of [herbs] and spices for your kitchen, and you still need to fetch [water] for your morning bath. You also remember, that you need to [set traps] for those pesky adventurers once you are finished with your chores.", "What do you do?");
        switch (tasks) {
            case "wood":
                alert("You wander around the cave entrance, carefully picking up suitable logs and branches. In the distance you hear the faint rhythmic ringing of metal clanking together. You hurry back.");
                ChooseTask();
                break;
            case "herbs":
                alert("You survey the forest for some herbs and gather a handful of weeds. You hear a chopping sound, in the shrubs behind you. You hurry back to your cave.");
                ChooseTask();
                break;
            case "water":
                alert("You hurry to fetch some murky water from the small river nearby. With a bucket full of water you turn to go back home, when suddenly you hear the sound of people splashing through the river. You hurry back.");
                ChooseTask();
                break;
            case "set traps":
                alert("It's time to prepare you home defence.");
                ChooseTrap();
                break;
            default:
                ChooseTask();
                break;
        }
    }
    function ChooseTrap() {
        let trap = prompt("The adventurers are aproaching and you only have time to set up one trap. You could set a [fire] at the entrance of the cave to deter them, you could dig a [pit] filled with pointy sticks, you could collapse one of the tunnels and rain down [rocks] on them, or you could get ready to hide and [ambush] them with your trusty sling.", "Make a choice.");
        switch (trap) {
            case "fire":
                alert("You set fire to the cave and your home start to fill with smoke. The adventurers turn around for now, but you are still stuck and the cave is quickly running out of air. You cough and cough, until you finally pass out. ");
                break;
            case "pit":
                ChoosePit();
                break;
            case "rocks":
                alert("As you hear the adventurers approach you break a load bearing pillar and the ceiling in front of you starts to collapse. An avalanche of rocks and stone bury the adventurers. Digging up their bodies for loot will take a while, but you are looking forward to it.");
                break;
            case "ambush":
                alert("You are one with the surrounding. Invisibile to the naked eye. The adventurers walk past you. You grab a rough stone and sling it at one of the fools. The stone glances off the armor of the knight. Your ambush fails. You try to run, but a knife hits you in the back. You die.");
                break;
            default:
                ChooseTrap();
                break;
        }
    }
    function ChoosePit() {
        let pit = prompt("You carefuly hid the pit with some leaves and dirt. Anxiously you await the adventurers, but soon you hear them spring your trap, then screaming and shouting. The adventurers are stuck in your pit, for now. Do you try to [kill] them, or do you take the chance to [run]?");
        if (pit == "kill") {
            alert("You grab a rough stone and sling it at one of the fools. The stone glances off their armor. Fueled by anger they climb out of the pit. At the last momemnt you try to run, but a knife hits you in the back. You die.");
        }
        else
            alert("You run as fast as your small legs allow you to. You exit the cave and you don't look back as you disappear into the dark forest.");
    }
})(GoblinBoi || (GoblinBoi = {}));

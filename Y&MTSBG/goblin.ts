namespace GoblinBoi {

  let start:string = prompt("You are a young goblin boi, and it is a wonderfully dreary day in your moist cavern. Somehow, rays of light manage to reach the dark depths in which you slumber, prompting you to [wake up]. However, you are tired from the previous night, one full of debauchery, and you wish to keep [sleeping].", "What do you do?")!

      if (start == "wake up") {
        alert("Even though you'd much rather keep sleeping, you reluctantly get up. It takes a short while for you to fully gain your bearings, but once you do, you sigh exasperatedly at the chores you know await you.");
        ChooseTask();
} else {
    let sleep:string = prompt("Your splitting headache makes you toss and turn, but you don't awaken. The day steadily moves on. Soon, your cavern is bathed in light as the sun reaches its zenith in the cloudless sky. Still you [rest], but deep in your subconcious you feel a sudden, urgent need to [wake up].", "What do you do?")!
    if (sleep == "wake up"){
        alert("You awaken with a loud groan. You stretch your short body, a few cracks here and there making you moan in relief. As you briefly register what time of day it is, you let out a slightly panicked screech. You don't have enough time to fully complete all of your chores! Well, surely this won't have any consequences.")
        ChooseTask();
 }  else 
    alert("Loud, echoing footsteps ring out through the main chamber, and you drowsily blink open your eyes. You're barely awake when you catch sight of a looming figure, looking down on you. Your mind tries to supply your body with a sense of urgency, but you're still far too groggy to register the danger you're in. The intruder, on the other hand, upon finding your prone, vulnerable body, makes a noise of confusion. He is perplexed at your carelessness, but without much thought pulls out his dagger. He walks up to you, looks down into your fatigued face, and your slowly opening eyes. With one swift movement, he effortlessly swipes his dagger across your bare throat. Blood wells up along the cut, gushing forth like a red water fountain. As you choke on your own blood, your last thought before succumbing to the fatal wound is how you should have just woken up earlier.")
}

   
    function ChooseTask(): void {
        let tasks = prompt("You have a long day ahead of you. Looking around your damp cave you notice a few things you need take care of, but you only have time for one. You could gather some [wood] for the firepit, gather some [herbs] for your kitchen, fetch [water] for your morning bath, or [set traps] for those pesky adventurers.", "What do you do?")
        switch (tasks) {
            case "wood":
                alert("You gather some firewood.");
                ChooseTask();
                break;
            case "herbs":
                alert("You collect some herbs and spices.");
                ChooseTask();
                break;
            case "water":
                alert("You fetch some murky water.");
                ChooseTask();
                break;
            case "set traps":
                alert("You go to set a trap.");
                ChooseTrap();
                break;
            default:
                ChooseTask();
                break;
        }
    
    }
   
    function ChooseTrap(): void {
        let trap = prompt("The adventurer's are aproaching and you only have time to set up one trap. You could set a [fire], dig a [pit], rain down [rocks] on them, or [ambush] them.", "Make a choice.")
        switch (trap) {
            case "fire":
                alert("You set fire to the cave and your own home.");
                break;
            case "pit":
                alert("They fall down, for now.");
                break;
            case "rocks":
                alert("Rocks bury the adventurers. Digging up their loot will take a while.");
                break;
            case "ambush":
                alert("Your ambush fails.");
                break;
            default:
                ChooseTrap();
                break;
        }
    }
}

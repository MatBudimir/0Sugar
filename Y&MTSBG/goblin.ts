// INVENTORY
interface InventoryItem
{
    name: string;
}

class Inventory
{
    public items: InventoryItem[] = [];

    addItem(name: string): void
    {
        this.items.push({ name });
    }

    removeItem(name: string): void
    {
        this.items = this.items.filter(item => item.name !== name);
    }

    hasItem(name: string): boolean
    {
        return this.items.some(item => item.name === name);
    }
}

const inventory = new Inventory();

// NARRATIVE TEXT
let n:
    {
        [key: string]: string;
    } = {
    0: "What do you do?",
    1: "You are a young goblin boi, and it is a wonderfully dreary day in your moist cavern. Somehow, rays of light manage to reach the dark depths in which you slumber, prompting you to [wake up]. However, you are tired from the previous night, one full of debauchery, and you wish to keep [sleeping].",
    2: "Even though you'd much rather keep sleeping, you reluctantly get up. It takes a short while for you to fully gain your bearings, but once you do, you sigh exasperatedly at the chores you know await you.",
    3: "Your splitting headache makes you toss and turn, but you don't awaken. The day steadily moves on. Soon, your cavern is bathed in light as the sun reaches its zenith in the cloudless sky. Still you [rest], but deep in your subconcious you feel a sudden, urgent need to [wake up].",
    4: "You awaken with a loud groan. You stretch your short body, a few cracks here and there making you moan in relief. As you briefly register what time of day it is, you let out a slightly panicked screech. You don't have enough time to fully complete all of your chores! Well, surely this won't have any consequences.",
    5: "Loud, echoing footsteps ring out through the main chamber, and you drowsily blink open your eyes. You're barely awake when you catch sight of a looming figure, looking down on you. Your mind tries to supply your body with a sense of urgency, but you're still far too groggy to register the danger you're in. The intruder, on the other hand, upon finding your prone, vulnerable body, makes a noise of confusion. He is perplexed at your carelessness, but without much thought pulls out his dagger. He walks up to you, looks down into your fatigued face, and your slowly opening eyes. With one swift movement, he effortlessly swipes his dagger across your bare throat. Blood wells up along the cut, gushing forth like a red water fountain. As you choke on your own blood, your last thought before succumbing to the fatal wound is how you should have just woken up earlier.",
    6: "You have a long day ahead of you. Looking around your damp cave you notice a few things you need take care of. Your stockpile of [wood] for the firepit is running out, you are out of [herbs] and spices for your kitchen, and you still need to fetch [water] for your morning bath. You also remember, that you need to [set traps] for those pesky adventurers once you are finished with your chores.",
    7: "You wander around the cave entrance, carefully picking up suitable logs and branches. In the distance you hear the faint rhythmic ringing of metal clanking together. You hurry back.",
    8: "You survey the forest for some herbs and gather a handful of weeds. You hear a chopping sound, in the shrubs behind you. You hurry back to your cave.",
    9: "You hurry to fetch some murky water from the small river nearby. With a bucket full of water you turn to go back home, when suddenly you hear the sound of people splashing through the river. You hurry back.",
    10: "The adventurers are aproaching and you only have time to set up one trap. You could set a [fire] at the entrance of the cave to deter them, you could dig a [pit] filled with pointy sticks, you could collapse one of the tunnels and rain down [rocks] on them, or you could get ready to hide and [ambush] them with your trusty sling.",
    11: "You set fire to the cave and your home start to fill with smoke. The adventurers turn around for now, but you are still stuck and the cave is quickly running out of air. You cough and cough, until you finally pass out.",
    12: "As you hear the adventurers approach you break a load bearing pillar and the ceiling in front of you starts to collapse. An avalanche of rocks and stone bury the adventurers. Digging up their bodies for loot will take a while, but you are looking forward to it.",
    13: "You are one with the surrounding. Invisibile to the naked eye. The adventurers walk past you. You grab a rough stone and sling it at one of the fools. The stone glances off the armor of the knight. Your ambush fails. You try to run, but a knife hits you in the back. You die.",
    14: "You carefully hid the pit with some leaves and dirt. Anxiously you await the adventurers, but soon you hear them spring your trap, then screaming and shouting. The adventurers are stuck in your pit, for now. Do you try to [kill] them, or do you take the chance to [run]?",
    15: "You grab a rough stone and sling it at the fools, but the stones glance off their armor. Fueled by anger they climb out of the pit. At the last momemnt you try to run, but a knife hits you in the back. You die.",
    16: "You run as fast as your small legs allow you to. You exit the cave and you don't look back as you disappear into the dark forest.",
    17: "You have to finish at least one of your chores before you set your trap.",
    18: "You grab a rough stone and sling it at the fools, hitting one of them straight between the eyes. A critical hit! Inspired by your success you rain down a hail of stones at the trespassers. The succumb to their wounds before they could climb out of the pit. The spoils are yours.",
    19: "You are missing the required materials for this trap.",
    20: "You set fire to the cave and your home start to fill with smoke. The adventurers turn around for now, but you are still stuck and the cave. You dunk a piece of cloth into your bucket of water and cover your face as you crawl on the ground, avoiding the smoke. You make your way out of the cave through one of your sectret tunnels. You wait impatiently for the smoke to clear so you can return home.",
    21: "You hear footsteps in the distance. Darn! You wasted too much time sleeping in. You must hurry and set up your trap."
};

// FUNCTIONS
function WakeUp(): void
{
    let start: string = prompt(n[1], n[0])!;
    if (start == "wake up")
    {
        alert(n[2]);
        ChooseTask();
    } else if (start == "sleeping")
    {
        WakeUpAgain();
    } else
    {
        WakeUp();
    }
}

function WakeUpAgain(): void
{
    let sleep: string = prompt(n[3], n[0])!;
    if (sleep == "wake up")
    {
        alert(n[4]);
        inventory.addItem("Tired");
        ChooseTask();
    } else if (sleep == "rest")
    {
        alert(n[5]);
    }
    else
    {
        WakeUpAgain();
    }
}

function ChooseTask(): void
{
    let tasks: string = prompt(n[6], n[0])!;
    switch (tasks)
    {
        case "wood":
            alert(n[7]);
            inventory.addItem("Wood");
            IsItLate();
            break;
        case "herbs":
            alert(n[8]);
            inventory.addItem("Herbs");
            IsItLate();
            break;
        case "water":
            alert(n[9]);
            inventory.addItem("Water");
            IsItLate();
            break;
        case "set traps":
            if (inventory.hasItem("Water") || inventory.hasItem("Herbs") || inventory.hasItem("Wood"))
            {
                ChooseTrap();
            }
            else
            {
                alert(n[17]);
                IsItLate();
            }
            break;
        default:
            ChooseTask();
            break;
    }
}

function ChooseTrap(): void
{
    let trap: string = prompt(n[10], n[0])!;
    switch (trap)
    {
        case "fire":
            if (inventory.hasItem("Wood"))
            {
                if (inventory.hasItem("Water"))
                {
                    alert(n[20]);
                } else
                {
                    alert(n[11]);
                }
            } else
            {
                alert(n[19]);
                ChooseTrap();
            }
            break;
        case "pit":
            if (inventory.hasItem("Wood"))
            {
                ChoosePit();
            } else
            {
                alert(n[19]);
                ChooseTrap();
            }
            break;
        case "rocks":
            alert(n[12]);
            break;
        case "ambush":
            alert(n[13]);
            break;
        default:
            ChooseTrap();
            break;
    }
}

function ChoosePit(): void
{
    let pit: string = prompt(n[14], n[0])!;
    if (pit == "kill")
    {
        if (inventory.hasItem("Tired"))
        {
            alert(n[15]);
        } else
        {
            alert(n[18]);
        }
    } else
        alert(n[16]);
}

function IsItLate(): void
{
    if (inventory.hasItem("Tired"))
    {
        alert(n[21]);
        ChooseTrap();
    } else
    {
        ChooseTask();
    }
}

//START GAME
WakeUp();
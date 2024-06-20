console.log("Hello!");

namespace GoblinBoi {

    let start = prompt("You are a young goblin boi, and it is a wonderfully dreary day in your moist cavern. Somehow, rays of light manage to reach the dark depths in which you slumber, prompting you to [wake up]. However, you are tired from the previous night, one full of debauchery, and you wish to keep [sleeping]", "What do you do?");

   
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
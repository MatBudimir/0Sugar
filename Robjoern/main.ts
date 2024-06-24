document.addEventListener("DOMContentLoaded", function () {
    var timeoutHandeler: any;
    var delay: number = 200;
    let narration: string = "";

    let texts = [
"The Adventure Begins\n\nYou find yourself standing at the edge of an enchanted forest.You've heard tales of great treasures and magical creatures that lie within. Before you are two paths:\n\nTake the [Left] Path:This path is overgrown with vines and flowers.It's said to be the safer route, but who knows what secrets it holds?\n\nTake the [Right] Path: This path is dark and foreboding.It's known for its dangerous creatures, but also for the treasures that those creatures guard.",
"The Adventure Begins\n\nYou find yourself standing at the edge of an enchanted forest.You've heard tales of great treasures and magical creatures that lie within. Before you are two paths:\n\nTake the [Left] Path:This path is overgrown with vines and flowers.It's said to be the safer route, but who knows what secrets it holds?\n\nTake the [Right] Path: This path is dark and foreboding.It's known for its dangerous creatures, but also for the treasures that those creatures guard.",
"As you proceed down the right path, you encounter a group of goblins who seem to be guarding something precious.\n\n[Confront] the Goblins: You decide to face the goblins head-on and see what they are protecting.\n\n[Sneak] Past the Goblins: You try to sneak past them, hoping to avoid a confrontation.",
"The fox guides you to a hidden grove filled with rare herbs and plants.\n\n[Gather] Herbs: You collect some herbs, thinking they might be useful later.\n\n[Explore] Further: You ask the fox to take you to the next part of the forest.",
"You come across a rickety bridge over a deep chasm. A sign warns of the bridge's instability.\n\n[Cross] the Bridge: Carefully, you try to cross the bridge.\n\n[Find] Another Way: You search for a safer route around the chasm.",
"The goblins challenge you to a game of wits. If you win, they will let you pass and share their treasure.\n\n[Play] the Game: You accept the challenge, confident in your abilities.\n\n[Fight] the Goblins: You decide it's safer to fight your way through.",
"You successfully sneak past the goblins and find a hidden path leading deeper into the forest.\n\n[Follow] the Hidden Path: You follow the path, curious about where it leads.\n\n[Return] to the Main Path: You decide to return to the main path to avoid getting lost.",
"You collect several rare herbs, which might be useful for healing or other purposes.\n\n[Thank] the Fox: You thank the fox and ask it to guide you further.\n\n[Part] Ways: You decide you've had enough of the fox's help and continue alone.",
"The fox leads you to an ancient ruin covered in vines.\n\n[Explore] the Ruin: You decide to explore the ruin, intrigued by its history.\n\nSet Up [Camp]: You choose to set up camp and rest for a while.",
"You safely cross the bridge. As you walk below a large rock formation, you spot a mysterious cave on the left.\n\n[Enter] the Cave: You decide to explore the cave.\n\nKeep [Walk]ing: You choose to continue on the path, which now leads into a thick forest.",
"You find a narrow path that winds down the side of the chasm.\n\nTake the [Narrow] Path: You decide to take the narrow path, despite its difficulty.\n\nTurn [Back]: You decide the risk is too great and turn back to find another route.",
"You win the game and the goblins reward you with a piece of their treasure.\n\n[Take] the Treasure: You accept the treasure and continue on your way.\n\n[Decline] the Treasure: You refuse the treasure, suspecting a trick, and move on.",
"You defeat the goblins. The treasure is yours to take, but it seems suspicious. Could it be a trap?\n\n[Claim] their Treasure: You take the treasure in spite of the potential risk.\n\n[Leave] Quickly: You leave the Treasure behind, aware of the possibility it could be a trap.",
"The hidden path leads you to a secret glade filled with magical creatures.\n\n[Approach] the Creatures: You try to communicate with the creatures.\n\n[Observe] from Afar: You decide to watch them from a distance.",
"You return to the main path and soon find a fork in the road.\n\nTake the [Left] Fork: You choose the left fork, hoping it leads to your destination.\n\nTake the [Right] Fork: You choose the right fork, curious about what lies ahead.",
]

    changeBG("1");//start the story game

    function story(storyPart: string) {
        switch (storyPart) {
            case "1":
                narration = texts[0];
                //timeoutHandeler = setTimeout(decision, delay, narration, "Left", "Right", "2A", "2B", false);
                decision(narration, "Left", "Right", "2A", "2B", false);
                break;
            case "2A":
                narration = ;
                decision(narration, "Accept", "Decline", "3A", "3B", false);
                break;
            case "2B":
                narration = ;
                decision(narration, "Confront", "Sneak", "3C", "3D", false);
                break;
            case "3A":
                narration = ;
                decision(narration, "Gather", "Explore", "4A", "4B", false);
                break;
            case "3B":
                narration = ;
                decision(narration, "Cross", "Find", "4C", "4D", false);
                break;
            case "3C":
                narration = ;
                decision(narration, "Play", "Fight", "4E", "4F", false);
                break;
            case "3D":
                narration = ;
                decision(narration, "Follow", "Return", "4G", "4H", false);
                break;
            case "4A":
                narration = ;
                decision(narration, "Thank", "Part", "5A", "5B", false);
                break;
            case "4B":
                narration = ;
                decision(narration, "Explore", "Camp", "5C", "5D", false);
                break;
            case "4C":
                narration = ;
                decision(narration, "Enter", "Walk", "5E", "5F", false);
                break;
            case "4D":
                narration = ;
                decision(narration, "Narrow", "Back", "5G", "5H", false);
                break;
            case "4E":
                narration = ;
                decision(narration, "Take", "Decline", "5I", "5J", false);
                break;
            case "4F":
                narration = ;
                decision(narration, "Claim", "Leave", "5K", "5L", false);
                break;
            case "4G":
                narration = ;
                decision(narration, "Approach", "Observe", "5M", "5N", false);
                break;
            case "4H":
                narration = ;
                decision(narration, "Left", "Right", "5O", "5P", false);
                break;
            case "5A":
                narration = "you chose right: A or B";
                decision(narration, "", "", "", "", true);
                break;
            case "5B":
                narration = "you chose right: A or B";
                decision(narration, "", "", "", "", true);
                break;
            case "5C":
                narration = "you chose right: A or B";
                decision(narration, "", "", "", "", true);
                break;
            case "5D":
                narration = "you chose right: A or B";
                decision(narration, "", "", "", "", true);
                break;
            case "5H":
                narration = "you chose right: A or B";
                decision(narration, "", "", "", "", true);
                break;
            case "5I":
                narration = "you chose right: A or B";
                decision(narration, "", "", "", "", true);
                break;
            case "5J":
                narration = "you chose right: A or B";
                decision(narration, "", "", "", "", true);
                break;
            case "5K":
                narration = "you chose right: A or B";
                decision(narration, "", "", "", "", true);
                break;
            case "5L":
                narration = "you chose right: A or B";
                decision(narration, "", "", "", "", true);
                break;
            case "5M":
                narration = "you chose right: A or B";
                decision(narration, "", "", "", "", true);
                break;
            case "5N":
                narration = "you chose right: A or B";
                decision(narration, "", "", "", "", true);
                break;
            case "5O":
                narration = "you chose right: A or B";
                decision(narration, "", "", "", "", true);
                break;
            case "5P":
                narration = "you chose right: A or B";
                decision(narration, "", "", "", "", true);
                break;

        }
    }

    function changeBG(bgTag: string) {
        let image = document.getElementById("storyImage") as HTMLImageElement;
        image.src = "Images/" + bgTag + ".jpg";
        document.body.style.backgroundImage = "url('Images/" + bgTag + ".jpg')";
        timeoutHandeler = setTimeout(story, delay, bgTag);
    }

    function decision(narration: string, optionA: string, optionB: string, outcomeA: string, outcomeB: string, end: boolean) {

        let message = prompt(narration);

        if (!end) {
            while (message != optionA && message != optionB) {
                alert("!!!CHOOSE VALID OPTIONS ONLY!!!");
                message = prompt(narration);
            }

            clearTimeout(timeoutHandeler);

            if (message == optionA) {
                changeBG(outcomeA);
            } else if (message == optionB) {
                changeBG(outcomeB);
            }
        } else {
            alert("you reached the end of the Story")
        }
    }

});
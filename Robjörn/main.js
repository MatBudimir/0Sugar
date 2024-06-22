document.addEventListener("DOMContentLoaded", function () {
    var timeoutHandeler;
    var delay = 200;
    var narration = "";
    changeBG("1"); //start the story game
    function story(storyPart) {
        switch (storyPart) {
            case "1":
                narration = "left or right";
                clearTimeout(timeoutHandeler);
                timeoutHandeler = setTimeout(desicion, delay, narration, "left", "right", "2A", "2B", false);
                //desicion(narration, "left", "right", "2A", "2B", false);
                break;
            case "2A":
                narration = "you chose left: A or B";
                desicion(narration, "A", "B", "3A", "3B", false);
                break;
            case "2B":
                narration = "you chose right: A or B";
                desicion(narration, "A", "B", "3C", "3D", false);
                break;
            case "3A":
                narration = "you chose right: A or B";
                desicion(narration, "A", "B", "4A", "4B", false);
                break;
            case "3B":
                narration = "you chose right: A or B";
                desicion(narration, "A", "B", "4C", "4D", false);
                break;
            case "3C":
                narration = "you chose right: A or B";
                desicion(narration, "A", "B", "4E", "4F", false);
                break;
            case "3D":
                narration = "you chose right: A or B";
                desicion(narration, "A", "B", "4G", "4H", false);
                break;
            case "4A":
                narration = "you chose right: A or B";
                desicion(narration, "A", "B", "5A", "5B", false);
                break;
            case "4B":
                narration = "you chose right: A or B";
                desicion(narration, "A", "B", "5C", "5D", false);
                break;
            case "4C":
                narration = "you chose right: A or B";
                desicion(narration, "A", "B", "5E", "5F", false);
                break;
            case "4D":
                narration = "you chose right: A or B";
                desicion(narration, "A", "B", "5G", "5H", false);
                break;
            case "4H":
                narration = "you chose right: A or B";
                desicion(narration, "A", "B", "5I", "5J", false);
                break;
            case "4I":
                narration = "you chose right: A or B";
                desicion(narration, "A", "B", "5K", "5L", false);
                break;
            case "4J":
                narration = "you chose right: A or B";
                desicion(narration, "A", "B", "5M", "5N", false);
                break;
            case "4K":
                narration = "you chose right: A or B";
                desicion(narration, "A", "B", "5O", "5P", false);
                break;
            case "5A":
                narration = "you chose right: A or B";
                desicion(narration, "", "", "", "", true);
                break;
            case "5B":
                narration = "you chose right: A or B";
                desicion(narration, "", "", "", "", true);
                break;
            case "5C":
                narration = "you chose right: A or B";
                desicion(narration, "", "", "", "", true);
                break;
            case "5D":
                narration = "you chose right: A or B";
                desicion(narration, "", "", "", "", true);
                break;
            case "5H":
                narration = "you chose right: A or B";
                desicion(narration, "", "", "", "", true);
                break;
            case "5I":
                narration = "you chose right: A or B";
                desicion(narration, "", "", "", "", true);
                break;
            case "5J":
                narration = "you chose right: A or B";
                desicion(narration, "", "", "", "", true);
                break;
            case "5K":
                narration = "you chose right: A or B";
                desicion(narration, "", "", "", "", true);
                break;
            case "5L":
                narration = "you chose right: A or B";
                desicion(narration, "", "", "", "", true);
                break;
            case "5M":
                narration = "you chose right: A or B";
                desicion(narration, "", "", "", "", true);
                break;
            case "5N":
                narration = "you chose right: A or B";
                desicion(narration, "", "", "", "", true);
                break;
            case "5O":
                narration = "you chose right: A or B";
                desicion(narration, "", "", "", "", true);
                break;
            case "5P":
                narration = "you chose right: A or B";
                desicion(narration, "", "", "", "", true);
                break;
        }
    }
    function changeBG(bgTag) {
        var image = document.getElementById("storyImage");
        image.src = "images/" + bgTag + ".jpg";
        document.body.style.backgroundImage = "url('images/" + bgTag + ".jpg')";
        timeoutHandeler = setTimeout(story, delay, bgTag);
    }
    function desicion(narration, optionA, optionB, outcomeA, outcomeB, end) {
        /*let narrator = document.getElementById("narrator") as HTMLParagraphElement;
        let myTimeout = setTimeout(() => {
            narrator.innerHTML = narration;
        },delay);*/
        //let message = prompt("choose: " + optionA + " or " + optionB + "");
        var message = prompt(narration);
        if (!end) {
            while (message != optionA && message != optionB) {
                alert("!!!CHOOSE VALID OPTIONS ONLY!!!");
                message = prompt(narration);
            }
            clearTimeout(timeoutHandeler);
            if (message == optionA) {
                changeBG(outcomeA);
            }
            else if (message == optionB) {
                changeBG(outcomeB);
            }
        }
        else {
            alert("you reached the end of the Story");
        }
    }
});
/*switch (storyPart) {
            case "1":
                while (message == "") {
                    message = prompt("Level 1: The Adventure Begins\n You find yourself standing at the edge of an enchanted forest.\n Youve heard tales of great treasures and magical creatures that lie within.\n Before you are two paths:\n Take the Path to the Left[a]: This path is overgrown with vines and flowers. Its said to be the safer route, but who knows what secrets it holds?\n Take the Path to the Right[b]: This path is dark and foreboding. Its known for its dangerous creatures, but also for the treasures that those creatures guard.");
                    if (message == "a") {
                        message = "";
                        clearTimeout(timeoutHandeler);
                        changeBG("2A");
                        break;
                    }
                    else if (message == "b") {
                        message = "";
                        clearTimeout(timeoutHandeler);
                        changeBG("2B");
                        break;
                    }
                }
                break;
            case "2A":
                while (message == "") {
                    message = prompt("Level 2: Left Path\n As you walk along the left path, you come across a talking fox. The fox offers to guide you through the forest in exchange for a favor.\n Accept the Fox's Offer[a]: You agree to the fox's terms, curious about the favor it might ask for later.\n Decline the Fox's Offer[b]: You decide to trust your own instincts and continue walking alone")
                    if (message == "a") {
                        message = "";
                        clearTimeout(timeoutHandeler);
                        changeBG("3A");
                        break;
                    }
                    else if (message == "b") {
                        message = "";
                        clearTimeout(timeoutHandeler);
                        changeBG("3B");
                        break;
                    }
                }
                break;

            case "2B":
                while (message == "") {
                    message = prompt("Level 2: Right Path\n Option 2A: As you proceed down the right path, you encounter a group of goblins who seem to be guarding something precious.\n Confront the Goblins[a]: You decide to face the goblins head-on and see what they are protecting.\n Sneak Past the Goblins[b]: You try to sneak past them, hoping to avoid a confrontation.");
                    if (message == "a") {
                        message = "";
                        clearTimeout(timeoutHandeler);
                        changeBG("3C");
                        break;
                    }
                    else if (message == "b") {
                        message = "";
                        clearTimeout(timeoutHandeler);
                        changeBG("3D");
                        break;
                    }
                }
                break;

        }*/
//setTimeout(function(){
//    console.log("Hello World");
//}, 2000);
//document.getElementById("Output").innerHTML = "how are you";
//upsate
//function changeBackground(color) {
//    document.body.style.background = color;
//}
//if (message == "right"){
//    message = "";
//    while (message == ""){
//        message = prompt("");
//    }
//}else if (message == "left"){
//    message = "";
//    while (message == ""){
//        message = prompt("");
//    }
//}

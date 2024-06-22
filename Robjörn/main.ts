document.addEventListener("DOMContentLoaded", function () {
    let message: string | null = "";
    var timeoutHandeler: any;
    var delay: number = 200;
    changeBG("1");

    function story(storyPart: string) {
        switch (storyPart) {
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
        }
    }

    function changeBG(bgTag: string) {
        document.body.style.backgroundImage = "url('images/" + bgTag + ".jpg')";
        timeoutHandeler = setTimeout(story, delay, bgTag);
    }




});


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
document.addEventListener("DOMContentLoaded", function () {
    var message1 = "";
    /*class Background {
        private bg: string;

        constructor() {
            this.bg = "";
        }

        public getBG(): string {
            return this.bg;
        }

        public setBG(background: string) {
            this.bg = background;
        }
    }

    let bg = new Background();
    bg.setBG("1");*/
    changeBG("1");
    function story(storyPart) {
        switch (storyPart) {
            case "1":
                while (message1 == "") {
                    message1 = prompt("Level 1: The Adventure Begins\n You find yourself standing at the edge of an enchanted forest.\n Youve heard tales of great treasures and magical creatures that lie within.\n Before you are two paths:\n Take the Path to the Left: This path is overgrown with vines and flowers. Its said to be the safer route, but who knows what secrets it holds?\n Take the Path to the Right: This path is dark and foreboding. Its known for its dangerous creatures, but also for the treasures that those creatures guard.");
                    if (message1 == "a") {
                        message1 = "";
                        //bg.setBG("2A");
                        setTimeout(changeBG, 1000, "2A");
                        while (message1 == "") {
                            message1 = prompt("Level 2: Left Path\n As you walk along the left path, you come across a talking fox. The fox offers to guide you through the forest in exchange for a favor.\n Accept the Fox's Offer: You agree to the fox's terms, curious about the favor it might ask for later.\n Decline the Fox's Offer: You decide to trust your own instincts and continue walking alone");
                        }
                    }
                    else if (message1 == "b") {
                        message1 = "";
                        //bg.setBG("2B");
                        setTimeout(changeBG, 1000, "2B");
                        while (message1 == "") {
                            message1 = prompt("Level 2: Right Path\n Option 2A: As you proceed down the right path, you encounter a group of goblins who seem to be guarding something precious.\n Confront the Goblins: You decide to face the goblins head-on and see what they are protecting.\n Sneak Past the Goblins: You try to sneak past them, hoping to avoid a confrontation.");
                        }
                    }
                }
        }
    }
    function changeBG(bgTag) {
        //let bgTag: string = bg.getBG();
        document.body.style.backgroundImage = "url('images/" + bgTag + ".jpg')";
        setTimeout(story, 1000, bgTag);
    }
    //setTimeout(function(){
    //    console.log("Hello World");
    //}, 2000);
    //document.getElementById("Output").innerHTML = "how are you";
    //upsate
    //function changeBackground(color) {
    //    document.body.style.background = color;
    //}
});
//if (message1 == "right"){
//    message1 = "";
//    while (message1 == ""){
//        message1 = prompt("");
//    }
//}else if (message1 == "left"){
//    message1 = "";
//    while (message1 == ""){
//        message1 = prompt("");
//    }
//}

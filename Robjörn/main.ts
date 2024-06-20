document.addEventListener("DOMContentLoaded", function() {
    
    let message1 : string|null = "";

    while (message1 != "Hi"){
        
        message1 = prompt("Hello");

    }

    document.getElementById("Output").innerHTML = "how are you";
    

    //function changeBackground(color) {
    //    document.body.style.background = color;
    //}
});
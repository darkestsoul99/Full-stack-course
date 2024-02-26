var numberOfDrumsButtons = document.querySelectorAll(".drum").length;
var keyList = {
    "w": "tom-1",
    "a": "tom-2",
    "s": "tom-3",
    "d": "tom-4",
    "j": "snare",
    "k": "crash",
    "l": "kick-bass"
}

for (var i=0; i<numberOfDrumsButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    if (key in keyList) {
        var audio = new Audio("sounds/" + keyList[key] + ".mp3");
        audio.play();
    }
}

function buttonAnimation(key) {
    if (key in keyList) {
        var activeButton = document.querySelector("." + key);
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
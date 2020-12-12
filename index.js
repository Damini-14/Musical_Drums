
//Button press
var numberOfButtons = document.querySelectorAll(".drum").length;
for(i=0; i<numberOfButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

   var buttonInnerHTML = this.innerHTML;
   makeSound(buttoninnerHTML);

  buttonAnimation(buttonInnerHTML);
  });

}
//Key press
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){

  switch (key) {
    case "w":
    var audio = new Audio("tom-1.mp3");
    audio.play();

    case "a":
    var audio = new Audio("tom-2.mp3");
    audio.play();

    case "s":
    var audio = new Audio("tom-3.mp3");
    audio.play();

    case "d":
    var audio = new Audio("tom-4.mp3");
    audio.play();

    case "j":
    var audio = new Audio("crash.mp3");
    audio.play();

    case "k":
    var audio = new Audio("kick.mp3");
    audio.play();

    case "l":
    var audio = new Audio("snare.mp3");
    audio.play();

      break;
    default:

  }

}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

var btn = document.querySelectorAll("button");

for (btns of btn) {
  btns.addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    switcher(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown",function(event)
{
  var key=event.key;
  switcher(key);
  buttonAnimation(key);
});


function switcher(input)
{
  switch(input)
  {
    case "w" :
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    break;

    case "a" :
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    break;

    case "s" :
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    break;

    case "d" :
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    break;

    case "j" :
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    break;

    case "k" :
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    break;

    case "l" :
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    break;

    default : console.log("Wrong Input : "+event.key);
  }
}

function buttonAnimation(currentKey)
{
  var activeKey = document.querySelector("."+currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function(){activeKey.classList.remove("pressed")},200);
}

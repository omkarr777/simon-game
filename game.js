var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStart = false;
var level = 0;
//for keyboard pressing

$(document).keydown(function() {
  if (!gameStart) {

    nextSequence();
    gameStart = true;
  }


});

//for nextSequence
function nextSequence() {
  level++;
userClickedPattern = [];
  $("#level-title").text("Level " + level);
  var randomNumber = Math.round((Math.random(randomNumber) * 3));
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  makeSound(randomChosenColor);
}

//for color clicked
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  makeSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
})

//for checking answer
function checkAnswer(currentLevel) {
  console.log(gamePattern);
  console.log(userClickedPattern);
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(nextSequence, 1000);

        }
    }

  else {
    makeSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    gameStart = false;
    level = 0;
    gamePattern=[];

  }
}
//for animation
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed")
  }, 100);
}

//for sounds
function makeSound(color) {
  switch (color) {
    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;
    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;
    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;
    default:
      var wrong = new Audio("sounds/wrong.mp3");
      wrong.play();
  }
}

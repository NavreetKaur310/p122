x = 0;
y = 0;
screen_width = window.innerWidth;
screen_height = window.innerHeight;
draw_apple = "";
speak_data = "";
to_number = "";

function preload(){
  apple = loadImage('apple.png');
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function speak(){
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
  speak();
} 
 
recognition.onresult = function(event) {
 to_number = Number(content);
 if(Number.isInteger(to_number))
 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    if(content =="apple"){
      document.getElementById("status").innerHTML = "Started drawing apple.";
      draw_apple = "set";
    }else{
      document.getElementById("status").innerHTML = "The speech has not recognized a number ";
    }

}

function setup() {
  canvas = createCanvas(900, 600);
  canvas.position(150);
  screen_width = window.innerWidth;
  screen_height = window.innerHeight
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
  for(var i = 1; i <= to_number; i++){
    x = Math.floor(Math.random()*700);
    y = Math.floor(Math.random()*400);
    image(apple, x, y, 50, 50);
  }
}



// global constants
var clueHoldTime = 1000; 
const cluePauseTime = 333; 
const nextClueWaitTime = 1000; 
//Global Variables
var result = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; 
//aded features
var btn_one_cricket;
var btn_three_leaves;
var btn_six_bubble;
var guessCounter = 0;
var mistakes = 3;
var Timer;

function removeaddButtons(){
  document.querySelector("#time > span").innerhtml = "20";
  document.querySelector("#time > span").style.color = "yellow";
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("time").classList.remove("hidden");
}

function startGame(){
  clearInterval(Timer);
  progress = 0;
  gamePlaying = true;
  random();
  removeaddButtons()
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  mistakes = 3;
  clearInterval(Timer);
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.querySelector("#strikes > span").innerHTML = mistakes;
}

function random() {
    let n = 0;
    for (let i=0; i<8; i++) {
      n = Math.floor(Math.random() * 5)+1;
      result[i]=n;
    }
  }

function clearMistakesToWhite(){
    document.querySelector("#strikes > span").style.color="green";
  }

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function startTimer(){
  var remain_time = 20;
  document.querySelector("#time > span").innerhtml = "20";
  document.querySelector("#time > span").style.color = "yellow";
  Timer = setInterval(function(){
    if(remain_time <= 0){
       clearInterval(Timer);
      loseGame();  
    }
    if(remain_time <=3){
        document.querySelector("#time > span").style.color = "red";
    }
    document.querySelector("#time > span").innerHTML = remain_time;
    remain_time -= 1;
  }, 1000);
  document.querySelector("#time > span").innerhtml = "20";
  document.querySelector("#time > span").style.color = "green";

}

function playClueSequence(){
  document.querySelector("#time > span").innerhtml = "20";
  document.querySelector("#time > span").style.color = "green";
  clearInterval(Timer)
  guessCounter = 0;
  clueHoldTime = clueHoldTime - (20 * progress);
  let tempClueHoldTime = clueHoldTime;
  let delay = nextClueWaitTime; 
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + result[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,result[i]) 
    delay += clueHoldTime 
    delay += cluePauseTime;
    if(progress <=2){
      clueHoldTime = clueHoldTime - 25;
    }else if(progress <=5){
      clueHoldTime = clueHoldTime - 30;
    }else {
      clueHoldTime = clueHoldTime - 40;
    }
  }
  clearInterval(Timer)
  clueHoldTime = tempClueHoldTime;
  document.querySelector("#time > span").innerhtml = "20";
  document.querySelector("#time > span").style.color = "yellow";
  setTimeout(startTimer, delay-nextClueWaitTime);

}

function loseGame(){
  stopTone();
  setTimeout(function() {
    stopGame();
    document.querySelector("#time > span").innerHTML = 20;
  	alert("Game Over. You lost.");
  },100);
}

function winGame(){
  stopGame();
  alert("Game Over. You won!."); 
}

function guess(btn){
  context.resume()
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn == result[guessCounter]){
    if(guessCounter == progress){
      if(guessCounter == result.length-1){
        clearInterval(Timer);
        winGame();
      }else{
        clearInterval(Timer);
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    if(mistakes == 1){
      mistakes--;
      document.querySelector("#strikes > span").innerHTML = mistakes;
      document.querySelector("#strikes > span").style.color="red";
      setTimeout(function(){
        clearMistakesToWhite();
      },200)
      loseGame();
    }else{
      mistakes--;
      document.querySelector("#strikes > span").innerHTML = mistakes;
      document.querySelector("#strikes > span").style.color="red";
      setTimeout(function(){
        clearMistakesToWhite();
      },200)
    }  
  }
}

// Sound Synthesis Functions

btn_one_cricket = new Audio("https://cdn.glitch.global/7aa51dcb-5635-4748-b05a-8caa5bf70961/mixkit-small-cricket-screech-1781.wav?v=1647404129175");
btn_three_leaves = new Audio("https://cdn.glitch.global/7aa51dcb-5635-4748-b05a-8caa5bf70961/mixkit-dry-leaves-rustling-2430.wav?v=1647403367405");
btn_six_bubble = new Audio("https://cdn.glitch.global/7aa51dcb-5635-4748-b05a-8caa5bf70961/mixkit-liquid-bubble-3000.wav?v=1647403838704");

const freqMap = {
  1: btn_one_cricket,
  2: 310,
  3: btn_three_leaves,
  4: 476.2,
  5: 500,
  6: btn_six_bubble ,
}
function playTone(btn,len){ 
  if (btn==1)
    {
      btn_one_cricket.play();
      setTimeout(60);
    }
  else if (btn==3)
    {
      btn_three_leaves.play();
      setTimeout(60);
    }
  else if (btn==6)
  {
    btn_six_bubble.play();
    setTimeout(60);
  }
  else{
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
      }
}
function startTone(btn){
   if(!tonePlaying){
     context.resume()
     if (btn==1)
     {
       btn_one_cricket.play();
      setTimeout(60);
     }
     else if (btn==3)
     {
       btn_three_leaves.play();
       setTimeout(60);
     }
     else if (btn==6)
     {
       btn_six_bubble.play();
       setTimeout(60);
     }
     else{
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
    }
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
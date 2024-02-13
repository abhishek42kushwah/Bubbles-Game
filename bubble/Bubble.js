var timer = 60;
var scoreInt = 0;
var hitNum = 0;

GetHit = () => {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitNum;
};

BubbleMake = () => {
  var number = " ";
  for (var i = 1; i <= 126; i++) {
    var num = Math.floor(Math.random() * 10);
    number += `<div id="bubble">${num}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = number;
};

TimerMake = () => {
  var timerIn = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#tim").textContent = timer;
    } else {
      clearInterval(timerIn);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
};

ScoreMake = () => {
  scoreInt += 10;
  document.querySelector("#scr").innerText = `${scoreInt}`;
};

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var numBer = Number(dets.target.textContent);
  if (numBer === hitNum) {
    GetHit();
    BubbleMake();
    ScoreMake();
  }
});

GetHit();
TimerMake();
BubbleMake();

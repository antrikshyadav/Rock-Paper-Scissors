let comp = document.getElementById("comp");
let user1 = document.getElementById("use");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let username = document.querySelector(".name");
let score = document.getElementById("score");
let a = 0;
username.value = prompt("enter your name");
function computer() {
  rand = Math.floor(Math.random() * (4 - 1) + 1);
  switch (rand) {
    case 1:
      comp.style.backgroundImage = "url(paper.gif)";
      comp.style.backgroundSize = "cover";
      break;
    case 2:
      comp.style.backgroundImage = "url(scissor.gif)";
      comp.style.backgroundSize = "cover";
      break;
    case 3:
      comp.style.backgroundImage = "url(rock.gif)";
      comp.style.backgroundSize = "cover";
      break;
  }
}

function user(n) {
  switch (n) {
    case 1:
      user1.style.backgroundImage = "url(paper.gif)";
      user1.style.backgroundSize = "cover";
      break;
    case 2:
      user1.style.backgroundImage = "url(scissor.gif)";
      user1.style.backgroundSize = "cover";
      break;
    case 3:
      user1.style.backgroundImage = "url(rock.gif)";
      user1.style.backgroundSize = "cover";
      break;
  }
}

function scoree(m) {
  if ((rand == 1 && m == 2) || (rand == 2 && m == 3) || (rand == 3 && m == 1)) {
    document.querySelector("body").style.backgroundImage = "url(user_win1.gif)";
    document.querySelector("body").style.backgroundSize = "cover";
    setTimeout(() => {
      document.querySelector("body").style.background = "#e5e5e5";
    }, 5000);
    score.innerHTML = `score ${a}`;
    a++;
  } else {
  }
}

btn1.addEventListener("click", () => {
  computer();
  scoree(1);
});
btn2.addEventListener("click", () => {
  computer();
  scoree(2);
});
btn3.addEventListener("click", () => {
  computer();
  scoree(3);
});

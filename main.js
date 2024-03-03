// let box = document.querySelector(".boxs");
let title = document.querySelector(".title");
let turn = "X";
let arr = [];

function final(num1, num2, num3) {
  document.getElementById(`item` + num1).style.background = "#000";
  document.getElementById(`item` + num2).style.background = "#000";
  document.getElementById(`item` + num3).style.background = "#000";

  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    arr[i] = document.getElementById(`item${i}`).innerHTML;
  }
  if (arr[1] === arr[2] && arr[2] === arr[3] && arr[1] != "") {
    title.innerHTML = `${arr[1]} winner`;
    final(1, 2, 3);
  } else if (arr[4] === arr[5] && arr[5] === arr[6] && arr[4] != "") {
    title.innerHTML = `${arr[4]} winner`;
    final(4, 5, 6);
  } else if (arr[7] === arr[8] && arr[8] === arr[9] && arr[7] != "") {
    title.innerHTML = `${arr[7]} winner`;
    final(7, 8, 9);
  } else if (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] != "") {
    title.innerHTML = `${arr[1]} winner`;
    final(1, 4, 7);
  } else if (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] != "") {
    title.innerHTML = `${arr[2]} winner`;
    final(2, 5, 8);
  } else if (arr[3] === arr[6] && arr[6] === arr[9] && arr[3] != "") {
    title.innerHTML = `${arr[3]} winner`;
    final(3, 6, 9);
  } else if (arr[1] === arr[5] && arr[5] === arr[9] && arr[1] != "") {
    title.innerHTML = `${arr[1]} winner`;
    final(1, 5, 9);
  } else if (arr[3] === arr[5] && arr[5] === arr[7] && arr[3] != "") {
    title.innerHTML = `${arr[3]} winner`;
    final(3, 5, 7);
  }
}

function game(id) {
  let el = document.getElementById(id);
  if (turn == "X" && el.innerHTML == "") {
    el.innerHTML = "X";
    title.innerHTML = "O";
    turn = "O";
  } else if (turn == "O" && el.innerHTML == "") {
    el.innerHTML = "O";
    title.innerHTML = "X";
    turn = "X";
  }
  winner();
}

let rest = document.getElementById("rest");
rest.onclick = () => location.reload();

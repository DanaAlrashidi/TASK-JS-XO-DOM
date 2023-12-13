// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

function clickButton(index) {
  // Checking if Player X won or not and after

  if (clickButton(1) == "X" && clickButton(3) == "X" && clickButton(5) == "X") {
    fillButton(1, "X");
    fillButton(3, "X");
    fillButton(5, "X");
    document.getElementById(index).innerHTML = "Player X won";
  } else if (
    clickButton(1) == "X" &&
    clickButton(4) == "X" &&
    clickButton(7) == "X"
  ) {
    fillButton(1, "X");
    fillButton(4, "X");
    fillButton(7, "X");
    document.getElementById(index).innerHTML = "Player X won";
  } else if (
    clickButton(7) == "X" &&
    clickButton(8) == "X" &&
    clickButton(9) == "X"
  ) {
    fillButton(7, "X");
    fillButton(8, "X");
    fillButton(9, "X");
    document.getElementById(index).innerHTML = "Player X won";
  } else if (
    clickButton(3) == "X" &&
    clickButton(6) == "X" &&
    clickButton(9) == "X"
  ) {
    fillButton(3, "X");
    fillButton(6, "X");
    fillButton(9, "X");
    document.getElementById(index).innerHTML = "Player X won";
  } else if (
    clickButton(1) == "X" &&
    clickButton(5) == "X" &&
    clickButton(9) == "X"
  ) {
    fillButton(1, "X");
    fillButton(5, "X");
    fillButton(9, "X");
    document.getElementById(index).innerHTML = "Player X won";
  } else if (
    clickButton(3) == "X" &&
    clickButton(5) == "X" &&
    clickButton(7) == "X"
  ) {
    fillButton(3, "X");
    fillButton(5, "X");
    fillButton(7, "X");
    document.getElementById(index).innerHTML = "Player X won";
  } else if (
    clickButton(2) == "X" &&
    clickButton(5) == "X" &&
    clickButton(8) == "X"
  ) {
    fillButton(2, "X");
    fillButton(5, "X");
    fillButton(8, "X");
    document.getElementById(index).innerHTML = "Player X won";
  } else if (
    clickButton(1) == "X" &&
    clickButton(2) == "X" &&
    clickButton(3) == "X"
  ) {
    fillButton(1, "X");
    fillButton(2, "X");
    fillButton(3, "X");
    document.getElementById(index).innerHTML = "Player X won";
  } else if (
    clickButton(4) == "X" &&
    clickButton(5) == "X" &&
    clickButton(6) == "X"
  ) {
    fillButton(4, "X");
    fillButton(5, "X");
    fillButton(6, "X");
    document.getElementById(index).innerHTML = "Player X won";
  } else if (
    clickButton(2) == "O" &&
    clickButton(4) == "O" &&
    clickButton(6) == "O"
  ) {
    fillButton(2, "O");
    fillButton(4, "O");
    fillButton(6, "O");
    document.getElementById(index).innerHTML = "Player O won";
  } else if (
    clickButton(1) == "O" &&
    clickButton(4) == "O" &&
    clickButton(7) == "O"
  ) {
    fillButton(1, "O");
    fillButton(4, "O");
    fillButton(7, "O");
    document.getElementById(index).innerHTML = "Player O won";
  } else if (
    clickButton(7) == "O" &&
    clickButton(8) == "O" &&
    clickButton(9) == "O"
  ) {
    fillButton(7, "O");
    fillButton(8, "O");
    fillButton(9, "O");
    document.getElementById(index).innerHTML = "Player O won";
  } else if (
    clickButton(3) == "O" &&
    clickButton(6) == "O" &&
    clickButton(9) == "O"
  ) {
    fillButton(3, "O");
    fillButton(6, "O");
    fillButton(9, "O");
    document.getElementById(index).innerHTML = "Player O won";
  } else if (
    clickButton(1) == "O" &&
    clickButton(5) == "O" &&
    clickButton(9) == "O"
  ) {
    fillButton(1, "O");
    fillButton(5, "O");
    fillButton(9, "O");
    document.getElementById(index).innerHTML = "Player O won";
  } else if (
    clickButton(3) == "O" &&
    clickButton(5) == "O" &&
    clickButton(7) == "O"
  ) {
    fillButton(3, "O");
    fillButton(5, "O");
    fillButton(7, "O");
    document.getElementById(index).innerHTML = "Player O won";
  } else if (
    clickButton(2) == "O" &&
    clickButton(5) == "O" &&
    clickButton(8) == "O"
  ) {
    fillButton(2, "O");
    fillButton(5, "O");
    fillButton(8, "O");
    document.getElementById(index).innerHTML = "Player O won";
  } else if (
    clickButton(1) == "O" &&
    clickButton(2) == "O" &&
    clickButton(3) == "O"
  ) {
    fillButton(1, "O");
    fillButton(2, "O");
    fillButton(3, "O");
    document.getElementById(index).innerHTML = "Player O won";
  } else if (
    clickButton(4) == "O" &&
    clickButton(5) == "O" &&
    clickButton(6) == "O"
  ) {
    fillButton(4, "O");
    fillButton(5, "O");
    fillButton(6, "O");
    document.getElementById(index).innerHTML = "Player O won";
  } // Checking of Player 1 finish
  // Here, Checking about Tie
  else if (
    (clickButton(1) == "X" || clickButton(1) == "O") &&
    (clickButton(2) == "X" || clickButton(2) == "O") &&
    (clickButton(3) == "X" || clickButton(3) == "O") &&
    (clickButton(4) == "X" || clickButton(4) == "O") &&
    (clickButton(5) == "X" || clickButton(5) == "O") &&
    (clickButton(6) == "X" || clickButton(6) == "O") &&
    (clickButton(7) == "X" || clickButton(7) == "O") &&
    (clickButton(8) == "X" || clickButton(8) == "O") &&
    (clickButton(9) == "X" || clickButton(9) == "O")
  ) {
    document.getElementById(index).innerHTML = "Match Tie";
  }
}

// Here onwards, functions check turn of the player
flag = 1;
function clickButton1() {
  if (flag == 1) {
    document.getElementById("1").innerHTML = "X";
    document.getElementById("1").innerHTML = true;
    flag = 0;
  } else {
    document.getElementById("1").innerHTML = "O";
    document.getElementById("1").innerHTML = true;
    flag = 1;
  }
}

function clickButton2() {
  if (flag == 1) {
    document.getElementById("2").innerHTML = "X";
    document.getElementById("2").innerHTML = true;
    flag = 0;
  } else {
    document.getElementById("2").innerHTML = "O";
    document.getElementById("2").innerHTML = true;
    flag = 1;
  }
}

function clickButton3() {
  if (flag == 1) {
    document.getElementById("3").innerHTML = "X";
    document.getElementById("3").innerHTML = true;
    flag = 0;
  } else {
    document.getElementById("3").innerHTML = "O";
    document.getElementById("3").innerHTML = true;
    flag = 1;
  }
}

function clickButton4() {
  if (flag == 1) {
    document.getElementById("4").innerHTML = "X";
    document.getElementById("4").innerHTML = true;
    flag = 0;
  } else {
    document.getElementById("4").innerHTML = "O";
    document.getElementById("4").innerHTML = true;
    flag = 1;
  }
}

function clickButton5() {
  if (flag == 1) {
    document.getElementById("5").innerHTML = "X";
    document.getElementById("5").innerHTML = true;
    flag = 0;
  } else {
    document.getElementById("5").innerHTML = "O";
    document.getElementById("5").innerHTML = true;
    flag = 1;
  }
}

function clickButton6() {
  if (flag == 1) {
    document.getElementById("6").innerHTML = "X";
    document.getElementById("6").innerHTML = true;
    flag = 0;
  } else {
    document.getElementById("6").innerHTML = "O";
    document.getElementById("6").innerHTML = true;
    flag = 1;
  }
}

function clickButton7() {
  if (flag == 1) {
    document.getElementById("7").innerHTML = "X";
    document.getElementById("7").innerHTML = true;
    flag = 0;
  } else {
    document.getElementById("7").innerHTML = "O";
    document.getElementById("7").innerHTML = true;
    flag = 1;
  }
}

function clickButton8() {
  if (flag == 1) {
    document.getElementById("8").innerHTML = "X";
    document.getElementById("8").innerHTML = true;
    flag = 0;
  } else {
    document.getElementById("8").innerHTML = "O";
    document.getElementById("8").innerHTML = true;
    flag = 1;
  }
}

function clickButton6() {
  if (flag == 1) {
    document.getElementById("9").innerHTML = "X";
    document.getElementById("9").innerHTML = true;
    flag = 0;
  } else {
    document.getElementById("9").innerHTML = "O";
    document.getElementById("9").innerHTML = true;
    flag = 1;
  }
}
/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame

// Function to reset game

let userName = "Michael";
userName ? console.log(`Hello, ${userName}`) : console.log("Hello!");

let userQuestion = "Am I going to have a good day tomorrow?";
console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 1:
    console.log("it is certain");
    break;
  case 2:
    console.log("It is decidedly so");
    break;
  case 3:
    console.log("Reply hazy try again later");
    break;
  case 4:
    console.log("Cannot predict now");
    break;
  case 5:
    console.log("Do not count on it");
    break;
  case 6:
    console.log("My sources say no");
    break;
  case 7:
    console.log("Outlook not so good");
  case 8:
    console.log("Signs point to yes");
    break;
  default:
    consolel.log("EMPTY");
}

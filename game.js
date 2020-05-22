var randomNumber=Math.random();
randomNumber=Math.floor(randomNumber*6)+1;
var randomSource="images/dice"+randomNumber+".png";

document.querySelector(".img1").setAttribute("src",randomSource);

var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var randomSource1="images/dice"+randomNumber1+".png";
document.querySelector(".img2").setAttribute("src",randomSource1);

if(randomNumber>randomNumber1){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(randomNumber==randomNumber1){
  document.querySelector("h1").innerHTML="Its a Tie";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}

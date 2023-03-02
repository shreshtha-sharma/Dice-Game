var randomNumber1 = Math.floor(Math.random()*6)+1;
var img =document.querySelectorAll("img")[0];
var randomImage = "images/dice" + randomNumber1 + ".png";
var image = img.setAttribute('src',randomImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var img2 =document.querySelectorAll("img")[1];
var randomImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = img2.setAttribute('src',randomImage2);
var heading = document.querySelectorAll("h1");


// Check if the page has been refreshed before
if (localStorage.getItem('refreshed')) {
    if (randomNumber1>randomNumber2) {
        heading[0].innerHTML = "Player 1 Wins";
    }
    else if (randomNumber1<randomNumber2) {
        heading[0].innerHTML = "Player 2 Wins";
    }
    else{
        heading[0].innerHTML = "Draw";
    }
  } else {
    // Set flag in localStorage to indicate that page has been refreshed
    localStorage.setItem('refreshed', true);
  }
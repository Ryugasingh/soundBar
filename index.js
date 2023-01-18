var randomNumber1 = (Math.random() * 6)  ;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = (Math.random() * 6)  ;
randomNumber2 = Math.floor(randomNumber2);


var randomImage = [ "images/dice1.png" , "images/dice2.png" , "images/dice3.png" ,  "images/dice4.png" , "images/dice5.png" , "images/dice6.png"];
var image = randomImage[randomNumber1] ;
var image2 = randomImage[randomNumber2] ;

document.querySelector("img").setAttribute("src" , image);

document.querySelector("img.image2").setAttribute("src" , image2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "🎉 Team 1 won ";
}

else if(randomNumber1===randomNumber2)
{
     document.querySelector("h1").innerHTML = "Draw 🤮 ";
}

else
{
    document.querySelector("h1").innerHTML = "🎊 Team 2 won ";
}
// generation of random value
playername = localStorage.getItem("playername");
y = Math.floor(Math.random() * 10 + 1);
guess = 1;

function submit()
{
    x = document.getElementById("guessField").value;

    if(x == y)
    {
        alert("Congratulations !!" + playername + "You guessed it right in" + guess + "Guess");
        guess = 1;
    }
    else if(x > y){
        alert("This is the wrong answer try a smaller number");
        guess = guess + 1;
    }
    else{
        alert("This is the wrong answer try a bigger number");
        guess = guess + 1;
    }
}
// count of attempts
// until hit
  function playAgain()
  {
    y = Math.floor(Math.random() * 10 + 1);
  }
// function for the number sent by the user
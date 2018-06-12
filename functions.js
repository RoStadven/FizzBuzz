//Starts the game with 1
let number = 1;
document.getElementById('Number').innerHTML = number;

function wrong(){
  number = 1;
  document.getElementById('Number').innerHTML = number;
  document.getElementById('wrong').innerHTML = "Yikes, that was wrong!";
}

function correct(){
    number++;
    document.getElementById('Number').innerHTML = number;
    document.getElementById('wrong').innerHTML = "";
}

function checkNum(){
  if (number % 3 === 0 || number % 5 === 0){
    wrong();
  } else {
    correct();
    }
  }

function checkFizz(){
  if(number % 3 === 0){
    correct();
  } else {
    wrong();
  }
}

function checkBuzz(){
  if(number % 5 === 0){
    correct();
  } else {
    wrong();
  }
}

function checkFizzBuzz(){
  if (number % 3 === 0 && number % 5 === 0){
    correct();
  } else {
    wrong();
  }
}

//Check console for answer sheet (Only goes up to 100)
  for(let i=1 ; i <= 100; i++){
    let num = "";
    if(i % 3 === 0) {num += "Fizz";}
    if(i % 5 === 0) {num += "Buzz";}
    if(num == "") { num = i;}
    console.log(num);
  }

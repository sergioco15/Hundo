//Create the Controller Function

//Declare a new function that calls the built in getValues function the numbers
function getValues() {
  /* Within the scope-block of the function Create variables that are defined as values contained within the elements possesing the id of the scanned the document*/
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  /*Create a variable which calls the parse integer function*/
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  /*Create an if-else statement where a Number constructor calls the isInteger function with individual parameters of startValue and endValue*/
  if (Number.isInteger(startValue) && Number.isInteger(startValue)) {
    /*Within the scope block of the if statement define a variable which calls the generateNumbers function with the parameters of startValue and endValue*/
    let numbers = generateNumbers(startValue, endValue);

    /*Call the displayValues function using the parameter of numbers, which was passed into the function*/
    displayNumbers(numbers);
  } else {
    /*Within the else portion of the statement enter the Sweet Alert*/
    Swal.fire({
      backdrop: false,
      title: "I'm Sorry",
      text: "Your input was not a number",
    });
  }
}

//Create the Business Logic

/*Declare a new function which calls the built in generateNumbers function and possesses the parameters of start and stop*/
function generateNumbers(start, stop) {
  //Create a variable of numbers which will have it's values entered into an array
  let numbers = [];

  //Create a for-loop which declares a variable of i. the variable of i will consist of the previously defined "start" paramenter and as long as "i" is less than the previously defined stop, add 1 to the value.
  for (let i = start; i <= stop; i++) {
    /*Within the scope of the loop, call the push function, which places the value of variable numbers within an array consisting of value of i*/
    numbers.push(i);
  }

  //Return the vaule for the variable numbers
  return numbers;
}

//Create the View Function

/*Declare a function which calls the built in displayNumbers function and possesses the parameter of numbersArray.*/
function displayNumbers(numbersArray) {
  /*Create a variable of results which will be defined as the value contained within the element possesing the Id of "results"*/
  let results = document.getElementById("results");

  //Create a for-loop which declares a variable of i. the variable of i will consist of the previously defined "start" paramenter and as long as "i" is less than the previously defined stop, add 1 to the value.
  for (let index = 0; index < numbersArray.length; index++) {
    /*Create a variable of div which is defined as a created  HTML element which has is a text string of "div"*/
    let div = document.createElement("div");

    /*The value of div, which will be inserted it into the inner HTML, will be defined as the  content within the array numbersArray */
    div.innerHTML = numbersArray[index];

    /*Create a variable of currentNumbers which is defined as the value of the contents within the index of the numbersArray array*/
    let currentNumbers = numbersArray[index];

    /*Create an if-else statement where if the value of currentNumbers is a modulous of three*/
    if (currentNumbers % 3 === 0) {
      /*Within scope, if the statement is true the div value has a class added to it of "fizz"*/
      div.classList.add("fizz");

      /*Create an else if statement where if the value of currentNumbers is nota a modulous of three, but a modulous of five*/
    } else if (
      /*Create an else if statement where the value of currenNumbers  is a modulous of five*/
      currentNumbers % 5 ===
      0
    ) {
      /*Within scope, if the statement is true the div value has a class added to it of "buzz"*/
      div.classList.add("buzz");
    } else if (
      /*Create an else if statement where the value of currenNumbers  is a modulous of ten*/
      currentNumbers % 10 ===
      0
    ) {
      /*Within scope, if the statement is true the div value has a class added to it of "buzz"*/
      div.classList.add("fizzBuzz");
    } else {
      /*Within the scope, if none of the statements are true the div value has a class added to it of"nfnb*/
      div.classList.add("nfnb");
    }

    //The value of the variable results will be appended to the child of the pass-through variable div

    results.appendChild(div);
  }
}

//if divisible by 5
/*if divisible by 3*/

function dwarfRollCall(dwarves) { //function accepts 1 argument "dwarves" which is an array of string 
  var counter = 1 // this is a separate counter to allow us assign numbers
  var string = "" //variable string must be initialized or "-undefined1. Dopey 2. Grumpy 3. Bashful appear"
  for(var i = 0; i<dwarves.length; i++){ //we use a for loop to put consecutive items into the variable string 
   string += (`${counter}. ` + `${dwarves[i]} `) //the variable string is being added the counter & the dwarves with their respective positions according to the pointer i
    counter++ //adds 1 to add to the position of the dwarves 1,2,3 etc 
}
return string //returns the array in a string format with the dwarves now assigned their numbers.
}

function summonCaptainPlanet(planeteerCalls){ //function takes in an array called planateerCalls
  var secondarray = [] //the purpose of secondarray is to store the value of string 
  var string = "" //string must be initialized to store in values later on
  for(var i = 0; i<planeteerCalls.length; i++){  //we have a for loop that has a counter i = 0, i is compared to the length of the array before stopping, then 1 is added to the counter until the loop ends
    string = planeteerCalls[i]  //we set string to = the array pointed by i 
    string = string.toUpperCase() + "!" //afterwards, the string is turned fully uppercase with the addition of an exclamation mark at the end

    secondarray.push(string)  //the string is pushed into the secondarray
    
  }
  return secondarray //returns the second array now composed of the original array but in all caps + ! at the end
}

function longPlaneteerCalls(words) { //function takes in an array of words
  var string = "" //variable string must be declared to store strings
for(var i = 0; i<words.length;i++){ // for loop that uses words.length to determine when the loop needs to end 
    string = words[i] // we assign variable string to = array words with i being the pointer
    if(string.length>4){ // we have a conditional statement that tests whether the length of the string is greater than 4 
      return true // should it be true, it returns the value true
    }
}
 return false // if the first conditional statement fails, then it automatically returns false
}


function findTheCheese (foods) { //we have a function that accepts a single argument 
  var cheesetester = "" //we establish a variable that will take a string from the array 
  let cheddar="cheddar", gouda= "gouda", camembert="camembert" //we initialize 3 variables that will hold the 3 types of cheese 
  for(var i = 0; i<foods.length; i++){ //we use a for loop with foods.length to determine when the loop will end
    cheesetester = foods[i] // cheesetester will take the first string in the array foods , namely foods[0] in this scenario 
    if(cheesetester===cheddar){ // this tests whether or not cheesetester === cheddar
      return(`${cheesetester}`) // if it's true, it will send the original value of pointer
    }
    if(cheesetester===gouda){ // these are the same conditional statements that test whether or not cheesetester is the same as gouda
      return(`${cheesetester}`)
    }
    if(cheesetester===camembert){ // conditional statement asking if cheesetester === camembert 
      return(`${cheesetester}`)
    }
  }return("no cheese!") //if all the conditional statements inside the forloop fail, then it will return with the fact that there was no cheese inside said array.
}

// in the alternative function, we use a nested for loop to compare 2 arrays 
/* alternative function findTheCheese(foods){
  const cheese = ["cheddar","gouda","camembert"] // cheese is an array filled with the cheese types we're searching for 
  for(var i= 0; i<foods.length;i++){ //the first forloop that is responsible for the initial array that was passed to the function 
    for(var x=0; x<cheese.length;x++){ // the second loop tests to see if any of the cheese === to the food 
      if(cheese[x]===foods[i]){ // if the statement is true it will return the cheese type that was found 
        return cheese[x] //the cheese type that is found, it doesn't matter if it's cheese[x] or food[i]
      }
    } // once this forloop ends, we go back to the first forloop and we go to foods[1]foods[2] etc etc until we find the cheese 
  }return "no cheese!"  // this will be returned if the foods array doesn't contain any cheese 
} */
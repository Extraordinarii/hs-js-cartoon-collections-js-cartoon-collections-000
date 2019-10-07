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

function longPlaneteerCalls(words) { //
  var string = ""
for(var i = 0; i<words.length;i++){
    string = words[i]
    if(string.length>4){
      return true
    }
}
 return false
}


function findTheCheese (foods) {
  var cheesetester = ""
  let x="cheddar", y= "gouda", z="camembert"
  for(var i = 0; i<foods.length; i++){
    cheesetester = foods[i]
    if(cheesetester===x){
      return(`${cheesetester}`)
    }
    if(cheesetester===y){
      return(`${cheesetester}`)
    }
    if(cheesetester===z){
      return(`${cheesetester}`)
    }
  }return("no cheese!")
}
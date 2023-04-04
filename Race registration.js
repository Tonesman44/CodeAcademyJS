let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 17

if (early && age >18) {
  raceNumber += 1000
}

if(age > 18 && early){
  console.log("You will race at 9:30am, your race number is: " + (raceNumber))
}
else if(early && age > 18){
  console.log("late adults run at 11:00 am" + 'your race number is: ' + (raceNumber))
}
else if (age < 18){
  console.log('Youth registrants run at 12:30 pm, your race number is ' + (raceNumber));
}
else{
  console.log('Go to the registration desk')
}




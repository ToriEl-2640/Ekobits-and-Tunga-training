//PART 1

//2 == "2"; true
//2 === 2; true
//10 % 3; 1
//10 % 3 === 1; true
//true && false; false
//false || true; true
//true || false; true


//PART 2
/* let isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}
*/
1.
  //The above code console.log "Keep it up!"
2.
  //we do not need to specify if(isLearning === true) because we already declared the let variable and assigned the value "true" to it.
  //if(isLearning) can't work on its own because no truthy or falsey value has been assigned therefore, it output "error".


II 
/*let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

if(firstvariable){
    console.log("first");
} else if(firstvariable || secondvariable){
    console.log("second");
} else if(firstvariable || thirdvariable){
    console.log("third");
} else {
    console.log("fourth");
}
*/

1. //the above code console.log "third" because all the other conditions are truthy except thirdvariable
2. //the value of firstvariable when it is initialized is Undefined.
3. //firstvariable is a truthy value because it is undefined
4. //secondvariable is a truthy value because it is an empty value
5. //thirdvariable is a falsey value because it is a number.

//PART 3
1. // an if statement that console.log's "Over 0.5" if Math.random returns a number greater than 0.5. Otherwise console.log "Under 0.5".
  if (Math.random() > 0.5) {
     console.log("Over 0.5");
  } else {
     console.log("Under 0.5");
  }
     console.log(Math.random());

2. /* A falsy value is a value which is actually false when JavaScript expects a boolean value */
/* In JavaScript there are 6 falsey values:

 1. 0
 2.""
 3.null
 4.undefined
 5.false
 6.NaN (short for not a number)
 */  

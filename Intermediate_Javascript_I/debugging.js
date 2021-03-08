//What does the throw keyword do?
     // The throw keyword stops code execution. 

//What does the finally keyword do?
     // The finally keyword executes code regardless of the error.

//What is the difference between a TypeError and ReferenceError?
     // A TypeError occurs when there is an incorrect use of ceryain types in Javascript while a ReferenceError occurs when a variable cannot be found within a scope.

//How do you create a snippet in the Chrome dev tools?
     /* open up the developer tools by holding command + option + j on a mac or control + shift + j on a windows machine.
     select "sources" then click on "snippets" to begin. */

//In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?
     // This means the debugger will pause before that red message appears in the Console and you get a chance to inspect what may have gone wrong.

//How do we "catch" errors in JavaScript? Give an example with code for what that might look like.
     // the code in the try block moves to the catch block if an error occurs inside of it. 
     try {
        if(Math.random() >= .5) {
            throw "Let's make an error!";
        }
        console.log("Whew...we made it.");
        console.log("We can only get here if the random number is less than .5.");
    } catch(e){
        console.log("The error is ", e);
        console.log("We can only get here if an error was thrown. (Random number is greater than .5).");
    }
    
    console.log("Moving on.....");

/*
    1. person; //referenceError because "person" is not defined.

    2. let data = {};
    data.displayInfo(); //TypeEror because "data.displayInfo" is not a function.

    3. let data = {};
    data.displayInfo.foo = "bar"; //TypeError because  Cannot set property 'foo' of undefined.

    4. function data(){
    let thing = "foo";
     }
     data();
     thing; //ReferenceError because "thing" is not defined.
*/


     PART II

     1. for(let i=0; i > 5; i++){
          console.log(i);
      } //Results undefined

     2. function addIfEven(num){
          if(num % 2 = 0){
              return num + 5;
          }
          return num;
      } //syntaxError Invalid left-hand side in assignment expression 

     3. /*function loopToFive(){
          for(let i=0, i < 5, i++){
              console.log(i);
          }
      } */
      //syntaxError  Unexpected token, expected ;  therefore replace , with ;
      function loopToFive(){
          for(let i=0; i < 5; i++){
              console.log(i);
          }
      }

     4. function displayEvenNumbers(){
          let numbers = [1,2,3,4,5,6,7,8];
          let evenNumbers = [];
          for(let i=0; i<numbers.length-1; i++;){
              if(numbers % 2 = 0); {
                  evenNumbers.push(i);
              }
              return evenNumbers;
          }
      }
      displayEvenNumbers(); //syntaxError

      




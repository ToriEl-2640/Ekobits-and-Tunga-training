      // PART I

 let arr = [];
//add my firstname
     arr[0]="Victoria"; //Victoria

//add my lastname
     arr[1]="Ejumegu";  // ["Victoria","Ejumegu"]

//add my favorite color to the beginning of the variable
     arr.unshift("Purple"); // [ "Purple", "Victoria", "Ejumegu"]

//remove my favorite color from the variable
     arr.shift();  // ["Victoria","Ejumegu"]

//create another variable 
 let arr2 = [];

//add my favorite number
     arr2[0] = 5;  

//add the JavaScript string to the end of the second variable
     arr2[1]="JavaScript";
         arr2.push();   // // [5,"JavaScript"]

//indexOf the favorite number
     arr2.indexOf(5); // 0

//if the value passed to it can not be found in the array, the indexOf returns -1
 let arr2=[5, "JavaScript"];
     arr2.indexOf(50); // -1

//Create a new variable called combinedArr which is the result of your arr and arr2 variables combined into one array.
 let combinedArr = arr.concat(arr2);
     combinedArr; // results ["Victoria","Ejumegu", 5, "JavaScript"]


     //PART II
// let arr = ["JavaScript", "Python", "Ruby", "Java"]

1. // return ["Python", "Ruby"]
 let arr = ["JavaScript", "Python", "Ruby", "Java"];
     arr.splice(0,1);
     arr.splice(2,1);
         arr;

2. // Combine the array with the array ["Haskell", "Clojure"].
 let arr = ["JavaScript", "Python", "Ruby", "Java"];
     arr.splice(0,1);
     arr.splice(2,1);
 let arrC = ["Haskell", "Clojure"];
     arrJ = arr.concat(arrC);
         arrJ;  // ["Python","Ruby","Haskell","Clojure"]

3. // Return the string "JavaScript, Python, Ruby, Java".
 let arr = ["Python","Ruby"];
     arr.splice(0,0, "JavaScript");
     arr.splice(2,0,"Clojure");
         arr;

4. // what the difference is between passing by value vs. passing by reference.
/* passing by value means the actual value is passed on. 
Passing by reference means a number (called an address) is passed on which defines where the value is stored.
 Usually, the address serves as a pointer to the value. */
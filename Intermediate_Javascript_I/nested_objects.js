


let nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
  }
    };
  

    // Using a for loop, console.log all of the numbers in the primeNumbers array.
    for(let i = 0; i < nestedData.length; i++); {
      console.log(nestedData.innerData.numberData.primeNumbers);
      } //Array [2,3,5,7,11]

  //Using a for loop, console.log all of the even Fibonnaci numbers.
  for(let i = 0; i < nestedData.length; i++); {
    console.log(nestedData.innerData.numberData.fibonnaci);
    } //Array [1,1,2,3,5,8,13]

    //Console.log the value "second" inside the order array.
    console.log(nestedData.innerData.order[1]); //second

    //Invoke the addSnack function and add the snack "chocolate".

//Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?
    /*When calling a function as a method of an object, this refers to the object,
     which is then known as the receiver of the function call. */
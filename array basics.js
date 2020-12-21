1.//array of favorite foods
    let favoriteFoods = ["Beans", "Noodles", "Eggs"];
      favoriteFoods;

2.//accessing the second element
    let favoriteFoods = ["Beans", "Noodles", "Eggs"];
     favoriteFoods[1];

3.//change the last element to another food
    let favoriteFoods = ["Beans", "Noodles", "Eggs"];
     favoriteFoods[2]="Pasta";

4.//remove the first element in favoriteFoods and store it in a new variable formerFavoriteFood
    let favoriteFoods = ["Beans", "Noodles", "Eggs"];
     favoriteFoods[2]="Pasta";
     favoriteFoods.shift();
     favoriteFoods;

     let formerFavoriteFood = favoriteFoods;
     formerFavoriteFood;

5.//add a favorite food to the back of the favoriteFoods array
    let favoriteFoods = ["Beans", "Noodles", "Eggs"];
     favoriteFoods[2]="Pasta";
     favoriteFoods.shift();
     favoriteFoods[2]="Rice";
     favoriteFoods.push();
     favoriteFoods;

6.//add a favorite food to the front of the favoriteFoods array.
    let favoriteFoods = ["Beans", "Noodles", "Eggs"];
     favoriteFoods[2]="Pasta";
     favoriteFoods.shift();
     favoriteFoods[0]="Beans";
     favoriteFoods.unshift();
     favoriteFoods;

7.//when you pop an empty aray, it returns Undefined.

8.//convert the first array to the second array:

//[2, 3, 4, 5] -> [2, 4, 5]
    let change = [2, 3, 4, 5];
     change.splice(1,1);
     change;

//["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
    let change1 = ["alpha", "gamma", "delta"];
     change1.splice(1,0,"beta");
     change1;

//[10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
     let change2 = [10,-10,-5,-3,2,1];
     change2.splice(1,3,9,8,7,6,5,4,3);
     change2;
     
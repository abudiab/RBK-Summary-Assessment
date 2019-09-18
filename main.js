// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

//=============================================================================
/*                              Q1                                           */
//=============================================================================
//write a function that takes a string as an input and returns an array
//containing the length of each word in that string.
//solve it using the most appropriate helper functions(reduce,each,map,filter).
//wordLengths("hello its me") // [5,3,2]

function wordLengths(str) {
    // TODO: your code here 
    // we use each for this because we only need to iterate and apply a function.
    //turn the string into an array using split
    var array = str.split(' ');
    var lengths = [];
    //iterate over each item of the array and get the string length
    each(array, function(element, i) {
     lengths[i] = element.length;
    });
    return lengths;
}

//=============================================================================
/*                                  Q2  (review)                              */
//=============================================================================
//Write a function countOccurrences that accepts two parameters: a string, 
// and a character (e.g. "a"), and returns number of times that character occured.
//solve it using the most appropriate helper functions(reduce,each,map,filter).
// countOccurrences("hello", "l"); // 2
// countOccurrences("hello, world!", "l"); // 3

function countOccurrences(string, character) {
    // your code is here
    //we use reduce for this one because we want to reduce into one value
    //We need to split the string to characters so we can compare, use split
    var splitArray = string.split('');
    var acc = 0;
    return reduce(splitArray, function(element, acc) {
      if (element === character) {
        acc++;
      }
      return acc;

    });
}

//=============================================================================
/*                                  Q3                                    */
//=============================================================================
//write a function that takes a string as an input and returns an array
//with only the words of length that are longer than 3.
//solve it using the most appropriate helper functions(reduce,each,map,filter).
// wordsLongerThanThree("Hello Mad World") //["Hello", "World"]

function wordsLongerThanThree(str) {
    // TODO: your code here 
    //we use filter because we have a condition that eliminates values
    // split the string into words using split method
    var newArray = str.split(' ');
    //iterate and check condition using filter 
    return filter(newArray, function(element, index) {
      return element.length > 3 
    });
}

//=============================================================================
/*                                  Q4                                        */
//=============================================================================
//Using recursion, write a function called repeatString that takes two parameters: a string str, 
//which is the string to be repeated, and count, a number 
//representing how many times the string str should be repeated.
//repeatString('dog', 0); // => '' 
//repeatString('dog', 1); // => 'dog' 
//repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
//repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

function repeatString(str, count) { 
 // TODO: your code here 
 //iteration using recursio, we need an exit condition and a changing variable
 //in order to use recursion we call the function within itself 
 if(count === 0){
  return '';
 }
 else {
  return str + repeatString(str, count - 1);
 }
} 
 

//=============================================================================
/*                                  Q5  (review)                              */
//=============================================================================
/*
 using closures create a function called makePizza that has the following properties and methods
 crust a property represented by a string. ex "thin","thick". 
 size a property represented by a string. ex "M","L".
 numberOfSlice a property that hold the number of slice, ex: 8
 ** the values of all properties will be provided as arguments in the function invocation. 
 addIngredients a function that add a new ingredient to the ingredients property.
 displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
 bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
 eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
 */
//Example:
// var pizza = makePizza("thin", "M", 2); //pass
// pizza.addIngredients("tomato");//pass
// pizza.addIngredients("meshroom");/pass
// pizza.addIngredients("meat");/pass
// console.log(pizza.displayIngredaints()); //error
// pizza.bakePizza();/pass
// pizza.eatSlice();/pass
// pizza.eatSlice();/pass
// pizza.eatSlice();/pass

// Write your code here .....
//Closures : we create a function, retun object with methods
//

function makePizza(crust, size, numberOfSlice) {
  return { //maybe keep properties out in a different obj?? chk
    crust: crust,
    size: size,
    numberOfSlice: numberOfSlice,
    ingredients: [],
    addIngredients: function(ingredient) {
      this.ingredients.push(ingredient);
      return this.displayIngredients;
    },
    displayIngredients: function() {      
      return 'The ingredients are: ' + this.ingredients;
    },
    bakePizza: function() {
      return 'Your ' + this.crust + this.size + this.numberOfSlice + ' Pizza is done!';
    },
    eatSlice: function () {
      if(this.numberOfSlice !== 0) {
        this.numberOfSlice--;
        return 'Number of Slices: ' + this.numberOfSlice
      } else {
        return 'No Pizza left!'
      }
    }
  }
}

//=============================================================================
/*                                  Q6  /get back to                                    */
//=============================================================================
/*
Create a ReadingList class by using OOP concept, where:
Your class should has:
"read" for the number of books that finish reading
"unRead" for the number of books that still not read
"toRead" array for the books names that want to read in the future
"currentRead" for the name of the book that is reading currently
"readBooks" Array of the names of books that finish read
"AddBook" function that:
a- Accept the book name as parameter
b- Add the new book to "toRead" array
c- Increment the number of the unread books.
"finishCurrentBook" function that:
a- Add the "currentRead" to the "readBooks" array
b- Increment the "read" books
c- Change the "currentRead" to be the first book from "toRead" array
d- Decrement the number of "unread" books
*/

// Now, to make sure that you are actually reading, make a comment below this and type: Yes I am

// Write your code here .....
// OOP: Create a function, inside is a variable (object) and return the object. 
// Inbetween, add the methods and stuff

function createReadingList() {
  var ReadingList = {};

  ReadingList.toRead();
  ReadingList.addBooks();

  //sorry didn't have time to do this one






  return ReadingList;
}

//=============================================================================
/*                                  Q7  (get back to)                                     */
//=============================================================================
//Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
//makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
//itemSize should be either "big", "medium" and "small" ???
//big sized items will hold 3 slots in the storage
//medium sized items will hold 2 slots in the storage
//small sized items  will hold 1 slot in the storage
//return "Can't fit" if you try to add an item that exceeds the storage size limit
//when the safe is full return a string representing all the items that are in the safe
//Example:
//  var safe = makeSafe(5)
//  safe('watch','small')
//  safe('gold-bar','big')
//  safe('silver-bar','big') => "Can't fit"
//  safe('money','small') => "watch gold-bar money"

// Write your code here .....

function makeSafe(storageSize) {
  return {
    storageSize: storageSize,
    space: storageSize;
    items: [],
    displayItems: function() {
      return 'Items: ' + this.items
    }
    addItem: function(item, itemSize) {
      if(itemSize in ["big", "medium", "small"]) {
        if (itemSize === "big") {
          this.items.push(item);
          this.space = this.space - 3;
        } else if {
          if (itemSize === "medium") {
          this.items.push(item);
          this.space = this.space - 2;
        } else {
          if (itemSize === "small") {
          this.items.push(item);
          this.space = this.space - 1;
        }
      } else { 
        return 'Incorrect Item Size Input'
      }
    }
  }
  if (space === 0) {
    return this.displayItems()
  }
}

//=============================================================================
/*                                  Q8  (get back to)                        */
//=============================================================================

//Create HTML, CSS & JS files and connect them together
//Add Two text input fields, one with a placeholder input, and another with color
//Add a button below them and an empty unordered list below the button
//Create 3 CSS classes (red, yellow, blue)
//Create a javascript function that adds an item list to the unordered list
//If the color value is red, yellow or blue
//Add the CSS class to the item accordingly
//Do not add a list item if the color value is non of the colors

//DO NOT USE JQUERY

//================================================================================
/*                              Q9                                            */
//================================================================================

//Create HTML, CSS & JS files
//Link jQuery
//Create an empty unordered list
//Create three input elements of type checkbox
//Create two buttons "create" & "remove"
//Create 7 classes in CSS each with the appropriete color (black, purple, green, orange, red, yellow, blue)
//Using jQuery run a function that gets called using the button's id (#create)
//The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
//If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
//If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
//If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it

//Using jQuery call a function from the button's id (#delete)
//The function removes all the elements from the unordered list based on the checkboxes as the previous function
//Use jQuery as much as you can in selecting elements and other tasks

//================================================================================
/*                              Q10                                           */
//================================================================================
// Theoretical questions.
// 1- In your own words,Why do we use Closures ?
//    we want to limit access to certain info/ variable. We limit the scope, so instead of
//    defining a variable in the global scope where any other function can access and change it
//    which could be very problematic since the varable will be unpredictable. 
//    The only way to access the variable is through the scope of the function it was defined
//    inside.

// 2- In OOP, what does "this" refer to ?
      // it refers to the current working object, the one we are at.

// 3- What is jQuery?
// it's the most popular javascript library, an open source set of rules that we can integrate
// into our code to make life easier.

// 4- what is the diffrence between Closure's methods and The OOP's methods?
//  expression and declaration. In closures we return an opject with methods put in
//  as declaration, meaning they are anonymous functions that we call using the key name
// in oop we define an epty object and then assing keys as variables.






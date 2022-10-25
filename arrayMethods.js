//program on Array methods

//program to shift the value using shift() method
const classNames = ["Akshaya", "Arun", "Faiz", "Roshan","Sakshi", "Yashwanth"]; //giving values to the variable
const className = classNames.shift(); //The shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log(className); //printing the shifted value
console.log(classNames); //printing the values except shifted value
//end of the program


//program to unshift the element using unshift() method
const classNames1 = ["Arun", "Faiz", "Roshan","Sakshi", "Yashwanth"]; //giving values to the variable
const className1 = classNames1.unshift("Akshaya"); //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
console.log(className1); //The unshift() method returns the new array length.
console.log(classNames); //printing the values with new value value
//end of the program


//program on changing elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];//giving values to the variable
console.log(fruits);//printing the given values
fruits[0] = "kiwi"; //Array elements are accessed using their index number:
console.log(fruits);//printing the values after changing the array element with the new one
//end of the program

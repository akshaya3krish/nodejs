//program to concatenate two strings
const str1 = "Nodejs"; //given value is string1
const str2 = "Batch3"; //given value in string2
const newString = str1.concat(" ",str2);//giving concat() method to combine two strings and assigning value to the result string
console.log(newString); //printing the concatenated string result
//end of the program


//program on Merging (Concatenating) Arrays
//The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"]; //assigning values to the variable
const myBoys = ["Emil", "Tobias", "Linus"]; //assigning values to the variable
const myChildren = myGirls.concat(myBoys); //concatenating two variables and assigning the result value to a new variable
console.log(myChildren.toString()); //printing the concatenated value as a string using toString() method.


const newBoyNames = ["Robin", "Morgan"];
const myChildren1 = myGirls.concat(myBoys,newBoyNames); //can concatenate more arrays
console.log(myChildren1);
console.log(myChildren1.toString());

//The concat() method can merge string values to arrays
 const myBoys1 = ["Emil", "Tobias", "Linus"];
 const myChildren2 = myBoys1.concat("Peter");
 console.log(myChildren2);
 console.log(myChildren2.toString());

//end of the program
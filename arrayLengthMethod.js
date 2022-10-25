//program on Array length
//The length property provides an easy way to append new elements to an array without using the push() method
const cars = ["BMW", "Audi", "Kia", "Hyundai", "Volvo"]; //assigning values to the variables
console.log(cars); //printing the values
cars[cars.length]="Ford"; //adding new element to the array using length() method
console.log(cars); //printing the result after adding the new element

//here length and push method doing the same work


cars.push("Honda"); // adding new car name to the array value using push() method 
console.log(cars);//printing result with newly added car name
//end of the program
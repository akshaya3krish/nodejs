//program to picking a random array value
const studentNames = 7; // assigning no of student names to the variable
const studentNamesArray = ['Akshaya', 'Arun', 'Faiz', 'Roshan', 'Sakshi', 'Monica', 'Yashwanth'];//giving student names to the array
console.log(typeof studentNamesArray); //to findout what type the assigned variable is 
console.log(studentNamesArray.length); // to findout the length of the given data in the array value
console.log(studentNamesArray[2]); // to print the array value where the index position is 2 
studentNamesArray.push("John"); // adding new student name to the array value
console.log(studentNamesArray);//printing result with newly added student name
studentNamesArray.pop();//removes the value in the last index position
console.log('After calling pop method', studentNamesArray); //printing the value after removing last name in the index position
console.log(`After calling pop method:  ${studentNamesArray}`); //printing the value without strings
console.log(studentNamesArray[Math.floor(Math.random() * studentNamesArray.length)]);//picking the random name from the given array value
//end of the program
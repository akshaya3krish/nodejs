//program to trim the whitespaces in the string
const text = "               Nodejs Batch3           "; //given message to the variable with whitespaces in start and end of the string
const result = text.trim(); //using trim() method and assigning the trimmed value to the variable-result
console.log(result); //printing the result after trimming the spaces

const text1 = "               Nodejs Batch3           ";//given message to the variable with whitespaces in start and end of the string
const result1 = text1.trimStart();//using trimStart() method to trim only the whitespaces in the start of the string
                                  //and assigning the trimmed value to the variable-result1
console.log(result1);//printing the result after trimming the spaces in the start of the string

const text2 = "               Nodejs Batch3           ";//given message to the variable with whitespaces in start and end of the string
const result2 = text2.trimEnd();//using trimEnd() method to trim only the whitespaces in the end of the string
                               //and assigning the trimmed value to the variable-result2
console.log(result2);//printing the result after trimming the spaces in the end of the string
//end of the program
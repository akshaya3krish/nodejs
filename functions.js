//program to add two numbers using function method
function add (a,b)
{
    const result = a + b;
    return result;
}

const resAdd = add (2,3);
const resAdd1 = add (45,78);
const resAdd2 = add (102,548);
console.log(resAdd, resAdd1, resAdd2);


//program to add first and last name using function method
function fullName(fName, lName)
{
    const fullName = `${fName} ${lName}`;
    return fullName;

}
console.log(fullName('Akshaya', 'Krishnan'));
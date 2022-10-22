const student ={
    nameOfStudent : "Ram",
    age : 30,
    college : 'Abcdef',
    branch : "Mathematics",
    address : {
        state : "Tamilnadu",
        city : "Chennai",
        pincode : "6000001"
    }
}
for (const key in student) {
    if (student.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);
    }
}
for (const key in student) {
    console.log(`Keys are: ${key}`);
    console.log(`Values are: ${student[key]}`);
}
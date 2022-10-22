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
console.log(student.address.city);
console.log(student.address['pincode']);
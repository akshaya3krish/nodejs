//programs on For In loop
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

//program - 1
const car = {
    nameOfCar : 'BMW',
    color : 'Black',
    purchaseyear : 2022,
    type : 'automatic',
    noPlate : 'BMW 123'
}
for (const key in car) {
    if (car.hasOwnProperty.call(car, key)) {
        const element = car[key];
        console.log(element);
    }
}
for (const key in car) {
    console.log(`Keys are: ${key}`);
    console.log(`Values are: ${car[key]}`);
}

//program - 2
const baby = {
    nameOfBaby : 'Arsh',
    age : 4.5,
    dob : '19-Jan-2018',
    classStudying : "UKG",
}
for (const key in baby) {
    if (baby.hasOwnProperty.call(baby, key)) {
        const element = baby[key];
        console.log(element);
    }
}
for (const key in baby) {
    console.log(`Keys are: ${key}`);
    console.log(`Values are: ${baby[key]}`);
}

//program - 3
const house = {
    typeOfHouse : 'Duplex',
    noOfRooms : 4,
    valueOfProperty : '1.5 Crore',
    location : 'Chennai',
    Available : 'No'
}
for (const key in house) {
    if (house.hasOwnProperty.call(house, key)) {
        const element = house[key];
        console.log(element);
    }
}
for (const key in house) {
    console.log(`Keys are: ${key}`);
    console.log(`Values are: ${house[key]}`);
}

//program - 4
const tuition = {
    noOfStudents : 40,
    mainSubject : 'Mathematics',
    aGrade : 10,
    bGrade : 20,
    cGrade : 10,
    tuitionTiming : "Morning 7.A.M"
}
for (const key in tuition) {
    if (tuition.hasOwnProperty.call(tuition, key)) {
        const element = tuition[key];
        
    }
}
for (const key in tuition) {
    console.log(`Keys are: ${key}`);
    console.log(`Values are: ${tuition[key]}`);
}
//program - 5
const mobile = {
    nameOfMobile : 'iPhone',
    model : '14 Pro Max',
    internalStorage : '256 GB',
    Color : "Deep Purple"
}
for (const key in mobile) {
    if (mobile.hasOwnProperty.call(mobile, key)) {
        const element = mobile[key];
        
    }
}
for (const key in mobile) {
    console.log(`Keys are: ${key}`);
    console.log(`Values are: ${mobile[key]}`);
}

//program - 1
class NameOfPerson{    
    constructor(name){
        this.name = name;
    }
    nameOfPersonMethod(){
        return `Name of the person is: ${this.name}`;
    }
}
class ageOfPerson extends NameOfPerson{
    constructor(name,age){
        super(name);
        this.age = age;
    }
    ageOfPersonMethod(){
        return `Name is ${this.name} and Age is ${this.age}`;
    }

}
const person = new ageOfPerson("Nodejs", 3);
console.log(person.ageOfPersonMethod());
console.log(person.nameOfPersonMethod());
console.log(person.name);

//program -2
class Mobile{
    constructor(nameOfMobile,model){
        this.nameOfMobile = nameOfMobile;
        this.model = model;
        
    }
    mobileMethod(){
        return `Specifications of mobile is: Name of Mobile - ${this.nameOfMobile} \n Model of Mobile - ${this.model}`;
    }
}
class Color extends Mobile{
    constructor(nameOfMobile,model,color){
        super(nameOfMobile,model);
        this.color = color;
    }
    colorMethod(){
        return `Color of the mobile is: ${this.color}`;
    }
}

const newMobile = new Color("iPhone", "14 Pro Max", "Deep Purple");
console.log(newMobile.mobileMethod(),"\n", newMobile.colorMethod());

//program -3
class Tuition{
    constructor(noOfStudents,mainSubject,tuitionTiming){
        this.noOfStudents = noOfStudents;
        this.mainSubject = mainSubject;
        this.tuitionTiming = tuitionTiming;
    }
    tuitionMethod(){
        return `Tuition details are: No of Students - ${this.noOfStudents} \n Main Subject - ${this.mainSubject} \n Tuition timing is - ${this.tuitionTiming}`;
    }
}
class Grade extends Tuition{
    constructor(noOfStudents,mainSubject,aGrade,bGrade,cGrade,tuitionTiming){
        super(noOfStudents,mainSubject,tuitionTiming);
        this.aGrade = aGrade;
        this.bGrade = bGrade;
        this.cGrade = cGrade;
    }
    gradeMethod(){
        return `A Grade Students - ${this.aGrade}\n B Grade Students - ${this.bGrade} \n C Grade Students - ${this.cGrade} \n`
    }
}
const newTuition = new Grade(40,"Mathematics",10,20,10,"Morning 7.A.M");
console.log(newTuition.tuitionMethod(),"\n", newTuition.gradeMethod());

//program - 4
class House{
    constructor(typeOfHouse,noOfRooms,valueOfProperty){
        this.typeOfHouse = typeOfHouse;
        this.noOfRooms = noOfRooms;
        this.valueOfProperty = valueOfProperty;
    }
    houseMethod(){
        return `House details are: Type of House - ${this.typeOfHouse}\n No of Rooms - ${this.noOfRooms}\n Value of Property - ${this.valueOfProperty}`;

    }
}
class addHouse extends House{
    constructor(typeOfHouse,noOfRooms,valueOfProperty,location,Available){
        super(typeOfHouse,noOfRooms,valueOfProperty);
        this.location = location;
        this.Available = Available;
    }
    addHouseMethod(){
        return `Location is - ${this.location}\n Availability - ${this.Available}`;
    }
}
const newHouse = new addHouse("Duplex", 4,"1.5 Crore","Chennai","No");
console.log(newHouse.houseMethod(), "\n", newHouse.addHouseMethod());

//program - 5
class Car{
    constructor(nameOfCar,color,purchaseyear){
        this.nameOfCar = nameOfCar;
        this.color = color;
        this.purchaseyear = purchaseyear;
    }
    carMethod(){
        return `Car Details are: Name of car - ${this.nameOfCar}\n Color of car - ${this.color}\n Year of Purchase - ${this.purchaseyear}\n`;

    }
}
class addCar extends Car{
    constructor(nameOfCar,color,purchaseyear,type,noPlate){
        super(nameOfCar,color,purchaseyear);
        this.type = type;
        this.noPlate = noPlate;
    }
    addCarMethod(){
        return `Type of car - ${this.type}\n No of car - ${this.noPlate}`;
    }
}
const newCar = new addCar("BMW","Black",2022,"Automatic","BMW 123");
console.log(newCar.carMethod(),newCar.addCarMethod());
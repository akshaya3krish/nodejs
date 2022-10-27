//program - 1
class NameOfPerson{    
    constructor(name){
        this.name = name;
    }
    nameMethod(){
        return `Name of the person is: ${this.name}`;
    }
}
const newName = new NameOfPerson("Nodejs3");
console.log(newName.nameMethod());

//program -2
class Mobile{
    constructor(nameOfMobile,model,color){
        this.nameOfMobile = nameOfMobile;
        this.model = model;
        this.color = color;
    }
    mobileMethod(){
        return `Specifications of mobile is: Name of Mobile - ${this.nameOfMobile} \n Model of Mobile - ${this.model} \n Color of Mobile - ${this.color}`;
    }
}
const newMobile = new Mobile("iPhone", "14 Pro Max", "Deep Purple");
console.log(newMobile.mobileMethod());


//program -3
class Tuition{
    constructor(noOfStudents,mainSubject,aGrade,bGrade,cGrade,tuitionTiming){
        this.noOfStudents = noOfStudents;
        this.mainSubject = mainSubject;
        this.aGrade = aGrade;
        this.bGrade = bGrade;
        this.cGrade = cGrade;
        this.tuitionTiming = tuitionTiming;
    }
    tuitionMethod(){
        return `Tuition details are: No of Students - ${this.noOfStudents} \n Main Subject - ${this.mainSubject} \n A Grade Students - ${this.aGrade}\n B Grade Students - ${this.bGrade} \n C Grade Students - ${this.cGrade} \n Tuition timing is - ${this.tuitionTiming}`;
    }
}
const newTuition = new Tuition(40,"Mathematics",10,20,10,"Morning 7.A.M");
console.log(newTuition.tuitionMethod());

//program - 4
class House{
    constructor(typeOfHouse,noOfRooms,valueOfProperty,location,Available){
        this.typeOfHouse = typeOfHouse;
        this.noOfRooms = noOfRooms;
        this.valueOfProperty = valueOfProperty;
        this.location = location;
        this.Available = Available;
    }
    houseMethod(){
        return `House details are: Type of House - ${this.typeOfHouse}\n No of Rooms - ${this.noOfRooms}\n Value of Property - ${this.valueOfProperty}\n Location is - ${this.location}\n Availability - ${this.Available}`;

    }
}
const newHouse = new House("Duplex", 4,"1.5 Crore","Chennai","No");
console.log(newHouse.houseMethod());

//program - 5
class Car{
    constructor(nameOfCar,color,purchaseyear,type,noPlate){
        this.nameOfCar = nameOfCar;
        this.color = color;
        this.purchaseyear = purchaseyear;
        this.type = type;
        this.noPlate = noPlate;
    }
    carMethod(){
        return `Car Details are: Name of car - ${this.nameOfCar}\n Color of car - ${this.color}\n Year of Purchase - ${this.purchaseyear}\n Type of car - ${this.type}\n No of car - ${this.noPlate}`;

    }
}
const newCar = new Car("BMW","Black",2022,"Automatic","BMW 123");
console.log(newCar.carMethod());
//program - 1
class NameOfPerson{
    name = "Nodejs3";
    nameMethod(){
        return `Name of the person is: ${this.name}`;
    }
}
const newName = new NameOfPerson();
console.log(newName.nameMethod());

//program -2
class Mobile{
    nameOfMobile = 'iPhone';
    model = '14 Pro Max';
    Color = "Deep Purple";
    
    mobileMethod(){
        return `Specifications of mobile is: Name of Mobile - ${this.nameOfMobile} \n Model of Mobile - ${this.model} \n Color of Mobile - ${this.color}`;
    }
}
const newMobile = new Mobile();
console.log(newMobile.mobileMethod());


//program -3
class Tuition{
    noOfStudents = 40;
    mainSubject = 'Mathematics';
    aGrade = 10;
    bGrade = 20;
    cGrade = 10;
    tuitionTiming = "Morning 7.A.M";
    
    tuitionMethod(){
        return `Tuition details are: No of Students - ${this.noOfStudents} \n Main Subject - ${this.mainSubject} \n A Grade Students - ${this.aGrade}\n B Grade Students - ${this.bGrade} \n C Grade Students - ${this.cGrade} \n Tuition timing is - ${this.tuitionTiming}`;
    }
}
const newTuition = new Tuition();
console.log(newTuition.tuitionMethod());

//program - 4
class House{
    typeOfHouse = 'Duplex';
    noOfRooms = 4;
    valueOfProperty = '1.5 Crore';
    location = 'Chennai';
    Available = 'No';
    houseMethod(){
        return `House details are: Type of House - ${this.typeOfHouse}\n No of Rooms - ${this.noOfRooms}\n Value of Property - ${this.valueOfProperty}\n Location is - ${this.location}\n Availability - ${this.Available}`;

    }
}
const newHouse = new House();
console.log(newHouse.houseMethod());

//program - 5
class Car{
    nameOfCar = 'BMW';
    color = 'Black';
    purchaseyear = 2022;
    type = 'automatic';
    noPlate = 'BMW 123';
    
    carMethod(){
        return `Car Details are: Name of car - ${this.nameOfCar}\n Color of car - ${this.color}\n Year of Purchase - ${this.purchaseyear}\n Type of car - ${this.type}\n No of car - ${this.noPlate}`;

    }
}
const newCar = new Car();
console.log(newCar.carMethod());
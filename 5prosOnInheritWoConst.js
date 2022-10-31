//program - 1
class NameOfPerson{
    name = "Nodejs";
    static nameMethod(){
        return `Name of the person is: ${this.name}`;
    }
}
class ageOfPerson extends NameOfPerson{
    age = 3;
    ageMethod(){
        return `Name is ${this.name} and Age is ${this.age}`;
    }
}
const newName = new ageOfPerson();
console.log(newName.ageMethod());

//program -2
class Mobile{
    nameOfMobile = 'iPhone';
    model = '14 Pro Max';
     static mobileMethod(){
        return `Specifications of mobile is: Name of Mobile - ${this.nameOfMobile} \n Model of Mobile - ${this.model}`;
    }
}
class Color extends Mobile{
    color = "Deep Purple";
    
    colorMethod(){
        return `Specifications of mobile is: Name of Mobile - ${this.nameOfMobile} \n Model of Mobile - ${this.model}\n Color of the mobile - ${this.color}`;
    }
}
const newMobile = new Color();
console.log(newMobile.colorMethod());

//program -3
class Tuition{
    noOfStudents = 40;
    mainSubject = 'Mathematics';
    tuitionTiming = "Morning 7.A.M";
    
    static tuitionMethod(){
        return `Tuition details are: No of Students - ${this.noOfStudents} \n Main Subject - ${this.mainSubject} \n Tuition timing is - ${this.tuitionTiming}`;
    }
}
class Grade extends Tuition{
    aGrade = 10;
    bGrade = 20;
    cGrade = 10;
    gradeMethod(){
        return `Tuition details are: No of Students - ${this.noOfStudents} \n Main Subject - ${this.mainSubject} \n A Grade Students - ${this.aGrade}\n B Grade Students - ${this.bGrade} \n C Grade Students - ${this.cGrade} \n Tuition timing is - ${this.tuitionTiming}`;
    }
}
const newTuition = new Grade();
console.log(newTuition.gradeMethod());

//program - 4
class House{
    typeOfHouse = 'Duplex';
    noOfRooms = 4;
    valueOfProperty = '1.5 Crore';
    houseMethod(){
        return `House details are: Type of House - ${this.typeOfHouse}\n No of Rooms - ${this.noOfRooms}\n Value of Property - ${this.valueOfProperty}\n`;

    }
}
class addHouse extends House{
    location = 'Chennai';
    Available = 'No';
    addHouseMethod(){
        return `Location is - ${this.location}\n Availability - ${this.Available}`;
    }
}
const newHouse = new addHouse();
console.log(newHouse.houseMethod(), "\n", newHouse.addHouseMethod());

//program - 5
class Car{
    nameOfCar = 'BMW';
    color = 'Black';
    purchaseyear = 2022;
    carMethod(){
        return `Car Details are: Name of car - ${this.nameOfCar}\n Color of car - ${this.color}\n Year of Purchase - ${this.purchaseyear}\n`;

    }
}
class addCar extends Car{
    type = 'automatic';
    noPlate = 'BMW 123';

    addCarMethod(){
        return `Type of car - ${this.type}\n No of car - ${this.noPlate}`;
    }
}
const newCar = new addCar();
console.log(newCar.carMethod(),newCar.addCarMethod());


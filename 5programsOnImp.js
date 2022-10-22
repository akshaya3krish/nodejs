//programs on import
//program - 1
const impCar = require("./5programsOnExp");
console.log(impCar.car.nameOfCar);
console.log(impCar.car.color);

//program - 2 
const impBaby = require("./5programsOnExp");
console.log(impBaby.baby.dob);
console.log(impBaby.baby.age);

//program - 3
const impHouse = require("./5programsOnExp");
console.log(impHouse.house.valueOfProperty);

//program - 4
const impTuition = require("./5programsOnExp");
console.log(impTuition.tuition.mainSubject);

//program -5
const impMobile = require("./5programsOnExp");
console.log(impMobile.mobile.Color);
console.log(impMobile.mobile.nameOfMobile);

const impAllObj = require("./5programsOnExp");
console.log("exporting the object in a single program from different programs:");
console.log(impAllObj.baby.nameOfBaby);
console.log(impAllObj.car.type);
console.log(impAllObj.house.location);
console.log(impAllObj.mobile.model);
console.log(impAllObj.tuition.tuitionTiming);
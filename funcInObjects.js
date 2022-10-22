const student ={
    nameOfStudent : "Ram",
    age : 30,
    college : 'Abcdef',
    branch : "Mathematics",
    fullName : `${this.nameOfStudent}`, //cannot use this operator outside the function
    subjects : function sub() {
        return `${this.nameOfStudent} is of age ${this.age} and he studies in the college ${this.college}`;
    },
    arrowFuncEg: ()=>{
        return `${this.nameOfStudent} is of age ${this.age} and he studies in the college ${this.college}`; 
        //this operator cant be used inside the functions
    }

}
console.log(student.subjects());
console.log(student.arrowFuncEg());
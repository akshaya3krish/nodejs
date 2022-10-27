class Calculator {
    constructor (a , b) {
        this.a = a;
        this.b = b;
    }
    addNum(){
        return `Addition of two numbers are: ${this.a + this.b}`;
    }
    subNum(){
        return `Subtraction of two numbers are: ${this.a - this.b}`;
    }
    mulNum(){
        return `Multiplication of two numbers are: ${this.a * this.b}`;
    }
    divNum(){
        return `Division of two numbers are: ${this.a / this.b}`;
    }
}
const result = new Calculator(30,10);
console.log(result.addNum(),"\n",result.subNum(),"\n",result.mulNum(),"\n",result.divNum());
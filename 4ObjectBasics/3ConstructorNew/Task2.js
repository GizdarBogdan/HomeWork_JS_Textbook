function Calculator(num1, num2) {
    this.num1 = num1,
    this.num2 = num2,
    this.read = function() {
        this.num1 = prompt("1 число:", 0);
        this.num2 = prompt("2 число:", 0);
    }

    this.sum = function(){
        return this.num1 + this.num2;
    }

    this.mul = function(){
        return this.num1 * this.num2;
    }
}

let calculator = new Calculator(5,2);
//calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );
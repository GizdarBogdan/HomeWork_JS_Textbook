function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("Число:", 0);
    }
}

let accum = new Accumulator(10);
accum.read();
accum.read();
accum.read();
alert(accum.value);
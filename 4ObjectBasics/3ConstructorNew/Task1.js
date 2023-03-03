function A() { 
    return c;
};

function B() { 
    return c;
};

let c = {};
let a = new A();
let b = new B();

console.log( a == b );
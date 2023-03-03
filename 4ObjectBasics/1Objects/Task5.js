function multiplyNumeric(currentObject)
{
    for (let key in currentObject)
    {
        if (typeof currentObject[key] == "number")
        {
            currentObject[key] *= 2;
        }
    }
}


let a = {
    name : "Jhon",
    age : 20,
    sal : "10",
    fal : true
}
multiplyNumeric(a);
console.log(a);
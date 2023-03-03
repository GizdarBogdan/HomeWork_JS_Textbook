function Pow(a, b)
{
    let result = 1;
    for (let i = 1; i <= b; i++)
    {
        result *= a;
    }
    return result;
}

console.log(Pow(5,2));
console.log(Pow);
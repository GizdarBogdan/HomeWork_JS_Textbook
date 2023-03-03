function getSumSalaries(salaries)
{
    let sum = 0;
    for (let key in salaries)
    {
        //вдруг сумма записана в строке
        sum += +salaries[key];
    }
    return sum;
}

let salaries = {
    John: 1000,
    Ann: 160,
    Pete: "10"
  };

console.log(getSumSalaries(salaries));


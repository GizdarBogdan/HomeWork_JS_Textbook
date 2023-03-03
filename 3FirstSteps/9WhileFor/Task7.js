let number = 100//prompt("Введите число n:");

A:for (let i = 2; i <= number; i++)
{
    for (let j = 2; j < i; j++)
    {
        if (i % j == 0)
        {
            continue A;
        }
    }
    console.log(i);
}
function pow(x,n)
{
  let result=1;//пробелы
  for(let i=0;i<n;i++) {result*=x;}//пробелы и тело цикла
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')//(;) пробелы и переменные в одной строке
if (n<=0)//пробелы
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow(x,n))//; и пробелы
}

// Мой вариант кода:
function pow(x, n)
{
    let result = 1;

    for(let i = 0; i < n; i++) 
    {
        result *= x;
    }
    return result;
}

x = prompt("x?", '');
n = prompt("n?", '');

if (n <= 0)
{
    alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
    alert(pow(x, n));
}

while (true)
{
    let number = prompt("Введите число больше 100");
    if (number > 100 || number == null)
    {
        alert("Верно");
        break;
    }
    else
    {
        alert("Неверно");
    }
}
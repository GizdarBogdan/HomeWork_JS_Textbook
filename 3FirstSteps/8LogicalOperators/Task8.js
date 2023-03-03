let userLogin = prompt("Введите ваш логин:");
if (userLogin == "Админ")
{
    let userPassword = prompt("Введите пароль:");
    if (userPassword == "Я главный")
        alert("Здравствуйте!");
    else if (userPassword == "" || userPassword == null)
        alert("Отменено");
    else
        alert("Я вас не знаю");
}
else if (userLogin == "" || userLogin == null)
    alert("Отменено");
else
    alert("Я вас не знаю");
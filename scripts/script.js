let question = confirm("Мне по сути без разницы какая будет работа");
alert( question );
const form = document.getElementById('form');

function retrieveFormValue(event) 
{
    event.preventDefault();//предотвращает обычное поведение формы

    const name = form.querySelector('[name="user_mail"]'),
    password = form.querySelector('[name="password"]');

    const values = {
        mail: name.value,
        password: password.value
    };

    console.log(values);
    console.log(event);
}

form.addEventListener('submit', retrieveFormValue);

//асинхронная функция??
async function SendForm(event)
{
    event.preventDefault();

    //отправляем POST запрос на сервер
    let response = await fetch('http://ptsv2.com/t/aaozl-1650293427/post' , {
    method: 'POST' , //метод POST
    body: new FormData(form)//в класс FormData??? передает ссылку на форму
    });
    let result = await response.text()//получаем JSON(хде он?)НЕ РАБОТАЕТ
    //console.log(await response.text());
    // console.log(result);

    // проверка на статус 200
    if (response.status != 200) {
        alert("Ништяк");
    } else {
        alert(result);
    }

}

//отправляем форму на сервер
form.onsubmit = SendForm;


//let question = confirm("Мне по сути без разницы какая будет работа");
//alert( question );
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

form.addEventListener('submit', SendForm);//отправляем форму

//асинхронная функция??
async function SendForm(event)
{
    event.preventDefault();

    var payload = {
        a: 1,
        b: 2
    };
    
    var data = new FormData();
    data.append( "json", JSON.stringify( payload ) );

    //отправляем POST запрос на сервер
    let response = await fetch('http://localhost:3000', {
    method: 'POST' , //метод POST
    mode:'cors' ,
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },//отправляем JSON и хотим получить JSON
    body:data//new FormData(form)//в класс FormData??? передает ссылку на форму
    });
    console.log(response);
    
    let result = await response.text()//получаем JSON(хде он?)НЕ РАБОТАЕТ
    //console.log(await response.text());
    console.log(result);

    // проверка на статус 200
    if (response.status != 200) {
       alert("Ништяк");
    } else {
        alert(result);
        document.location='https://www.google.com/webhp?hl=ru&sa=X&ved=0ahUKEwjYvd2InuL4AhWRXfEDHU86D9UQPAgI';//редирект на другую страницу при нажатиb
    }
    

}

//отправляем форму на сервер
//form.onsubmit = SendForm;


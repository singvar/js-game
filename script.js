let login = prompt ("Ты чьих будешь", "");

let message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' : '';

alert ( message );


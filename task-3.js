'use strict';

let message;
let userPassword = prompt ("Введите пароль", '****');
console.log (userPassword);

if (userPassword === null) {
  message = 'Отменено пользователем!';
}
else if (userPassword === 'jqueryismyjam') {
  message = 'Добро пожаловать!';
}
else {
  message = 'Доступ запрещен, неверный пароль!';
}
console.log (message);

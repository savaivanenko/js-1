'use strict';
const total = 100;
let ordered = 50;
ordered = prompt('введите необходимое количество товара:');
console.log(Number.parseInt(ordered));
if (ordered === null || ordered === 0 || ordered === NaN){
  alert('Отменено пользователем!');
}
else if (ordered > total) {
  alert("На складе недостаточно твоаров!")
}
else{
  alert ('Заказ оформлен, с вами свяжется менеджер')}
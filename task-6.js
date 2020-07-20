let input;
let total = 0;
do {
  input = prompt("Введите число");
  console.log(input);

  if (input === "" || input === NaN)  {
    alert("не число");
  }

  else {
    let number = +input; 
    total += number;
    console.log(total);
  }
  
} 
while (input != null);

alert(`Сумма чисел равна ${total}`);


// while ((input = prompt('Введите число!')) !== null) {
//   // Для более правильного распарсивания числа здесь не хватает регулярного выражения
//   // или функции, посимвольно проверяющей строку как число.
//   let number = +input; 
//   if (!isNaN(number))
//       sum += number;
// }
// alert(sum);


// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);
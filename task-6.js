let input;
let total = 0;
do {
  input = prompt("Введите число");
  console.log(input);

  if (isNaN(input)) {
    alert("не число - Введите число");
  }
  else {
    let number = +input; 
    total += number;
    console.log(total);
  }
  
} 
while (input != null);

alert(`Сумма чисел равна ${total}`);



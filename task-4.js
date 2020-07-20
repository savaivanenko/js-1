const credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;
let userOrder = prompt ("Сколько дроидов вы желаете приобрести");
console.log (Number.parseInt(userOrder));

if (userOrder === null) {
  message = 'Отменено пользователем!';
  console.log (message);
}
else{
  totalPrice = userOrder * pricePerDroid;
  console.log(totalPrice);
}
if (totalPrice > credits){
  console.log('Недостаточно средств на счету!');
}
else{
  let lost = credits - totalPrice;
  console.log(`Вы купили "${userOrder}" дроидов, на счету осталось "${lost}" кредитов.`);
}
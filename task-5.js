let userCountry = prompt("Ваша страна");
userCountry = userCountry.toLowerCase();
userCountry = userCountry[0].toUpperCase() + userCountry.slice(1);
console.log((userCountry));

let delivery;
let massage = true;

switch (userCountry){

  case 'Китай':
    delivery = 100;
  break;

  case 'Чили':
    delivery = 250;
  break;

  case 'Австралия':
    delivery = 170;
  break;

  case 'Индия':
    delivery = 80;
  break;

  case 'Ямайка':
    delivery = 120;   
  break;

  default:
    delivery = false;
}
if (delivery === false){
  alert('В вашей стране доставка не доступна');
}
else{
  alert(`Доставка в "${userCountry}" будет стоить "${delivery}" кредитов`)
};
let userCountry = prompt("Ваша страна");
userCountry = userCountry.toLowerCase();
userCountry = userCountry[0].toUpperCase() + userCountry.slice(1);
console.log((userCountry));

let delivery;

switch (userCountry){
  case 'Китай':
    delivery = 100;
    alert(`Доставка в "${userCountry}" будет стоить "${delivery}" кредитов`);
  break;

  case 'Чили':
    delivery = 250;
    alert(`Доставка в "${userCountry}" будет стоить "${delivery}" кредитов`);
  break;

  case 'Австралия':
    delivery = 170;
    alert(`Доставка в "${userCountry}" будет стоить "${delivery}" кредитов`);
  break;

  case 'Индия':
    delivery = 80;
    alert(`Доставка в "${userCountry}" будет стоить "${delivery}" кредитов`);
  break;

  case 'Ямайка':
    delivery = 120;
    alert(`Доставка в "${userCountry}" будет стоить "${delivery}" кредитов`);
  break;

  default:
    alert('В вашей стране доставка не доступна');
}
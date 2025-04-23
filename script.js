const exchangeArray = [
  { name: 'USD', value: 1 },
  { name: 'EUR', value: 0.88 },
  { name: 'POUND', value: 0.75 },
  { name: 'WON', value: 1433 },
  { name: 'YEN', value: 142 },
  { name: 'YAN', value: 7.31 },
  { name: 'MNT', value: 3537 }
];

let displayValue = '';

const display = document.getElementById('display');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const resultDiv = document.getElementById('result');

exchangeArray.forEach(item => {
  const option1 = document.createElement('option');
  option1.value = item.value;
  option1.text = item.name;
  fromCurrency.appendChild(option1);

  const option2 = document.createElement('option');
  option2.value = item.value;
  option2.text = item.name;
  toCurrency.appendChild(option2);
});

function appendNumber(num) {
  displayValue += num;
  display.innerText = displayValue;
}

function clearDisplay() {
  displayValue = '';
  display.innerText = '0';
  resultDiv.innerText = '';
}

function convert() {
  const fromValue = parseFloat(fromCurrency.value);
  const toValue = parseFloat(toCurrency.value);
  const amount = parseFloat(displayValue);

  if (!isNaN(amount)) {
    const usdAmount = amount / fromValue;
    const converted = usdAmount * toValue;
    resultDiv.innerText = `Хөрвүүлсэн дүн: ${converted.toFixed(2)}`;
  } else {
    resultDiv.innerText = 'Буруу оруулга!';
  }
}

function calculate(operation) {
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const resultElement = document.getElementById('result');
  const error = document.getElementById('error');

  resultElement.textContent = "Результат:";
  error.textContent = "";

  const a = num1.value;
  const b = num2.value;

  if (a === " " || b === " ") {
    error.textContent = "Пусті поля";
    return;
  }

  const A = parseFloat(a);
  const B = parseFloat(b);

  if (isNaN(A) || isNaN(B)) {
    error.textContent = "Нечислові дані";
    return;
  }

  let result;

  switch (operation) {
    case '+':
      result = A + B;
      break;
    case '-':
      result = A - B;
      break;
    case '*':
      result = A * B;
      break;
    case '/':
      if (B === 0) {
        error.textContent = "Ділення на нуль";
        return;
      }
      result = A / B;
      break;
    default:
      error.textContent = "";
      return;
  }

  if (result % 1 !== 0) {
    result = result.toFixed(5);
  }

  resultElement.textContent = "Результат: " + result;
}

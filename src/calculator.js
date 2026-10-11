const calculator = (num1, num2, operation) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return false;
  }
  if (!["+", "-", "*", "/"].includes(operation)) {
    return false
  }

  return eval(`${num1}${operation}${num2}`);
};

if (require.main === module) {
  console.log(calculator(5, 11, "+"));
}

module.exports = calculator;
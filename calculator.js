const calc = (...expressionTerms) => {
  let nums = [];

  let operators = [];

  expressionTerms.forEach((term, index) => {
    if (isNumber(term)) {
      nums.push(term);
    } else if (isOperator(term)) {
      while (
        operators.length !== 0 &&
        getPrecedence(term) <= getPrecedence(operators[operators.length - 1])
      ) {
        let opResult = performOperation(nums, operators.pop());

        nums.push(opResult);
      }

      operators.push(term);
    } else {
      if (index % 2) throw new Error("Invalid operator");
      throw new Error("Invalid input type");
    }
  });

  while (operators.length !== 0) {
    let opResult = performOperation(nums, operators.pop());

    nums.push(opResult);
  }

  return nums[0];
};

const isNumber = (term) => {
  return typeof term === "number" && !isNaN(term);
};

const isOperator = (term) => {
  return (
    term === "+" ||
    term === "-" ||
    term === "*" ||
    term == "/" ||
    term === "%" ||
    term == "^"
  );
};

const getPrecedence = (operator) => {
  switch (operator) {
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;
    case "%":
      return 3;
    case "^":
      return 4;
    default:
      throw new Error("Not supported operation");
  }
};

const performOperation = (numbers, operation) => {
  let a = numbers.pop();

  let b = numbers.pop();

  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return b - a;
    case "*":
      return a * b;
    case "%":
      return b % a;
    case "^":
      return Math.pow(b, a);
    case "/":
      if (a === 0) {
        throw new Error("Division by zero");
      }

      return b / a;
    default:
      throw new Error("Not supported operation");
  }
};

module.exports = calc;

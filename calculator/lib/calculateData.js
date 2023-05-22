function calculator(operator, numb) {
  switch (operator) {
    case "sum":
      return numb.reduce((acc, item) => acc + item);
    case "sub":
      return numb.reduce((acc, item) => acc - item);
    case "mult":
      return numb.reduce((acc, item) => acc * item);
    case "div":
      return numb.reduce((acc, item) => acc / item);
    default:
      return "uncnovn operation type";
  }
}

module.exports = calculator;

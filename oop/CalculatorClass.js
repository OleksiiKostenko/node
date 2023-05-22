class CalculatorClass {
  constructor(operator, numbers) {
    this.operator = operator;
    this.numbers = numbers;
  }
  calculator(operator, numb) {
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
  init() {
    return this.calculator(this.operator, this.numbers);
  }
}

const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((num) => Number(num));

module.exports = new CalculatorClass(operator, numbers);

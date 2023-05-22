//node calc.js sum 5 8 6
//node calc.js sub 9 4 1
//node calc.js mult 3 2 4
//node calc.js div 18 2 3
// console.log(process.argv);

const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((num) => Number(num));

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

const total = calculator(operator, numbers);

console.log(total);

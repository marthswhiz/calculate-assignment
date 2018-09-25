let calculator = {
    num1: parseInt(prompt('Please Enter num1'), 10),
    num2: parseInt(prompt('Please Enter num2'),10),
    read:() =>{
      calculator.num1;
      calculator.num2;
      },
    sum:() => {
      const sum = calculator.num1 + calculator.num2;
      return sum;
    },
    mul:() =>{
       const mul = calculator.num1 * calculator.num2;
       return mul;
    },
    div:() =>{
        const div = calculator.num1 / calculator.num2;
        return div;
    },
    sqr:() =>{
        const sqr = calculator.num1 ** calculator.num2;
        return sqr;
    },
};
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  alert( calculator.div() );
  alert( calculator.sqr() );

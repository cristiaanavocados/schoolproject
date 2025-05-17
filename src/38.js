function randomNodejsCode() {
  // Example: Simple JavaScript code with variables and conditions

  const variables = [
    "Hello",
    42,
    true,
    3.14
  ];

  function randomVariable(variable) {
    return Math.random();
  }

  let result = `var myVar = ${randomVariable(variables[0])}, 
                     var anotherVar = ${randomVariable(variables[1])}, 
                     var thirdVar = ${randomVariable(variables[2])}, 
                     var fourthVar = ${randomVariable(variables[3])}`;

  return result;
}

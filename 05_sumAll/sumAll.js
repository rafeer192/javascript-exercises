const sumAll = function(num1, num2) {
  if(!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) //Number.isInteger(value) better than typeof to check if integer
    return "ERROR"; 

  let sum = 0; 
  if(num1 > num2) { // Switch num1 and num2 if out of order
    let temp = num1; 
    num1 = num2; 
    num2 = temp; 
  }
  for(let i = num1; i <= num2; i++) {
    sum += i; 
  }
  return sum; 
};

// Do not edit below this line
module.exports = sumAll;

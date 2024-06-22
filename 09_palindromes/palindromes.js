const palindromes = function (string) {
  const arr = string.replaceAll(/[!"#$%&'()*+,-./: ;<=>?@[\]^_`{|}~]/g, '').toUpperCase().split(''); 
  const reversedArr = arr.slice().reverse();
  return arr.every((item, index) => item === reversedArr[index]); 
};

// Do not edit below this line
module.exports = palindromes;

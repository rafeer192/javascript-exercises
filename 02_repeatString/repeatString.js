const repeatString = function(string, num) {
  let repeated = "";
  if(num < 0) {
    repeated = "ERROR"; 
  } 
  else {
    for(let i = 0; i < num; i++) {
      repeated += string;
    }
  }
  return repeated; 
};

// Do not edit below this line
module.exports = repeatString;
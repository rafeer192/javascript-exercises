const fibonacci = function(place) {
  place = parseInt(place); 
  if(place < 0) {
    return "OOPS"; 
  } else if(place === 0) {
    return 0; 
  } else if(place === 1) {
    return 1; 
  } else {
    return fibonacci(place-2) + fibonacci(place-1); 
  }
};

// Do not edit below this line
module.exports = fibonacci;

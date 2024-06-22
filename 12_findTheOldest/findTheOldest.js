const findTheOldest = function(array) {
  return array.reduce((prev, current) => {
    let age = 0; 
    let prevAge = 0;
    const date = new Date(); 
    const year = Number(date.getFullYear()); 

    if(current.yearOfDeath) {
      age = current.yearOfDeath - current.yearOfBirth; 
    } else {
      age = year - current.yearOfBirth; 
    }

    if(prev.yearOfDeath) {
      prevAge = prev.yearOfDeath - prev.yearOfBirth; 
    } else {
      prevAge = year - prev.yearOfBirth; 
    }
    if(age > prevAge) {
      prev = current; 
    }
    return prev; 
  }); 
};

// Do not edit below this line
module.exports = findTheOldest;

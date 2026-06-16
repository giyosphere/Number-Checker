// boolean function helper 
function isPositive(number){
  return number >=0
}

// boolean function helper 
function isNegative(number){
return number < 0;
}

// boolean function helper 
function isZero(number){
return number === 0;
}

// boolean function helper 
function isEven(number){
return number % 2 === 0
}

// boolean function helper 
function isOdd(number){
return number % 2 !== 0
}


//main function
function describeNumber(number){
  const positive = isPositive(number);
  const negative = isNegative(number);
  const zero = isZero(number);
  const even = isEven(number);
  const odd = isOdd(number);

return `positive: ${positive}, negative: ${negative}, zero: ${zero}, even: ${even}, odd: ${odd}`
}



//trigger that throw input in the main function
console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));





  
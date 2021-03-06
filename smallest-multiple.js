console.log('Smallest Multiple');

const verbose = false;
console.log('verbose:', verbose);

// Function finds the factorial of the provided number recursively.
// i.e. 4! = 4 * 3 * 2 * 1
function factorial(number) {
   if (verbose) {
      console.log('factorial() -> number:', number);
   }
   // base case
   if (number === 0 || number === 1) {
      if (verbose) {
         console.log('factorial() -> returned from if');
      }
      return 1;
   } else {
      if (verbose) {
         console.log('factorial() -> returned from else');
      }
      return number * factorial(number - 1);
   }
}

/// same function found iteratively
// Function finds the factorials of the provided number iteratively.
// i.e. 4! = 4 * 3 * 2 * 1
// function factorial(number) {
//    let answer = 1;
//    if (verbose) {
//       console.log('factorial() -> number:', number);
//       console.log('factorial() -> answer:', answer);
//    }
//    // base case
//    if (number === 0 || number === 1) {
//       return answer;
//    } else {
//       for (let i = number; i > 1; i--) {
//          answer *= i;
//          if (verbose) {
//             console.log('factorial() -> answer:', answer);
//          }
//       }
//    }
//    if (verbose) {
//       console.log('factorial() -> answer:', answer);
//    }
//    return answer;
// }

// Function checks to see if a number is even, returns true if it is
function isEven(number) {
   if (verbose) {
      console.log('isEven() -> number:', number);
   }
   return number % 2 === 0;
}

// Function checks if a number is a mulitple of 5, trues true if it is
function multipleOfFive(number) {
   if (verbose) {
      console.log('mulitpleOfFive() -> number', number);
   }
   return number % 5 === 0;
}

// Function starts at maxMultipler! and progressively checks smaller multiples
// of the maxMultipler to see if maxMultipler-1, maxMultipler-2, ...
// maxMultipler-n divide evenly as well to find the smallest multiple of all
// sequential numbers from 1 upto and including maxMultipler
function smallestMultiple(maxMultipler) {
   let maxMultiplierFactorial = factorial(maxMultipler);
   let smallestMultiple = maxMultiplierFactorial;
   if (verbose) {
      console.log('smallestMultiple() -> maxMultipler:', maxMultipler);
      console.log('smallestMultiple() -> maxMultiplierFactorial:', maxMultiplierFactorial);
      console.log('smallestMultiple() -> smallestMultiple:', smallestMultiple);
   }
   for (let startingMultiple = (maxMultiplierFactorial - maxMultipler); startingMultiple > 1; startingMultiple -= maxMultipler) {
      if (verbose) {
         console.log('smallestMultiple() -> startingMultiple:', startingMultiple);
      }
      for (let counter = (maxMultipler - 1); counter > 1; counter--) {
         if (verbose) {
            console.log('smallestMultiple() -> counter:', counter);
         }
         if (!isEven(startingMultiple)) {
            if (verbose) {
               console.log('smallestMultiple() ->', startingMultiple, 'is not an even number');
               console.log('smallestMultiple() -> starting next iteration of outer for loop');
            }
            break;
         }
         if (startingMultiple > 5 && !multipleOfFive(startingMultiple)) {
            if (verbose) {
               console.log('smallestMultiple() ->', startingMultiple, 'is greater than 5');
               console.log('smallestMultiple() ->', startingMultiple, 'is not a multiple of 5');
               console.log('smallestMultiple() -> starting next iteration of outer for loop');
            }
            break;
         }
         if (startingMultiple % counter !== 0) {
            if (verbose) {
               console.log('smallestMultiple() ->', startingMultiple, '%', counter, '!== 0');
               console.log('smallestMultiple() -> starting next iteration of outer for loop');
            }
            break;
         }
         if (verbose) {
            console.log('smallestMultiple() ->', startingMultiple, '%', counter, '=== 0');
         }
         if (counter === 2) {
            smallestMultiple = startingMultiple;
            if (verbose) {
               console.log('smallestMultiple() -> smallestMultiple:', smallestMultiple);
            }
         }
      }
   }
   return smallestMultiple;
}

// console.log();
// console.log();
// console.log('The smallest multiple of 20! is:', smallestMultiple(20));
// console.log();
// console.log();

/// testing
console.log('*** factorial() Testing ***');
console.log('\tcalling findFactorial() on 2, should return 2:', factorial(2));
console.log('\tcalling findFactorial() on 3, should return 6:', factorial(3));
console.log('\tcalling findFactorial() on 10, should return 3628800:', factorial(10));
console.log('*** smallestMultiple() Testing ***');
console.log('\tcalling smallestMultiple() on 4, should return 12:', smallestMultiple(4));
console.log('\tcalling smallestMultiple() on 5, should return 60:', smallestMultiple(5));
console.log('\tcalling smallestMultiple() on 6, should return 60:', smallestMultiple(6));
console.log('\tcalling smallestMultiple() on 10, should return 2520:', smallestMultiple(10));
console.log('*** isEven() Testing ***');
console.log('\tcalling isEven() on 4, should return true:',isEven(4));
console.log('\tcalling isEven() on 24, should return true:',isEven(24));
console.log('\tcalling isEven() on 171, should return false:',isEven(171));
console.log('\tcalling isEven() on 69, should return false:',isEven(69));
console.log('*** multipleOfFive() Testing ***');
console.log('\tcalling multipleOfFive() on 20, should return true:',multipleOfFive(20));
console.log('\tcalling multipleOfFive() on 375, should return true:',multipleOfFive(375));
console.log('\tcalling multipleOfFive() on 171, should return false:',multipleOfFive(171));
console.log('\tcalling multipleOfFive() on 69, should return false:',multipleOfFive(69));

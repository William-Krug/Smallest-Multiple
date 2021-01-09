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
      return number * findFactorial(number - 1);
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
console.log('*** findFactorial() Testing ***');
console.log('\tcalling findFactorial() on 2, should return 2:', findFactorial(2));
console.log('\tcalling findFactorial() on 3, should return 6:', findFactorial(3));
console.log('\tcalling findFactorial() on 10, should return 3628800:', findFactorial(10));
console.log('*** smallestMultiple() Testing ***');
console.log('\tcalling smallestMultiple() on 4, should return 12:', smallestMultiple(4));
console.log('\tcalling smallestMultiple() on 5, should return 60:', smallestMultiple(5));
console.log('\tcalling smallestMultiple() on 6, should return 60:', smallestMultiple(6));
console.log('\tcalling smallestMultiple() on 10, should return 2520:', smallestMultiple(10));

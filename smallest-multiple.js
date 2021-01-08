console.log('Smallest Multiple');

const verbose = true;
console.log('verbose:', verbose);

// Function finds the factorial of the provided number recursively.
// i.e. 4! = 4 * 3 * 2 * 1
function findFactorial(number) {
   if (verbose) {
      console.log('findFactorial() -> number:', number);
   }
   // base case
   if (number === 0 || number === 1) {
      if (verbose) {
         console.log('findFactorial() -> returned from if');
      }
      return 1;
   } else {
      if (verbose) {
         console.log('findFactorial() -> returned from else');
      }
      return number * findFactorial(number - 1);
   }
}

/// same function found iteratively
// Function finds the factorials of the provided number iteratively.
// i.e. 4! = 4 * 3 * 2 * 1
// function findFactorial(number) {
//    let answer = 1;
//    // base case
//    if (number === 0 || number === 1) {
//       return answer;
//    } else {
//       for (let i = number; i > 1; i--) {
//          answer *= i;
//       }
//    }
//    return answer;
// }

function smallestMultiple(maxMultipler) {
   let maxMultiplierFactorial = findFactorial(maxMultipler);
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
         } else {
            if (verbose) {
               console.log('smallestMultiple() ->', startingMultiple, '%', counter, '=== 0');
            }
         }
         smallestMultiple = startingMultiple;
         if (verbose) {
            console.log('smallestMultiple() -> smallestMultiple:', smallestMultiple);
         }
      }
   }


   return smallestMultiple;
}

console.clear();
console.log('smallestMultiple of 10!:', smallestMultiple(10));

/// testing
// console.log('*** findFactorial() Testing ***');
// console.log('\tcalling findFactorial() on 2, should return 2:', findFactorial(2));
// console.log('\tcalling findFactorial() on 3, should return 6:', findFactorial(3));
// console.log('\tcalling findFactorial() on 10, should return 3628800:', findFactorial(10));
// console.log('*** smallestMultiple() Testing ***');
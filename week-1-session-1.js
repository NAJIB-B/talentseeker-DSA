const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const test2 = [24, 12, 32, 13, 22, 23, 21];
const test3 = [0, 1, 4, 6, 7, 11, 55, 1001, 19];

// For function declearation
const is_prime_D = function (number) {
  if (number === 0 || number === 1) return false;
  if (number === 2 || number === 3) return true;

  for (let i = 2; i < number - 1; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const is_non_positive_D = function (number) {
  return number < 0 ? true : false;
};

const list_checker_D = function (array) {
  let result = [];
  for (const number of array) {
    if (is_non_positive_D(number)) break;
    else if (is_prime_D(number)) result.push(number);
  }
  return result;
};

// For function expression

function is_prime_E(number) {
  if (number === 0 || number === 1) return false;
  if (number === 2 || number === 3) return true;

  for (let i = 2; i < number - 1; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function is_non_positive_E(number) {
  return number < 0 ? true : false;
}

function list_checker_E(array) {
  let result = [];
  for (const number of array) {
    if (is_non_positive_E(number)) break;
    else if (is_prime_E(number)) result.push(number);
  }
  return result;
}

// Tests --- uncomment the code below to test
// console.log(list_checker_D(test1));
// console.log(list_checker_D(test2));
// console.log(list_checker_D(test3));
// console.log(list_checker_E(test1));
// console.log(list_checker_E(test2));
// console.log(list_checker_E(test3));

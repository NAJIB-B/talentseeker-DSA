// Guide if a current number is greater or equal to the next number,
//then you add the current number to the result
//but if the current number is less than the next number
// then you subtract the current number from the result

const constants = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function romanToInteger(value) {
  let romanValue = value.toLowerCase();
  let result = 0;
  let current = 0;
  let next = 0;

  for (let i = 0; i < romanValue.length; i++) {
    current = constants[romanValue[i]];
    next = constants[romanValue[i + 1]];
    if (next) {
      if (current < next) {
        result -= current;
      } else if (current > next || current == next) {
        result += current;
      }
    } else {
      result += current;
    }
  }
  return result;
}
console.log(romanToInteger("mcmxciv"));

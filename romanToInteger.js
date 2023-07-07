// Guide if a smaller number comes before a bigger number, then you subtract the smaller from bigger
//else you add them together

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
  let prev = 0;

  for (let i = 0; i < romanValue.length; i++) {
    current = constants[romanValue[i]];
    if (prev < current) {
      result = current - prev;
      prev = current;
    } else {
      result += current;
      prev = current;
    }
  }
  return result;
}
console.log(romanToInteger("xcv"));

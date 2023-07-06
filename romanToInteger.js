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
  if (romanValue.length == 1) {
    result = constants[romanValue[0]];
    return result;
  } else if (romanValue.length == 2) {
    if (constants[romanValue[0]] < constants[romanValue[1]]) {
      result = constants[romanValue[1]] - constants[romanValue[0]];

      return result;
    } else {
      result = constants[romanValue[0]] + constants[romanValue[1]];
      return result;
    }
  } else {
    for (let i = 0; i < romanValue.length; i++) {
      result += constants[romanValue[i]];
    }
    return result;
  }
}

console.log(romanToInteger("dccc"));

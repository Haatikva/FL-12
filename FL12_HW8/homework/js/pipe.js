// 													task 6
function pipe(value) {
  for (let i = 1; i < arguments.length; i++) {
    value = arguments[i](value);
  }
  console.log(value);
  return value;
}
function addOne(x) {
  return x + 1;
}

pipe(12, addOne, addOne, addOne, addOne, addOne, addOne);

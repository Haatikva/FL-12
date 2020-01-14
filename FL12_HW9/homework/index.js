function сonvert() {
  let a = [];
  for (let i = 0; i < arguments.length; i++) {
    typeof arguments[i] === 'string'
      ? a[i] = +arguments[i]
      : a[i] = arguments[i].toString();
  }
  return a;
}

function executeforEach(arr, callback) {
  for (const item of arr) {
    callback(item);
  }
}

function mapArray(arr, callback) {
  let result = [];
  executeforEach(arr, item => result.push(callback(+item)));
  return result;
}

function filterArray(arr, callback) {
  let result = [];
  executeforEach(arr, item => callback(item) ? result.push(item) : "");
  return result;
}

function flipOver(str) {
  let flpdStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    flpdStr += str[i];
  }
  return flpdStr;
}

function makeListFromRange(arr) {
  let result = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    result.push(i);
  }
  return result;
}

const actors = [
  { name: "tommy", age: 36 },
  { name: "lee", age: 28 }
];
function getArrayOfKeys(arr, key) {
  let result = [];
  executeforEach(arr, item => result.push(item[key]));
  return result;
}
const min = 30;

function substitute(arr) {
  return mapArray(arr, function(el) {
    el = el < min ? "*" : el;
    return el;
  });
}

const day_lenght = 86400000;
const date = new Date(2019,0,2);

function getPastDay(date, num) {
  return new Date(date - num * day_lenght).getDate();
}

// 													task 5
function makeNumber(line) {
  let string = "";

  for (let i = 0; i < line.length; i++) {
    if (isFinite(line[i])) {
      string += line[i];
    }
  }
  return string;
}

function countNumbers(line) {
  let func = makeNumber(line);
  let NewArr = {};
  for (let i = 0; i < func.length; i++) {
    if (NewArr[func[i]]) {
      NewArr[func[i]] += 1;
    } else {
      NewArr[func[i]] = 1;
    }
  }
  return NewArr;
}
countNumbers("erer384jj4444666888jfd123");
countNumbers("jdjjka000466588kkkfs662555");

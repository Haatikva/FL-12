// 													task 4
function makeNumber(line) {
  let string = "";

  for (let i = 0; i < line.length; i++) {
    if (isFinite(line[i])) {
      string += line[i];
    }
  }
  return string;
}
makeNumber("erer384jjjfd123");
makeNumber("123098h76gfdd");
makeNumber("ijifjgdj");

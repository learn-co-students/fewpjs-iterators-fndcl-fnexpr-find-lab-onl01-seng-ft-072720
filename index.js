const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let win = record.find(function (e) { return e.result === 'W' });
  return win ? win.year : undefined;
}

const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let championship = record.find(function(w) { return w.result === "W"})
  return championship ? championship.year : undefined
}

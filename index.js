const testVar = {}

function testFunc() {
  return "hi"
}

const record = {}

function superbowlWin(record){
  let winYear = record.find(function(r) { return r.result === "W"})
  if (winYear){
    return winYear.year
  }
}
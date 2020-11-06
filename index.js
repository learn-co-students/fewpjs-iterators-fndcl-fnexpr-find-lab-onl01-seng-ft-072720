const testVar = {}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  debugger
  let win = array.find(function (obj) {return obj.result === "W"})
  if (win) {
    return win.year
  } else {
    return win
  }
}

// superbowlWin(record);

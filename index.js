const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let win = array.find(game => { return game['result'] === "W"})
  if (win) {
    return win['year']
  }
}
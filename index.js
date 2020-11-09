const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
    let game = array.find(g => g.result === "W")
    debugger
    return !!game ? game.year : undefined
};